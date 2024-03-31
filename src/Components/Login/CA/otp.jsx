import cross from "../../Assets/cross.svg"
import arrow from "../../Assets/arrow.svg"
import { useEffect, useState } from "react";
import { Spinner } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux"
import { dialog8, dialog0, dialog10 } from "../../../Redux/step";
import { FgtCAThunk, OtpCAThunk } from "../../../Redux/loginSlice";
import OtpField from "react-otp-field"
import { faYinYang } from "@fortawesome/free-solid-svg-icons";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
function Otp() {

    const {executeRecaptcha} = useGoogleReCaptcha();
    const dispatch = useDispatch()
    const reducer = useSelector((s) => s.login)
    const [loader, setLoader] = useState(false)
    const [value, setValue] = useState("")
    const [seconds, setSeconds] = useState(59)
    const email = localStorage.getItem("login_email")

    useEffect(() => {
        const timer =
            seconds > 0 && setInterval(() => {
                setSeconds(seconds - 1)
            }, 1000)
        return () => clearInterval(timer)
    }, [seconds])

    useEffect(() => {
        if (seconds != 0)
            document.getElementById("resendOtp").style.opacity = "0.5";
        else
            document.getElementById("resendOtp").style.opacity = "1";
    }, [seconds])

    const handleSubmit = 
    () => {
      if (!executeRecaptcha) {
        console.log("recaptcha not loaded");
        return;
      }
      executeRecaptcha("enquiryFormSubmit").then((gReCaptcha) => {
        console.log(gReCaptcha, "recaptcha");
        const data = {
            email,
            "g-recaptcha-response": gReCaptcha
        }
        dispatch(FgtCAThunk(data), setSeconds(59));
        toast.success("Check your mail for OTP", {
            position: "top-right",
            theme: "light",
            autoClose: 5000,
        });
      });
    }


    function Otp() {
        localStorage.setItem("login_otp", value)
        const data = {
            "email": email,
            "otp": value
        }
        if (value) {
            dispatch(OtpCAThunk(data)).
                then((res) => {

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
                    if (res.payload.status == 200) {
                        dispatch(dialog10())
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
        }
    }

    useEffect(() => {
        if (reducer.loading) {
            setLoader(true)
            document.body.style.opacity = 0.5;
        }
        else {
            setLoader(false)
            document.body.style.opacity = 1;
        }
    }, [reducer.loading])

    return <>
        <div className="register">
            <div className="regFlex" id="rstHeadbox" >
                <img className="arrow" src={arrow} onClick={() => { dispatch(dialog8()) }} />
                <p className="heading">OTP Verification</p>
                <img className="cross" src={cross} onClick={() => { dispatch(dialog0()) }} />
            </div>
            <div className='allForm' >
            <p className="forgotText">Enter 4 digit OTP send to {email}</p>
            <div className="otpInputFlex">
                <OtpField className="otpInputFlex"
                    value={value}
                    onChange={setValue}
                    numInputs={4}
                    onChangeRegex={/^([0-9]{0,})$/}
                    autoFocus
                    isTypeNumber
                    inputProps={{ className: 'otpInput', disabled: false }}
                />
            </div>
            <div className="resend">
                <p id='resendOtp' disabled={seconds !== 0 ? true : false} onClick={ handleSubmit }>Resend Otp</p>
                <span id="timer">00:{seconds}</span>
            </div>
            <button className="regButton" onClick={Otp}>Continue</button>
            </div>
        </div>

        <ToastContainer />
        {(loader) ? <Spinner animation="border" variant="dark" id="loadSpinner" /> : null}
    </>

}
export default Otp