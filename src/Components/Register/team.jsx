import cross from "../Assets/cross.svg"
import arrow from "../Assets/arrow.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux"
import { RegTeamThunk } from "../../Redux/registerSlice";
import { Spinner } from 'react-bootstrap';
import { dialog0, dialog1,dialog16 } from "../../Redux/step";

function Team(props) {

    // team registration
    const [loading, setLoading] = useState(false)
    // const [referralCode, setRefferalCode] = useState('')
    const dispatch = useDispatch()
    const reducer = useSelector((s) => s.register)
    const rightpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&])[A-Za-z\d@$#!%*?&]{8,}$/;
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [bool, setBool] = useState(false)
    const [bool1, setBool1] = useState(false)
    const [bool2, setBool2] = useState(false)

    function handleShow1() {
        setShow1(!show1)
    }
    function handleShow2() {
        setShow2(!show2)
    }

    const teamState = {
        name: '',
        size: '',
        leaderId: '',
        member3: '',
        member2: '',
        referral: '',
        pass: '',
        cPass: ''
    }
    const [team, setTeam] = useState(teamState)
    useEffect(() => {
        if (rightpass.test(team.pass)) {
            document.getElementById("WrongPwdTeam1").style.display = "none";
            setBool(true)
        } else if (team.pass) {
            document.getElementById("WrongPwdTeam1").style.display = "block";
            setBool(false)
        }
    }, [team.pass]);

    useEffect(() => {
        if (team.pass || team.cPass) {
            if (team.pass === team.cPass) {
                document.getElementById("WrongPwdTeam2").style.display = "none";
                setBool1(true)
            }
            else {
                document.getElementById("WrongPwdTeam2").style.display = "block";
                setBool1(false)
            }
        }
    }, [team.cPass, team.pass])

    useEffect(() => {
        if (team.size) {
            if (team.size === 2) {
                document.getElementsByClassName("teamLeader")[0].style.display = "block";
                document.getElementsByClassName("teamLeader")[1].style.display = "block";
                document.getElementsByClassName("teamLeader")[2].style.display = "none";
            }
            if (team.size === 3) {
                document.getElementsByClassName("teamLeader")[0].style.display = "block";
                document.getElementsByClassName("teamLeader")[1].style.display = "block";
                document.getElementsByClassName("teamLeader")[2].style.display = "block";
            }
        }
    }, [team.size])

    const [msg, setMsg] = useState('')
    useEffect(() => {
        if (team.size) {
            setMsg("")
            setBool2(true)
        }
        else {
            setBool2(false)
        }
    }, [team.size])

    function RegAsTeam(e) {
        e.preventDefault();

        if (!team.size) {
            setMsg("Choose a Team Size")
            setBool2(false)
        }
        else {
            setMsg("")
            setBool2(true)
        }

        var data;
        if (team.referral) {
            if (team.size === 2) {
                data = {
                    "name": team.name,
                    "size": parseInt(team.size),
                    "leader_id": parseInt(team.leaderId),
                    "member_2": parseInt(team.member2),
                    "referral_used": team.referral,
                    "password": team.pass
                }
            }
            if (team.size === 3) {
                data = {
                    "name": team.name,
                    "size": parseInt(team.size),
                    "leader_id": parseInt(team.leaderId),
                    "member_2": parseInt(team.member2),
                    "member_3": parseInt(team.member3),
                    "referral_used": team.referral,
                    "password": team.pass
                }
            }
        }
        else {
        if (team.size === 2) {
            data = {
                "name": team.name,
                "size": parseInt(team.size),
                "leader_id": parseInt(team.leaderId),
                "member_2": parseInt(team.member2),
                "password": team.pass
            }
        }
        if (team.size === 3) {
            data = {
                "name": team.name,
                "size": parseInt(team.size),
                "leader_id": parseInt(team.leaderId),
                "member_2": parseInt(team.member2),
                "member_3": parseInt(team.member3),
                "password": team.pass
            }
        }
        }
        if (bool && bool1 && bool2) {
            dispatch(RegTeamThunk(data)).
                then((res) => {
                    if (res.payload.status === 201) {
                        toast.success(`${res.payload.data.msg}`, {
                            position: "top-right",
                            theme: "light",
                            autoClose: 5000,
                        });
                        dispatch(dialog0())
                    }
                    else if (res.payload.status === 429) {
                        toast.error("You have attempted too many times Today, please try again tomorrow", {
                            position: "top-right",
                            theme: "light",
                            autoClose: 5000,
                        });
                    }
                    else {
                        // let x = Object.keys(res.payload.data)
                        toast.error(`${res.payload.data[Object.keys(res.payload.data)[0]]}`, {
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

    const [timer, setTimer] = useState(10)
    useEffect(() => {
        if (reducer.loading) {
            const time =
                timer > 0 && setInterval(() => {
                    setTimer(timer - 1)
                }, 1000)
            return () => clearInterval(time)
        }
    }, [timer, reducer.loading])

    useEffect(() => {
        if (timer > 0) {
            if (reducer.loading) {
                setLoading(true)
                document.body.style.opacity = 0.5;
            }
            else {
                setLoading(false)
                document.body.style.opacity = 1;
            }
        }
        else {
            setLoading(false)
            document.body.style.opacity = 1;

        }
    }, [reducer.loading, timer])

    return <>
        <div className="register" id="registerTeam" style={{height:team.size===2?"920px":"1000px"}}>
            <div className="regFlex" id="teamReg">
                <img className="arrow" src={arrow} alt="" onClick={() => { !props.home?dispatch(dialog1()):dispatch(dialog16()) }} />
                <p className="heading">Register as <span id="member">Team</span></p>
                <img className="cross" src={cross} alt="" onClick={() => { dispatch(dialog0()) }} />
            </div>
            <form className="allForm" onSubmit={RegAsTeam}>
                <p className="regName">Team Name</p>
                <input required type="text" className="regInputname" placeholder="Enter team name" value={team.name} onChange={(e) => { setTeam({ ...team, name: e.target.value }) }} />
                <p className="regName">Team Size</p>
                <select required className="regInputname" value={team.size} onChange={(e) => { setTeam({ ...team, size: e.target.value }) }}>
                    <option value="" >--select--</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <p className="teamError">{msg}</p>
                <p className="regName">Referral Code</p>
                <input type="text" className="regInputname" placeholder="Enter referral code" value={team.referral} onChange={(e) => { setTeam({ ...team, referral: e.target.value }) }} />
                <p className="regName">Password</p>
                {show1 ? (
                    <FontAwesomeIcon icon={faEye} id="TEye" onClick={handleShow1} />
                ) : (
                    <FontAwesomeIcon icon={faEyeSlash} id="TEye" onClick={handleShow1} />
                )}
                <input required type={show1 ? "text" : "password"} className="regInputname inputPwd" placeholder="Enter password" value={team.pass} onChange={(e) => { setTeam({ ...team, pass: e.target.value }) }} />
                <p id="WrongPwdTeam1">Password must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character</p>
                <p className="regName">Confirm Password</p>
                {show2 ? (
                    <FontAwesomeIcon icon={faEye} id="TEye" onClick={handleShow2} />
                ) : (
                    <FontAwesomeIcon icon={faEyeSlash} id="TEye" onClick={handleShow2} />
                )}
                <input required type={show2 ? "text" : "password"} className="regInputname inputPwd" placeholder="Enter password" value={team.cPass} onChange={(e) => { setTeam({ ...team, cPass: e.target.value }) }} />
                <p id="WrongPwdTeam2">Password entered in two fields must be same.</p>
                <div className="teamLeader">
                    <p className="regName">Team Leader's Scroll ID</p>
                    <input type="text" className="regInputname" placeholder="Enter ID" required={(team.size === 2 || team.size === 3) ? true : false} value={team.leaderId} onChange={(e) => { setTeam({ ...team, leaderId: e.target.value }) }} />
                </div>
                <div className="teamLeader">
                    <p className="regName">Member 2's Scroll ID</p>
                    <input type="text" className="regInputname" placeholder="Enter ID" required={(team.size === 2 || team.size === 3) ? true : false} value={team.member2} onChange={(e) => { setTeam({ ...team, member2: e.target.value }) }} />
                </div>
                <div className="teamLeader">
                    <p className="regName">Member 3's Scroll ID</p>
                    <input type="text" className="regInputname" placeholder="Enter ID" required={team.size === 3 ? true : false} value={team.member3} onChange={(e) => { setTeam({ ...team, member3: e.target.value }) }} />
                </div>
                <button className="regButton" type='submit'>Register</button>
            </form>
        </div>
        <ToastContainer />
        {(loading) ? <Spinner animation="border" variant="dark" id="loadSpinner" /> : null}
        {/* </Dialog> */}

    </>

}

export default Team