import cross from "../../Assets/cross.svg"
import arrow from "../../Assets/arrow.svg"
import { useEffect, useState } from "react";
import { Spinner } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux"
import { FgtTeamThunk } from "../../../Redux/loginSlice";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { dialog12, dialog0, dialog13, dialog11 } from "../../../Redux/step";
import ReCAPTCHA from "react-google-recaptcha";
import {
    GoogleReCaptchaProvider,
    GoogleReCaptcha
} from 'react-google-recaptcha-v3';
import { useCallback } from "react";

function ForgotTeam() {

    const {executeRecaptcha} = useGoogleReCaptcha();
    const dispatch = useDispatch()
    const reducer = useSelector((s) => s.login)
    const [email, setEmail] = useState("")
    const [loader, setLoader] = useState(false)
    const [bool, setBool] = useState(false)
    const rightemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    useEffect(() => {
        if (rightemail.test(email)) {
            document.getElementById("wrongEmailLog1").style.display = "none";
            setBool(true)
        } else if (email) {
            document.getElementById("wrongEmailLog1").style.display = "block";
            setBool(false)
        }
    }, [email]);

    const [load, setLoad] = useState(false)

    const handleSubmit = 
    (e) => {
      e.preventDefault();
      if (!executeRecaptcha) {
        console.log("recaptcha not loaded");
        return;
      }
      executeRecaptcha("enquiryFormSubmit").then((gReCaptcha) => {
        console.log(gReCaptcha, "recaptcha");
        ForgotPassword(gReCaptcha);

      });
    }

    function ForgotPassword(valu) {
        const data = {
            email,
            "g-recaptcha-response": valu
        }
        if (bool) {
            setLoad(true)
            localStorage.setItem("login_email", email);
        dispatch(FgtTeamThunk(data)).
            then((res) => {
                setLoad(false)
                var y = res.payload.data.msg.replace(
                    /\w\S*/g,
                    function (txt) {
                        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                    }
                );

                if (res.payload.status == 400) {
                    toast.error(y, {
                        position: "top-right",
                        theme: "light",
                        autoClose: 5000,
                    });
                }
                if (res.payload.status == 201) {
                    dispatch(dialog13())
                    toast.success(y, {
                        position: "top-right",
                        theme: "light",
                        autoClose: 5000,
                    });
                }
                if (res.payload.status === 429) {
                    toast.error("You have attempted too many times Today, please try again tomorrow", {
                        position: "top-right",
                        theme: "light",
                        autoClose: 5000,
                    });
                }
            })
    }}
        // if (token && email && bool) {
        //     dispatch(FgtTeamThunk(data)).
        //         then((res) => {
        //             var y = res.payload.data.msg.replace(
        //                 /\w\S*/g,
        //                 function (txt) {
        //                     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        //                 }
        //             );

        //             if (res.payload.status == 400) {
        //                 toast.error(y, {
        //                     position: "top-right",
        //                     theme: "light",
        //                     autoClose: 5000,
        //                 });
        //             }
        //             if (res.payload.status == 201) {
        //                 dispatch(dialog13())
        //                 toast.success(y, {
        //                     position: "top-right",
        //                     theme: "light",
        //                     autoClose: 5000,
        //                 });
        //             }
        //             if (res.payload.status === 429) {
        //                 toast.error("You have attempted too many times Today, please try again tomorrow", {
        //                     position: "top-right",
        //                     theme: "light",
        //                     autoClose: 5000,
        //                 });
        //             }
        //         })
        // }

    const [timer, setTimer] = useState(10)
    useEffect(() => {
        if (reducer.loading || load) {
            const time =
                timer > 0 && setInterval(() => {
                    setTimer(timer - 1)
                }, 1000)
            return () => clearInterval(time)
        }
    }, [timer, reducer.loading, load])

    useEffect(() => {
        if (timer > 0) {
            if (reducer.loading || load) {
                setLoader(true)
                document.body.style.opacity = 0.5;
            }
            else {
                setLoader(false)
                document.body.style.opacity = 1;
            }
        }
        else {
            setLoader(false)
            document.body.style.opacity = 1;
            setLoad(false)
        }
    }, [reducer.loading, load, timer])

    return <>
        <div className="register">
            <div className="regFlex" id="fgtHeadbox">
                <img className="arrow" src={arrow} onClick={() => { dispatch(dialog11()) }} />
                <p className="heading" id="forgotHead">Forgot Password?</p>
                <img className="cross" src={cross} onClick={() => { dispatch(dialog0()) }} />
            </div>

            <form className='allForm' onSubmit={handleSubmit} id="loginForm">
                <p className="forgotText">We’ll send you a One Time Password on this email.</p>
                <p className="regName">Email ID</p>
                <input type="text" className="regInputname" required placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <p id="wrongEmailLog1">Please enter a valid Email address</p>
                <button className="regButton" type="submit" >Continue</button>
            </form>
        </div>
        <ToastContainer />
        {(loader) ? <Spinner animation="border" variant="dark" id="loadSpinner" /> : null}
    </>

}
export default ForgotTeam