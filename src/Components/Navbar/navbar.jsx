import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import menu from "../Assets/menu.svg";
import cross from "../Assets/navCross.svg";
import dropdown from "../Assets/dropdown.svg";
// import domain from "../Assets/domain.svg";
import { Button, Dialog, DialogTitle } from "@mui/material";
import Login from "../Login/CA/login";
import Reset from "../Login/CA/reset";
import Otp from "../Login/CA/otp";
import Forgot from "../Login/CA/fgtPwd";
import LoginTeam from "../Login/TEAM/loginTeam";
import ResetTeam from "../Login/TEAM/resetTeam";
import OtpTeam from "../Login/TEAM/otpTeam";
import ForgotTeam from "../Login/TEAM/fgtTeam";
import Register from "../Register/Register";
import Member from "../Register/member";
import Team from "../Register/team";
import CA1 from "../Register/CA1";
import CA2 from "../Register/CA2";
import Login1 from "../Login/login1";
// import { setProcess, unsetProcess } from "../../Redux/heading";
import { useDispatch, useSelector } from "react-redux";
import { dialog1, dialog6, logout } from "../../Redux/step";
import "./Navbar.css";
import LogOut from "../logOut/logOut";
import { RegOpenThunk } from "../../Redux/registerSlice";
import { Spinner } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import imglogo from "../Assets/logo1.png";
import "react-toastify/dist/ReactToastify.css";

function Navbar(props) {
  const [dialogg, setDialogg] = useState(false);
  const [login, setLogin] = useState(false);
  // const [register, setRegister] = useState(false);
  const reducer = useSelector((s) => s.register);
  const [loading, setLoading] = useState(false);
  const [out, setOut] = useState(false);
  const [path, setPath] = useState("");
  const [soon, setSoon] = useState(false);
  const dispatch = useDispatch();
  const step = useSelector((s) => s.step);
  const { title, processBool } = useSelector((s) => s.heading);
  // const navigate = useNavigate();

  const [stepDialog, setStepDialog] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
    ten: false,
    eleven: false,
    twelve: false,
    thirteen: false,
    fourteen: false,
    logout: false,
  });

  useEffect(() => {
    if (step.step === 0) {
      setStepDialog({
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
        seven: false,
        eight: false,
        nine: false,
        ten: false,
        eleven: false,
        twelve: false,
        thirteen: false,
        fourteen: false,
        logout: false,
      });
    }
    if (step.step === 1 && dialogg) {
      setStepDialog({ one: true });
    }
    if (step.step === 2 && dialogg) {
      setStepDialog({ two: true });
    }
    if (step.step === 3 && dialogg) {
      setStepDialog({ three: true });
    }
    if (step.step === 4 && dialogg) {
      setStepDialog({ four: true });
    }
    if (step.step === 5 && dialogg) {
      setStepDialog({ five: true });
    }
    if (step.step === 6 && login) {
      setStepDialog({ six: true });
    }
    if (step.step === 7 && login) {
      setStepDialog({ seven: true });
    }
    if (step.step === 8 && login) {
      setStepDialog({ eight: true });
    }
    if (step.step === 9 && login) {
      setStepDialog({ nine: true });
    }
    if (step.step === 10 && login) {
      setStepDialog({ ten: true });
    }
    if (step.step === 11 && login) {
      setStepDialog({ eleven: true });
    }
    if (step.step === 12 && login) {
      setStepDialog({ twelve: true });
    }
    if (step.step === 13 && login) {
      setStepDialog({ thirteen: true });
    }
    if (step.step === 14 && login) {
      setStepDialog({ fourteen: true });
    }
    if (step.step === 15 && out) {
      setStepDialog({ logout: true });
    }
  }, [step, dialogg]);

  useEffect(() => {
    if (title === "Team") {
      document.getElementsByClassName("liRegister")[0].style.display = "none";
      document.getElementsByClassName("liLogin")[0].style.display = "none";
      document.getElementById("ca").style.display = "none";
      document.getElementById("team").style.display = "block";
      document.getElementById("liTitle").style.display = "block";
      document.getElementById("liLogout").style.display = "block";
      setPath("/team_db");
      document.getElementsByClassName("navFlex1")[0].style.display = "none";
      document.getElementsByClassName("navFlexLogin")[0].style.display = "flex";
      document.getElementsByClassName("navRegister")[0].style.display = "none";
      document.getElementsByClassName("navLogin")[0].style.display = "none";
      document.getElementsByClassName("navDbT")[0].style.display = "block";
      document.getElementsByClassName("navFlex3")[0].style.display = "flex";
    }

    if (title === "CA") {
      document.getElementsByClassName("liRegister")[0].style.display = "none";
      document.getElementsByClassName("liLogin")[0].style.display = "none";
      document.getElementById("team").style.display = "none";
      document.getElementById("ca").style.display = "block";
      document.getElementById("liTitle").style.display = "block";
      document.getElementById("liLogout").style.display = "block";
      setPath("/ca_db");
      document.getElementsByClassName("navFlex1")[0].style.display = "none";
      document.getElementsByClassName("navFlexLogin")[0].style.display = "flex";
      document.getElementsByClassName("navRegister")[0].style.display = "none";
      document.getElementsByClassName("navLogin")[0].style.display = "none";
      document.getElementsByClassName("navDbT")[0].style.display = "block";
      document.getElementsByClassName("navFlex3")[0].style.display = "flex";
    }

    if (title === "") {
      document.getElementsByClassName("liRegister")[0].style.display = "block";
      document.getElementsByClassName("liLogin")[0].style.display = "block";
      document.getElementById("ca").style.display = "none";
      document.getElementById("team").style.display = "none";
      document.getElementById("liTitle").style.display = "none";
      document.getElementById("liLogout").style.display = "none";
      document.getElementsByClassName("navFlex1")[0].style.display = "flex";
      document.getElementsByClassName("navFlexLogin")[0].style.display = "none";
      document.getElementsByClassName("navRegister")[0].style.display = "block";
      document.getElementsByClassName("navLogin")[0].style.display = "block";
      document.getElementsByClassName("navDbT")[0].style.display = "none";
      document.getElementsByClassName("navFlex3")[0].style.display = "none";
      document.getElementById("acc").style.display = "none";
    }
  }, [title]);

  const [showD, setShowD] = useState(false);
  function showmenu() {
    setShowD((prev) => !prev);
    // document.getElementById('uli').style.width = "55vw";
  }

  function close() {
    setShowD(false);
    document.getElementById("uli").style.width = 0;
  }

  useEffect(() => {
    if (showD) document.getElementById("uli").style.width = "55vw";
    else document.getElementById("uli").style.width = 0;
  }, [showD]);

  const [show, setShow] = useState(false);
  function handleDropdown() {
    setShow(true);
    document.getElementById("dropdown").style.display = "flex";
  }
  function closeDropdown() {
    setShow(false);
    setMore(false);
    document.getElementById("dropdown").style.display = "none";
    document.getElementById("moreDD").style.display = "none";
    document.getElementById("moreDD2").style.display = "none";
  }

  const [more, setMore] = useState(false);
  function handleMore() {
    setMore(true);
    document.getElementById("moreDD").style.display = "flex";
  }

  const [more2, setMore2] = useState(false);
  function handleMore2() {
    setMore2(true);
    document.getElementById("moreDD2").style.display = "flex";
  }

  const [mobShow, setMobShow] = useState(false);

  function handleSoonClose() {
    setSoon(false);
  }
  const [processStop, setProcessStop] = useState(false);
  //open registration
  function RegOpen() {
    // setSoon(true)
    // setRegister(true);
    dispatch(RegOpenThunk())
      .then((res) => {
        if (res.payload.status === 200) {
          setDialogg(true);
          dispatch(dialog1());
        }
        if (res.payload.status === 400) {
          setDialogg(true);
          setProcessStop(true);
          // setSoon(true);
        }
        if (res.payload.status === 429) {
          toast.error(
            "You have attempted too many times Today, please try again tomorrow",
            {
              position: "top-right",
              theme: "light",
              autoClose: 5000,
            }
          );
        }
      })
      .catch((err) => {});
  }

  function handleProcessStop() {
    setProcessStop(false);
  }

  function logopen() {
    setDialogg(true);
    setLogin(true);
    dispatch(dialog6());
  }

  useEffect(() => {
    if (reducer.loading) {
      setLoading(true);
      document.body.style.opacity = 0.5;
    } else {
      setLoading(false);
      document.body.style.opacity = 1;
    }
  }, [reducer.loading]);

  return (
    <>
      {/* {showD && */}
      <div id="uli">
        <img src={cross} id="crossimg" onClick={close}></img>
        <ul id="uliList">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <li onClick={() => setMobShow((prev) => !prev)}>
            <div className="flex items-center gap-[0.125rem]">
              Domains <img src={dropdown} id="domainIcon" />
            </div>
          </li>
          {mobShow && (
            <div id="liDropdown">
              <ul>
                <NavLink to="/domain_management">
                  <li>Management Science</li>
                </NavLink>
                <NavLink to="/domain_me">
                  <li>Mechanical Engineering</li>
                </NavLink>
                <NavLink to="/domain_civil">
                  <li>Civil Engineering</li>
                </NavLink>
                <NavLink to="/domain_en">
                  <li>Electrical and Electronics Engineering</li>
                </NavLink>
                <NavLink to="/domain_cs">
                  <li>Computer Science and Information Technology</li>
                </NavLink>
                <NavLink to="/domain_ece">
                  <li>Electronics and Communication Engineering</li>
                </NavLink>
              </ul>
            </div>
          )}
          <NavLink to="/updates">
            <li>Updates</li>
          </NavLink>
          <NavLink to="/process">
            <li>How To Register</li>
          </NavLink>
          <NavLink to="/result">
            <li>Results</li>
          </NavLink>
          <NavLink to="/rules">
            <li>Rules</li>
          </NavLink>
          <NavLink to="/ca">
            <li>CA</li>
          </NavLink>
          {/* <NavLink to="/faq">
            <li>FAQs</li>
          </NavLink> */}
          <NavLink id="acc" to="/accommodations">
            <li>Accommodation</li>
          </NavLink>
          <NavLink to="/team_db">
            <li id="team">Dashboard</li>
          </NavLink>
          <NavLink to="/ca_db">
            <li id="ca">Dashboard</li>
          </NavLink>
          <li id="liTitle">{title}</li>
          <li
            id="liLogout"
            onClick={() => {
              setOut(true);
              dispatch(logout());
            }}
          >
            Logout
          </li>
          <li>
            {" "}
            <div className=" ">
              <button
              
                className="liRegister text-black !important"
                onClick={() => {
                  RegOpen();
                }}
              >
                Register
              </button>
            </div>
          </li>
          <li>
            <div className="">
              <button
                className="liLogin"
                onClick={() => {
                  logopen();
                }}
              >
                Login
              </button>
            </div>
          </li>
        </ul>
      </div>

      <div className="navbar" onMouseLeave={closeDropdown}>
        {/* <div style={{display:"flex",alignItems:'center',justifyContent:'start' ,gap:'2rem'}}> */}
        <NavLink to="/">
          <div className="flex gap-[0.4rem] items-center overflow-hidden">
            <img
              src={imglogo}
              alt=""
              className="md:w-[2.2rem] h-[2.2rem] w-[2rem] min-w-[2rem] min-h-[2.2rem] md:h-[2.4rem]"
            />
            <p className="navScroll">
              SCROLLS<span className="navDot">.</span>
            </p>
          </div>
        </NavLink>
        <div className="navFlex1">
          <NavLink to="/">
            <p
              style={{ color: props.pg === "home" ? "#fac949" : "" }}
              className="navHead"
            >
              Home
            </p>
          </NavLink>
          {title === "" && (
            <div className="relative flex flex-col">
              <p
                className="navHead"
                onClick={handleDropdown}
                onMouseOver={handleDropdown}
                id="navdomain"
              >
                Domains
              </p>
              <div
                className="fixed top-[3rem]"
                id="dropdown"
                onMouseOver={handleDropdown}
                onMouseLeave={closeDropdown}
              >
                <ul>
                  <NavLink to="/domain_management">
                    <li>Management Sciences</li>
                  </NavLink>
                  <NavLink to="/domain_ece">
                    {" "}
                    <li>Electronics and Communication Engineering</li>
                  </NavLink>
                  <NavLink to="/domain_civil">
                    <li>Civil Engineering</li>
                  </NavLink>
                  <NavLink to="/domain_en">
                    {" "}
                    <li>Electrical and Electronics Engineering</li>
                  </NavLink>
                  <NavLink to="/domain_cs">
                    {" "}
                    <li>Computer Science and Information Technology</li>
                  </NavLink>
                  <NavLink to="/domain_me">
                    {" "}
                    <li>Mechanical Engineering</li>
                  </NavLink>
                </ul>
              </div>
            </div>
          )}
          <NavLink to="/updates">
            {" "}
            <p
              style={{ color: props.pg === "update" ? "#fac949" : "" }}
              className="navHead"
            >
              Updates
            </p>
          </NavLink>
          <NavLink to="/rules">
            {" "}
            <p
              style={{ color: props.pg === "rules" ? "#fac949" : "" }}
              id="navRule"
              className="navHead"
            >
              Rules
            </p>
          </NavLink>
          <NavLink to="/ca">
            <p
              style={{ color: props.pg === "ca" ? "#fac949" : "" }}
              id="navCA"
              className="navHead"
            >
              CA
            </p>
          </NavLink>
          <NavLink to="/process">
            {" "}
            <p
              style={{ color: props.pg === "process" ? "#fac949" : "" }}
              id="navCA"
              className="navHead"
            >
              How To Register
            </p>
          </NavLink>
          <NavLink to="/result">
            {" "}
            <p
              style={{ color: props.pg === "res" ? "#fac949" : "" }}
              className="navHead"
              id="navCA"
            >
              Results
            </p>
          </NavLink>
          {/* <NavLink to="/faq">
            <p id="navCA" className="navHead">
              FAQs
            </p>
          </NavLink> */}
          {/* <NavLink to="/accommodations">
            <p id="navCA" className="navHead">
              Accommodation
            </p>
          </NavLink> */}

          <div className="relative ml-[-8vw] lg1:ml-[-2vw] flex flex-col">
            <p
              className="navHead"
              id="navMore"
              onClick={handleMore}
              onMouseOver={handleMore}
            >
              More
            </p>
            <div
              className="fixed top-[3rem]"
              id="moreDD"
              onMouseOver={handleMore}
              onMouseLeave={closeDropdown}
            >
              <ul>
                <NavLink to="/rules">
                  <li>Rules</li>
                </NavLink>
                <NavLink to="/ca">
                  <li>CA</li>
                </NavLink>
                <NavLink to="/result">
                  <li>Results</li>
                </NavLink>
                <NavLink to="/process">
                  {" "}
                  <li>How To Register</li>
                </NavLink>
                {/* <NavLink to="/faq">
            <li>FAQs</li>
          </NavLink> */}
                {/* <NavLink to="/accommodations">
            <li>Accommodation</li>
          </NavLink> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="navFlexLogin">
          <NavLink to="/">
            <p
              style={{ color: props.pg === "home" ? "#fac949" : "" }}
              className="navHead"
            >
              Home
            </p>
          </NavLink>
          <div className="relative flex flex-col">
            <p
              className="navHead"
              onClick={handleDropdown}
              onMouseOver={handleDropdown}
              id="navdomain"
            >
              Domains
            </p>
            <div
              className="fixed top-[3rem]"
              id="dropdown"
              onMouseOver={handleDropdown}
              onMouseLeave={closeDropdown}
            >
              <ul>
                <NavLink to="/domain_management">
                  <li>Management Sciences</li>
                </NavLink>
                <NavLink to="/domain_ece">
                  {" "}
                  <li>Electronics and Communication Engineering</li>
                </NavLink>
                <NavLink to="/domain_civil">
                  <li>Civil Engineering</li>
                </NavLink>
                <NavLink to="/domain_en">
                  {" "}
                  <li>Electrical and Electronics Engineering</li>
                </NavLink>
                <NavLink to="/domain_cs">
                  {" "}
                  <li>Computer Science and Information Technology</li>
                </NavLink>
                <NavLink to="/domain_me">
                  {" "}
                  <li>Mechanical Engineering</li>
                </NavLink>
              </ul>
            </div>
          </div>
          <NavLink to="/updates">
            {" "}
            <p
              style={{ color: props.pg === "update" ? "#fac949" : "" }}
              className="navHead"
              id="navUpdate"
            >
              Updates
            </p>
          </NavLink>
          <NavLink to={path}>
            <p
              style={{ color: props.pg === "db" ? "#fac949" : "" }}
              className="navDbT"
            >
              Dashboard
            </p>
          </NavLink>
          {/* <NavLink to="/ca_db"><p className="navDbC" id="ca_db">Dashboard</p></NavLink> */}
          <NavLink to="/rules">
            {" "}
            <p
              style={{ color: props.pg === "rules" ? "#fac949" : "" }}
              id="navRule2"
              className="navHead"
            >
              Rules
            </p>
          </NavLink>
          <NavLink to="/ca">
            {" "}
            <p
              style={{ color: props.pg === "ca" ? "#fac949" : "" }}
              id="navCA"
              className="navHead"
            >
              CA
            </p>
          </NavLink>
          <NavLink to="/result">
            <p
              style={{ color: props.pg === "res" ? "#fac949" : "" }}
              className="navHead"
              id="navCA"
            >
              Results
            </p>
          </NavLink>
          {/* <NavLink to="/faq">
            <p id="navCA" className="navHead">
              FAQs
            </p>
          </NavLink> */}

          <NavLink to="/accommodations">
            <p
              style={{ color: props.pg === "acc" ? "#fac949" : "" }}
              id="navCA"
              className="navHead"
            >
              Accommodation
            </p>
          </NavLink>
          <div className="relative lg1:ml-[-2vw] ml-[-7vw] flex flex-col">
            <p
              className="navHead"
              id="navMore"
              onClick={handleMore2}
              onMouseOver={handleMore2}
            >
              More
            </p>
            <div
              className="fixed top-[3rem]"
              id="moreDD2"
              onMouseOver={handleMore2}
              onMouseLeave={closeDropdown}
            >
              <ul>
                <NavLink to="/rules">
                  <li>Rules</li>
                </NavLink>
                <NavLink to="/ca">
                  <li>CA</li>
                </NavLink>
                <NavLink to="/result">
                  <li>Results</li>
                </NavLink>
                {/* <NavLink to="/process">
            {" "}
            <li>How To Register</li>
          </NavLink> */}
                {/* <NavLink to="/faq">
            <li>FAQs</li>
          </NavLink> */}
                <NavLink to="/accommodations">
                  <li>Accommodation</li>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>

        {/* </div> */}

        <div className="navFlex2">
          <button
            className="navRegister"
            onClick={() => {
              RegOpen();
            }}
          >
            Register
          </button>
          <button
            className="navLogin"
            onClick={() => {
              logopen();
            }}
          >
            Login
          </button>
          <img src={menu} id="menu" onClick={showmenu}></img>
        </div>
        <div className="navFlex3">
          <p className="navTitle">{title}</p>
          <p
            className="logout"
            onClick={() => {
              setOut(true);
              dispatch(logout());
            }}
          >
            Logout
          </p>
        </div>
      </div>

      <Dialog
        open={stepDialog.one}
        PaperProps={{
          sx: {
            maxHeight: 1000,
            // marginTop: 18,
            maxWidth: 1500,
          },
        }}
      >
        <Register />
      </Dialog>

      <Dialog
        open={stepDialog.two}
        PaperProps={{
          sx: {
            maxHeight: 1200,
            marginTop: 84,
            maxWidth: 1000,
          },
        }}
      >
        <Member />
      </Dialog>

      <Dialog
        open={stepDialog.three}
        PaperProps={{
          sx: {
            maxHeight: 1300,
            marginTop: 66,
            maxWidth: 1000,
          },
        }}
      >
        <Team />
      </Dialog>

      <Dialog
        open={stepDialog.four}
        PaperProps={{
          sx: { maxWidth: 1000 },
        }}
      >
        <CA1 />
      </Dialog>

      <Dialog
        open={stepDialog.five}
        PaperProps={{
          sx: {
            maxHeight: 1240,
            marginTop: 64,
            maxWidth: 1000,
          },
        }}
      >
        <CA2 />
      </Dialog>

      <Dialog
        open={stepDialog.six}
        PaperProps={{
          sx: { maxHeight: 450, maxWidth: 1000 },
        }}
      >
        <Login1 />
      </Dialog>

      <Dialog
        open={stepDialog.seven}
        PaperProps={{
          sx: { maxHeight: 500, maxWidth: 1000 },
        }}
      >
        <Login />
      </Dialog>

      <Dialog
        open={stepDialog.eight}
        PaperProps={{
          sx: { maxHeight: 500, maxWidth: 1000 },
        }}
      >
        <Forgot />
      </Dialog>

      <Dialog
        open={stepDialog.nine}
        PaperProps={{
          sx: { maxHeight: 500, maxWidth: 1000 },
        }}
      >
        <Otp />
      </Dialog>

      <Dialog
        open={stepDialog.ten}
        PaperProps={{
          sx: { maxHeight: 500, maxWidth: 1000 },
        }}
      >
        <Reset />
      </Dialog>

      <Dialog
        open={stepDialog.eleven}
        PaperProps={{
          sx: { maxHeight: 500, maxWidth: 1000 },
        }}
      >
        <LoginTeam />
      </Dialog>

      <Dialog
        open={stepDialog.twelve}
        PaperProps={{
          sx: { maxHeight: 500, maxWidth: 1000 },
        }}
      >
        <ForgotTeam />
      </Dialog>

      <Dialog
        open={stepDialog.thirteen}
        PaperProps={{
          sx: { maxHeight: 500, maxWidth: 1000 },
        }}
      >
        <OtpTeam />
      </Dialog>

      <Dialog
        open={stepDialog.fourteen}
        PaperProps={{
          sx: { maxHeight: 500, maxWidth: 1000 },
        }}
      >
        <ResetTeam />
      </Dialog>

      <Dialog
        open={stepDialog.logout}
        PaperProps={{
          sx: { maxWidth: 1000 },
        }}
      >
        <LogOut />
      </Dialog>

      <div style={{ position: "absolute", top: "40px", right: "20px" }}>
        <Dialog
          open={processStop}
          onClose={handleProcessStop}
          PaperProps={{
            sx: {
              maxWidth: 400,
              marginTop: 0,
              maxHeight: 500,
            },
          }}
          keepMounted
        >
          <img
            id="crs"
            className="cross"
            src={cross}
            onClick={() => handleProcessStop()}
          />
          <div id="processDialog">
            <DialogTitle
              sx={{
                textAlign: "center",
                marginBottom: 0,
                paddingBottom: "8px",
              }}
            >
              Registrations are closed now.
            </DialogTitle>
            {/* <DialogTitle
              sx={{ textAlign: "center", marginTop: 0, paddingTop: 0 }}
            >
              Click here to view the results of S
            </DialogTitle> */}
            {/* <Button
              onClick={() => {
                navigate("/process");
                handleProcessStop();
              }}
            >
              How to Register
            </Button> */}
          </div>
        </Dialog>
      </div>
      {loading ? (
        <Spinner animation="border" variant="dark" id="loadSpinner" />
      ) : null}
      <ToastContainer />
    </>
  );
}

export default Navbar;
