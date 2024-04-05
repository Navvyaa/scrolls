
import cross from "../Assets/cross.svg"
import arrow from "../Assets/arrow.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux"
import { RegCACheck } from "../../Redux/registerSlice";
import { Spinner } from 'react-bootstrap';
import { dialog0, dialog1, dialog5, dialog16, dialog20 } from "../../Redux/step";

function CA1(props) {

    // ca registration
    const [loading, setLoading] = useState(false)
    const [bool, setBool] = useState(false)
    const dispatch = useDispatch()
    const reducer = useSelector((s) => s.register)
    const rightemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const [caEemail, setCAEmail] = useState('')

    useEffect(() => {
        if (rightemail.test(caEemail)) {
            document.getElementById("wrongCAEmail").style.display = "none";
            setBool(true)
        }
        else if (caEemail) {
            document.getElementById("wrongCAEmail").style.display = "block";
            setBool(false)
        }
    }, [caEemail])

    function CAEmailCheck(e) {
        e.preventDefault();
        localStorage.setItem("email", caEemail)
        if (caEemail && bool) {
            dispatch(RegCACheck(caEemail)).
                then((res) => {

                    var y = res.payload.data.msg.replace(
                        /\w\S*/g,
                        function (txt) {
                            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                        }
                    );

                    if (res.payload.status === 200) {
                        toast.success(y, {
                            position: "top-right",
                            theme: "light",
                            autoClose: 5000,
                        });
                        dispatch(dialog0())
                    }
                    else if (res.payload.status === 409) {
                        toast.info(y, {
                            position: "top-right",
                            theme: "light",
                            autoClose: 5000,
                        });
                        dispatch(dialog0())
                    }
                    else if (res.payload.status === 400) {
                        toast.info("Fill the following form to complete registration process.", {
                            position: "top-right",
                            theme: "light",
                            autoClose: 5000,
                        });
                        !props.home?dispatch(dialog5()):dispatch(dialog20());
                    }
                    else if (res.payload.status === 429) {
                        toast.error("You have attempted too many times Today, please try again tomorrow", {
                            position: "top-right",
                            theme: "light",
                            autoClose: 5000,
                        });
                    }
                })
                .catch((err) => {

                })
        }
    }

    useEffect(() => {
        if (reducer.loading) {
            setLoading(true)
            document.body.style.opacity = 0.5;
        }
        else {
            setLoading(false)
            document.body.style.opacity = 1;
        }
    }, [reducer.loading])

    return <>
        <div className="register" id="regDiv">
            <div className="regFlex" id="regCA">
                <img className="arrow" id="back" src={arrow} onClick={() => { !props.home?dispatch(dialog1()):dispatch(dialog16()) }} />
                <p className="heading" id="registerCA">Register as <span id="member">Campus Ambassador</span></p>
                <img className="cross" id="back" src={cross} onClick={() => { dispatch(dialog0()) }} />
            </div>
            <form className="allForm" onSubmit={CAEmailCheck}>
                <p className="regName">Email ID</p>
                <input type="text" className="regInputname" placeholder="Enter your email" required value={caEemail} onChange={(e) => setCAEmail(e.target.value)} />
                <p id="wrongCAEmail">Please enter a valid Email address</p>
                <button className="regContinue" type="submit">Continue</button>
            </form>
        </div>
        <ToastContainer />
        {(loading) ? <Spinner animation="border" variant="dark" id="loadSpinner" /> : null}
    </>
}

export default CA1