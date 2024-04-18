import landImage from "../Assets/scroll_bg.svg";
import UpdateImage from "../Assets/updateImage.jpeg";
import domainLogo from "../Assets/domainLogo.svg";
import cross from "../Assets/cross.svg"
import cross1 from "../Assets/navCross.svg";
import arrow from "../Assets/arrow.svg";
import UpdateOP from "../Assets/UpdateOP.png";
// import Modal from '@mui/material/Modal';
import { forwardRef, useEffect, useState } from "react";
import {
  Alert,
  Button,
  Dialog,
  DialogTitle,
  Slide,
  Typography,
} from "@mui/material";
import { dialog0, dialog16, dialog17, dialog18, dialog19, dialog20 } from "../../Redux/step";
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
import { setProcess, unModal } from "../../Redux/heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageCar1 from "../Assets/imageP1.JPG";
import Question from "./question";
import winnersImg from "../Assets/scrolls23Winner.svg";
import imgs1 from "../Assets/image-1.png";
import imgs2 from "../Assets/image-2.png"
import imgs3 from "../Assets/image-3.png"
import imgs4 from "../Assets/image-4.jpg"
import imgs5 from "../Assets/image-5.jpg"
import imgs6 from "../Assets/image-6.jpg"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function LandingPage() {
  const reducer = useSelector((s) => s.login);
  const reducerReg = useSelector((s) => s.register);
  const [path, setPath] = useState("");
  const [register,setRegister]= useState(false);
  const [dialogg, setDialogg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [soon, setSoon] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const step = useSelector((s) => s.step);
  const { title, processBool, modal } = useSelector((s) => s.heading);

  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  
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
    sixteen: false,
    seventeen: false,
    eighteen: false,
    nineteen: false,
    twenty: false,
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    if (step.step == 0) {
      setStepDialog({
        sixteen: false,
        seventeen: false,
        eighteen: false,
        nineteen: false,
        twenty: false,
      });
    }
    if (step.step == 16 && dialogg) {
      setStepDialog({ sixteen: true });
    }
    if (step.step == 17 && dialogg) {
      setStepDialog({ seventeen: true });
    }
    if (step.step == 18 && dialogg) {
      setStepDialog({ eighteen: true });
    }
    if (step.step == 19 && dialogg) {
      setStepDialog({ nineteen: true });
    }
    if (step.step == 20 && dialogg) {
      setStepDialog({ twenty: true });
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
          dispatch(dialog16());
        }
        if (res?.payload?.status === 400) {
          setDialogg(true);
          setProces(true);
          // setSoon(true);
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
    if (!processBool) {
    // dispatch(RegOpenThunk())
    // .then((res) => {
    //   console.log(res);
    //   if (res?.payload?.status === 400) {
        dispatch(setProcess());
    if (!processBool) {
      setProces(true);
    }
      }
    }
      // })
  // }}
  , []);

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
        question: "How many rounds are there in SCROLLS'24?",
        answer: "Scrolls comprises of two rounds - <br/> i) The initial round entails the synopsis submission. <br/> ii) Selected teams will advance to the subsequent round, wherein they will submit and present their technical paper."
    },
    {
        question: "What criteria are employed to evaluate submissions in this competition?",
        answer: "Submissions are assessed based on the Originality, Clarity of thoughts, Innovation, Critical thinking and Presentation Skills of the teams."
    },
    {
        question: "What are the principal areas of focus for Scrolls 2024?",
        answer: "The primary objectives of Scrolls 2024 include nurturing the problem-solving skills, enhancing presentation abilities and fostering inventiveness of the participants."
    },
    {
        question: "Is this an individual or group competition?",
        answer: "SCROLLS'24 is a team-based competition. Each team must consist of a minimum of 2 and a maximum of 3 members."
    },
    {
        question: "Are the team members required to be from the same academic year?",
        answer: "No, the team members are not required to be from the same academic year. Students from any academic year or institution (Engineering or Management) are encouraged to form teams and participate together."
    },
    {
        question: "What is the registration fee for participating in the event?",
        answer: "Registration is free for stage 1 i.e. Synopsis Submission Round. Shortlisted teams after the synopsis submission round are required to submit a registration fee of 350 Rs. per head (cash only) on the day of the main event."
    },
    {
        question: "Are accommodations provided for participants, and if so, what are the associated charges?",
        answer: "Yes, free accommodation (including food) will be provided to the participants traveling from far-off stations after verification."
    },
    {
        question: "Where can participants find the latest updates regarding Scrolls ‘24?",
        answer: "For the latest updates, follow the official Instagram page of Scrolls (<a target='_blank' style='text-decoration:underline; color:#FAC949' href='https://www.instagram.com/scrolls.akgec/'>Scrolls Instagram</a>) OR Team Horizon (<a target='_blank' style='text-decoration:underline; color:#FAC949;' href='https://www.instagram.com/horizon.akgec/'>Team Horizon Instagram</a>).<br/><br/>Fill the given below form in case of any queries:<br/><a target='_blank' style='text-decoration:underline; color:#FAC949' href='https://docs.google.com/forms/d/e/1FAIpQLSe8k570vDVMd-W0VgvwtU2hKJxSCakEi2HNhW1xlLn1xl4dvA/viewform'>Click here to access the query form</a>"
    },
];

  return (
    <>
      <Navbar pg="home"/>
      <div className="landingPage">
        <div className="landBlock1">
          <div id="loginBg" style={{ backgroundImage: `url(${landImage})` }}>
            {/* <img src={landImage} className="landImage" /> */}
          </div>
          <div className="landFlex">
            <p className="landText1">
              Students' Creative & Oratory Learning Skills 2024
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
          Welcome to SCROLLS, a sanctuary for imaginative souls to weave their dreams, share their passions, and embark on a journey of boundless creativity. Here, amidst the ever-evolving realms of computing, telecommunications, and information technologies, alongside the artistry of modern management, we embrace the beauty of innovation. Our aim? To curate a tapestry of ingenuity where every idea, every spark, ignites a beacon of hope for the future. Join us in sculpting tomorrow's wonders with the warmth of human touch and the brilliance of visionary minds.
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
          <img className="sliderItem" src={imgs1} />
        </div>
        <div className="">
          <img className="sliderItem" src={imgs2} />
        </div>
        <div className="">
          <img className="sliderItem" src={imgs3} />
        </div>
         <div className="">
          <img className="sliderItem" src={imgs4} />
        </div>
        <div className="">
          <img className="sliderItem" src={imgs5} />
        </div>
        <div className="">
          <img className="sliderItem" src={imgs6} />
        </div>
      </Slider>
      </div>
        </div>

        {/* <div className="winner23">
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

        </div> */}

<div className="landFAQ">
<div id="text1Border">
            <p className="aboutScroll">
              FAQs
            </p>
          </div>
          <div className="faqContainer">
                {faqData.map((faq, index) => (
                  <Question key={index} question={faq.question} ans={<div dangerouslySetInnerHTML={{ __html: faq.answer }} />} />
                ))}
              </div>

</div>
      
      </div>

      <Footer />



    {!process &&  <>  <Dialog
          open={stepDialog.sixteen}
          PaperProps={{
            sx: {
              maxHeight: 1300,
              // marginTop: 60,
              maxWidth: 1000,
            },
          }}
        >
             <div className="register" id="regDiv">
            <div className="regFlex">
                <img className="arrow" src={arrow} onClick={() => { dispatch(dialog0()) }}/>
                <p className="heading" id="registerAs">Register as</p>
                <img className="cross" src={cross} onClick={() => { dispatch(dialog0()) }} />
            </div>
            <button className="asRegister" id="regMember" onClick={() => {dispatch(dialog17()) }} >Member</button>
            <button className="asRegister" onClick={() => { dispatch(dialog18()) }} >Team</button>
            <button className="asRegister" id="CA" onClick={() => { dispatch(dialog19()) }} >Campus Ambassador</button>
        </div>
        </Dialog>
      <Dialog
        open={stepDialog.seventeen}
        PaperProps={{
          sx: {
            maxHeight: 1300,
            marginTop: 84,
            maxWidth: 1000,
          },
        }}
      >
   <Member home={true}/>
      </Dialog>

      <Dialog
        open={stepDialog.eighteen}
        PaperProps={{
          sx: {
            maxHeight: 1100,
            marginTop: 76,
            maxWidth: 1000,
          },
        }}
      >
        <Team home={true}/>
      </Dialog>

      <Dialog
        open={stepDialog.nineteen}
        PaperProps={{
          sx: {
            maxWidth: 1000,
          },
        }}
      >
        <CA1 home={true}/>
      </Dialog>

      <Dialog
        open={stepDialog.twenty}
        PaperProps={{
          sx: {
            maxHeight: 1240,
            marginTop: 94,
            maxWidth: 1000,
          },
        }}
      >
        <CA2 home={true}/>
      </Dialog> </>}

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

      <div style={{ position: "absolute", top: "40px", right: "20px" }}>
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
                <img id="crs" className="cross" src={cross1} onClick={() => handleProcess()} />
          <div id="processDialog">
            <img src={UpdateOP}/>
            {/* <DialogTitle
              sx={{
                textAlign: "center",
                marginBottom: 0,
                paddingBottom: "8px",
              }}
            >
              Registrations will start soon.
            </DialogTitle> */}
            {/* <DialogTitle
              sx={{ textAlign: "center", marginTop: 0, paddingTop: 0 }}
            >
              Click here to view the results of S
            </DialogTitle> */}
            {/* <Button
              onClick={() => {
                navigate("/process");
                handleProcess();
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

export default LandingPage;
