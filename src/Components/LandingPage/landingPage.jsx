import landImage from "../Assets/scroll_bg.svg";
import UpdateImage from "../Assets/updateImage.jpeg";
import domainLogo from "../Assets/domainLogo.svg";
import { forwardRef, useEffect, useState } from "react";
import {
  Alert,
  Button,
  Dialog,
  DialogTitle,
  Slide,
  Typography,
} from "@mui/material";
import { dialog0, dialog1, dialog6 } from "../../Redux/step";
import Register from "../Register/Register";
import Member from "../Register/member";
import Team from "../Register/team";
import CA1 from "../Register/CA1";
import CA2 from "../Register/CA2";
import { useDispatch, useSelector } from "react-redux";
import "./landingPage.css";
import "./timeline.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "react-toastify/scss/_closeButton.scss"
import { InstagramEmbed } from "react-social-media-embed";
import Navbar from "../Navbar/navbar";
// import mobTimeline from "../Assets/mob_timeline.svg"
import timelineNew from "../Assets/timeline.svg";
import timelinePhone from "../Assets/timelinePhone.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { RegOpenThunk } from "../../Redux/registerSlice";
import { Spinner } from "react-bootstrap";
import Footer from "../footer/footer";
import { setProcess } from "../../Redux/heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageCar1 from "../Assets/imageP1.JPG";
import Question from "./question";
import winnersImg from "../Assets/scrolls23Winner.svg";
function LandingPage() {
  const reducer = useSelector((s) => s.login);
  const reducerReg = useSelector((s) => s.register);
  const [path, setPath] = useState("");
  const [dialogg, setDialogg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [soon, setSoon] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const step = useSelector((s) => s.step);
  const { title, processBool } = useSelector((s) => s.heading);

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  };

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
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    if (step.step == 0) {
      setStepDialog({
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
      });
    }
    if (step.step == 1 && dialogg) {
      setStepDialog({ one: true });
    }
    if (step.step == 2 && dialogg) {
      setStepDialog({ two: true });
    }
    if (step.step == 3 && dialogg) {
      setStepDialog({ three: true });
    }
    if (step.step == 4 && dialogg) {
      setStepDialog({ four: true });
    }
    if (step.step == 5 && dialogg) {
      setStepDialog({ five: true });
    }
  }, [step, dialogg]);

  useEffect(() => {
    if (title === "CA") {
      setPath("/ca_db");
      document.getElementById("toDash").style.display = "inline";
      document.getElementById("toReg").style.display = "none";
    }
    if (title === "Team") {
      setPath("/team_db");
      document.getElementById("toDash").style.display = "inline";
      document.getElementById("toReg").style.display = "none";
    }
    if (title === "") {
      document.getElementById("toDash").style.display = "none";
      document.getElementById("toReg").style.display = "inline";
    }
  }, [title]);

  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

  function RegOpen() {
    // setSoon(true)
    dispatch(RegOpenThunk())
      .then((res) => {
        if (res?.payload?.status === 200) {
          setDialogg(true);
          dispatch(dialog1());
        }
        if (res?.payload?.status === 400) {
          setDialogg(true);
          setSoon(true);
        }
        if (res?.payload?.status === 429) {
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
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSoonClose() {
    setSoon(false);
  }

  const [process, setProces] = useState(false);

  function handleProcess() {
    setProces(false);
  }
  useEffect(() => {
    dispatch(setProcess());
    if (!processBool) {
      setProces(true);
    }
  }, []);

  const [timer, setTimer] = useState(10);
  useEffect(() => {
    if (reducerReg.loading) {
      const time =
        timer > 0 &&
        setInterval(() => {
          setTimer(timer - 1);
        }, 1000);
      return () => clearInterval(time);
    }
  }, [timer, reducerReg.loading]);

  useEffect(() => {
    if (timer > 0 && reducerReg.loading) {
      setLoading(true);
      document.body.style.opacity = 0.5;
    } else {
      setLoading(false);
      document.body.style.opacity = 1;
    }
  }, [reducerReg.loading, timer]);

  const faqData = [
    {
        question: "What is Scrolls?",
        answer: "SCROLLS ( Student's Creative and Oratory Learning Skills) is an annually held National level technical paper presentation competition, inviting students to elaborate on the most thriving and progressive fields of technology and management."
    },
    {
        question: "Who all can participate?",
        answer: "As this is an Inter college competition anyone pursuing an Under Graduate or Post Graduate program in any technical or management domain from any college can participate in this competition."
    },
    {
        question: "How many members can participate in a team ?",
        answer: " A minimum of 2(two) and maximum of 3(three) members can participate in a team."
    },
    {
        question: "What are the prerequisite skills for this event?",
        answer: "The event doesn't require any pre-requisite skill. It will be solely based upon your creativity and ingenuity to analyse the topic and write the technical paper on the same."
    },
    {
        question: "What are the benefits of this event?",
        answer: "This event provides rostrum to the evolving professionals who can channelize their talent, creativity and give their imagination a cutting edge."
    },
    {
        question: "What is the purpose of this event ?",
        answer: "The sole purpose of this event is to provide an opportunity for the students to gain an experience to widen the vision of creativity and innovation. This experience will be an aid for the participants who want to publish research papers in the near future."
    },
    {
        question: "What will be the rewards and recognitions for the emerging winners?",
        answer: "Total cash prizes worth 72K would be distributed for the winners and along with the certificate of participation for every participant in addition to many more perks."
    },
    {
        question: "What are the steps?",
        answer: `Step 1- Registration \n
        Step 2- Disclosure of topics from every domain. \n
        Step 3- Submission of the synopsis on any one of the topics. \n
        Step 4- Based on the synopsis submitted, selected participants will present the technical paper on the day of the event( 5th May, 2023).\n
        Step 5- Announcement of winners.`
            }
];

  return (
    <>
      <Navbar />
      <div className="landingPage">
        <div className="landBlock1">
          <div id="loginBg" style={{ backgroundImage: `url(${landImage})` }}>
            {/* <img src={landImage} className="landImage" /> */}
          </div>
          <div className="landFlex">
            <p className="landText1">
              Students Creative & Oratory Learning Skills 2024
            </p>
            <p className="landText2">
              Prestigious National Level Technical Paper Presentation organized
              by A.K.G.E.C. in association with Ghaziabad Management
              Association.
            </p>
            <button
              className="landRegister"
              id="toReg"
              onClick={() => {
                RegOpen();
              }}
            >
              Register Now
            </button>
            {/* <button className="landRegister" id="toReg" onClick={() => { setDialogg(true); dispatch(dialog1()) }} >Register Now</button> */}
            <button
              className="landRegister"
              id="toDash"
              onClick={() => {
                navigate(path);
              }}
            >
              To Dashboard
            </button>
          </div>
        </div>
        <div className="landAbout">
          <div id="text1Border">
            <p className="aboutScroll">About Scrolls</p>
          </div>
          <p className="aboutHead">
            “Reasons will take you from A to B but imagination will take you
            everywhere.”
            <br />- Albert Einstein
          </p>
          <p className="aboutText">
            ‘SCROLLS’ is a platform for the innovative minds to exchange their
            ideas, inventiveness and enterprise and administer their erudition
            in various flourishing sectors. It encompasses various aspects and
            trends relating to computing, telecommunication and information
            technologies along with advancements in management thus aiming to
            discover the best possible ingenuity to solve problems with a
            futuristic approach.
          </p>
        </div>
        <div className="landDomain">
          <div id="text1Border">
            <p className="aboutScroll">Domains</p>
          </div>
          <div className="domainCards">
            <NavLink to="/domain_civil">
              <div
                className="domainCard1"
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                <img src={domainLogo} className="domainLogo1" />
                <p className="domainText1">Civil Engineering</p>
              </div>
            </NavLink>
            <NavLink to="/domain_cs">
              <div
                className="domainCard2"
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                <img src={domainLogo} className="domainLogo2" />
                <p className="domainText2">
                  Computer Science and Information Technology
                </p>
              </div>
            </NavLink>
            <NavLink to="/domain_en">
              <div
                className="domainCard1"
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                <img src={domainLogo} className="domainLogo1" />
                <p className="domainText1">
                  Electrical and Electronics Engineering
                </p>
              </div>
            </NavLink>
            <NavLink to="/domain_ece">
              <div
                className="domainCard2"
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                <img src={domainLogo} className="domainLogo2" />
                <p className="domainText2">
                  Electronics and Communication Engineering
                </p>
              </div>
            </NavLink>
            <NavLink to="/domain_me">
              <div
                className="domainCard1"
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                <img src={domainLogo} className="domainLogo1" />
                <p className="domainText1">Mechanical Engineering</p>
              </div>
            </NavLink>
            <NavLink to="/domain_management">
              <div
                className="domainCard2"
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                <img src={domainLogo} className="domainLogo2" />
                <p className="domainText2">Management Sciences</p>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="landTimeline">
          <div id="text1Border">
            <p className="aboutScroll" id="timelineHeading">
              Timeline
            </p>
          </div>
          <div>
            <img src={timelineNew} className="timeline" />
            <img src={timelinePhone} className="mob_timeline" />
          </div>
        </div>

      <div className="landScrolls">
          <div id="text1Border">
            <p className="aboutScroll" id="timelineHeading">
              SCROLLS' 23
            </p>
          </div>
          <div style={{width:'100%',marginTop:'4rem'}}>
          <Slider {...settings}>
        <div className="">
          <img className="sliderItem" src={imageCar1} />
        </div>
        <div className="">
          <img className="sliderItem" src={imageCar1} />
        </div>
        <div className="">
          <img className="sliderItem" src={imageCar1} />
        </div>
        <div className="">
          <img className="sliderItem" src={imageCar1} />
        </div>
      </Slider>
      </div>
        </div>

        <div className="winner23">
          <div className="winImg">
        <img className="winnerImg" src={imageCar1} />
        <img className="winnerImg1" src={winnersImg} />
        </div>
        <div className="winnerText">
          <div className="winnerHead">SCROLLS'23 Winner</div>
        ‘SCROLLS’ is a platform for the innovative minds to exchange their
            ideas, inventiveness and enterprise and administer their erudition
            in various flourishing sectors. It encompasses various aspects and
            trends relating to computing, telecommunication and information
            technologies along with advancements in management thus aiming to
            discover the best possible ingenuity to solve problems with a
            futuristic approach.
          </div>

        </div>

<div className="landFAQ">
<div id="text1Border">
            <p className="aboutScroll">
              FAQs
            </p>
          </div>
          <div className="faqContainer">
                {faqData.map((faq, index) => (
                  <Question key={index} question={faq.question} ans={faq.answer} />
                ))}
              </div>

</div>
      
      </div>

      <Footer />



        <Dialog
          open={stepDialog.one}
          PaperProps={{
            sx: {
              maxHeight: 1300,
              // marginTop: 60,
              maxWidth: 1000,
            },
          }}
        >
          {/* <Team /> */}
          <Register />
        </Dialog>
      <Dialog
        open={stepDialog.two}
        PaperProps={{
          sx: {
            maxHeight: 1300,
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
            maxHeight: 1100,
            marginTop: 76,
            maxWidth: 1000,
          },
        }}
      >
        <Team />
      </Dialog>

      <Dialog
        open={stepDialog.four}
        PaperProps={{
          sx: {
            maxWidth: 1000,
          },
        }}
      >
        <CA1 />
      </Dialog>

      <Dialog
        open={stepDialog.five}
        PaperProps={{
          sx: {
            maxHeight: 1240,
            marginTop: 94,
            maxWidth: 1000,
          },
        }}
      >
        <CA2 />
      </Dialog>

      {/* <Dialog
        open={soon}
        onClose={handleSoonClose}
        PaperProps={{
          sx: {
            maxWidth: 400,
            maxHeight: 500,
            marginTop: 0,
          },
        }}
        keepMounted
      >
        <div id="processDialog">
          <DialogTitle
            sx={{ textAlign: "center", marginBottom: 0, paddingBottom: "8px" }}
          >
            Registrations are closed now.
          </DialogTitle>
          <DialogTitle
            sx={{ textAlign: "center", marginTop: 0, paddingTop: 0 }}
          >
            Click here to view the results of Synopsis submission
          </DialogTitle>
          <Button
            onClick={() => {
              navigate("/result");
            }}
          >
            Results
          </Button>
        </div>
      </Dialog> */}

      {/* <div style={{ position: "absolute", top: "40px", right: "20px" }}>
        <Dialog
          open={process}
          onClose={handleProcess}
          PaperProps={{
            sx: {
              maxWidth: 400,
              marginTop: 0,
              maxHeight: 500,
            },
          }}
          keepMounted
        >
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
            <DialogTitle
              sx={{ textAlign: "center", marginTop: 0, paddingTop: 0 }}
            >
              Click here to view the results of Synopsis submission
            </DialogTitle>
            <Button
              onClick={() => {
                navigate("/result");
              }}
            >
              Results
            </Button>
          </div>
        </Dialog>
      </div> */}

      {loading ? (
        <Spinner animation="border" variant="dark" id="loadSpinner" />
      ) : null}
      <ToastContainer />
    </>
  );
}

export default LandingPage;
