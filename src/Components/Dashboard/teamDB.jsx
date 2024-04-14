import Navbar from "../Navbar/navbar"
import "./teamDB.css"
import file from "../Assets/file.svg"
import fail from "../Assets/fail.gif"
import pending from "../Assets/pending.gif"
import success from "../Assets/success.gif"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TeamDBDataThunk, TeamDBThunk } from "../../Redux/dashboard"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from 'react-bootstrap';
import FormData from "form-data";
import { useNavigate } from "react-router"
import { usePrevious } from "react-use"
import Footer from "../footer/footer"

function TeamDB() {

    const dispatch = useDispatch()
    const reducer = useSelector((s) => s.dashboard)
    const [loading, setLoading] = useState(false)

    // const team = {
    //     teamId:'',
    //     teamSize:'',
    //     leader:'',
    //     member2:'',
    //     member3:'',
    //     domain:'',
    //     topic:'',
    //     synopsis:'',
    //     paper:'',
    //     uplDom:'',
    //     uplTop:'',
    //     uplSyn:[],
    //     uplPaper:[],
    //     selected:false,
    //     text1:'',
    //     text2:''
    // }

    // const [teamState, setTeamState] = useState(team)
    const [teamId, setTeamId] = useState('')
    const [teamName, setTeamName] = useState('');
    const [teamSize, setTeamSize] = useState('')
    const [leader, setLeader] = useState('')
    const [member2, setMember2] = useState('')
    const [member3, setMember3] = useState('')
    const [domain, setDomain] = useState('')
    const [topic, setTopic] = useState('')
    const [synopsis, setSynopsis] = useState('')
    const [paper, setPaper] = useState('')
    const [uplDom, setUplDom] = useState('')
    const [uplTop, setUplTop] = useState('')
    const [uplSyn, setUplSyn] = useState([])
    const [uplPaper, setUplPaper] = useState([])
    const [image, setImage] = useState("")
    const [selected, setSelected] = useState(false)
    const [wait, setWait] = useState(false)
    const [text1, setText1] = useState('')
    const [text2, setText2] = useState('')
    const [text3, setText3] = useState('')
    const navigate = useNavigate()
    const fd = new FormData()

    const prevDomain = usePrevious(uplDom)
    const prevSyn = usePrevious(uplSyn)
    const prevTop = usePrevious(uplTop)
    const prevPap = usePrevious(uplPaper)

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    useEffect(() => {
        dispatch(TeamDBThunk())
            .then((res) => {
                if (res.payload.status === 429) {
                    toast.error("You have attempted too many times Today, please try again tomorrow", {
                        position: "top-right",
                        theme: "light",
                        autoClose: 5000,
                    });
                }
            })
            .catch((err) => {
            })
    }, [])
    useEffect(() => {
        setTeamId(reducer.dataTeam.team_id)
        setTeamName(reducer.dataTeam.name)
        setTeamSize(reducer.dataTeam.size)
        setTopic(reducer.dataTeam.topic)
        setDomain(reducer.dataTeam.domain)
        setSelected(reducer.dataTeam.is_selected)
        setWait(reducer.dataTeam.is_waitlisted)
        setPaper(reducer.dataTeam.paper)
        setSynopsis(reducer.dataTeam.synopsis)
        setLeader(reducer.dataTeam.leader_data)
        setMember2(reducer.dataTeam.member_2_data)
        setMember3(reducer.dataTeam.member_3_data)
    }, [reducer])

    useEffect(() => {
        // if (!selected && (synopsis === '' || synopsis === null)) {
        //     setImage(pending)
        //     setText1("Pending")
        //     setText3("Synopsis submission is closed now")
        //     setText2("Synopsis submission is closed now")
        //     document.getElementById('Paper').style.display = "none"
        // }
         if (!selected && (synopsis === '' || synopsis === null)) {
            setImage(pending)
            setText1("Pending")
            setText3("Submit your synopsis")
            setText2("Submit your synopsis")
            document.getElementById('Paper').style.display = "none"
        }
        if (!selected && synopsis != '' && synopsis != null) {
            setImage(pending)
            setText1("Pending")
            setText3("Synopsis is submitted")
            setText2("You cannot submit the technical paper until your synopsis is selected.")
            document.getElementById('Paper').style.display = "none"
        }
        // if (!selected) {
    
        //     setImage(fail)
        //     setText1("Rejected")
        //     setText3("You are not selected")
        //     setText2("You are not selected")
        //     document.getElementById('Paper').style.display = "none"
        // }
        if (selected) {
            setImage(success)
            setText1("Congratulations")
            setText3("You are selected")
            setText2("You are selected, you can submit your Paper now.")
            document.getElementById('Paper').style.display = "block"
        }
        // if (wait) {
        //     setImage(pending)
        //     setText1("Pending")
        //     setText3("Wait for the results")
        //     setText2("Wait for the results")
        //     document.getElementById('Paper').style.display = "none"
        // }
    }, [synopsis, selected])

    // useEffect(() => {
    //     if (synopsis === '' || synopsis === null || synopsis === undefined) {
    //         document.getElementById('synopsis').style.display = "none";
    //     }
    //     else {
    //         document.getElementById('synopsis').style.display = "block";
    //     }
    // }, [synopsis])

    function handleCancel() {
        if (domain === "" && topic === "") {
            setUplDom('')
            setUplTop('')
        }
        setUplPaper('')
        setUplSyn('')
    }

    function handleSave() {
        // setSynopsis("fjnk")
        if (uplDom && uplTop) {
            if (uplSyn.length == 0 && uplPaper.length == 0) {
                fd.append('domain', uplDom)
                fd.append('topic', uplTop)
            }
            else if (uplSyn.length != 0 && uplPaper.length == 0) {
                fd.append('synopsis', uplSyn)
                fd.append('domain', uplDom)
                fd.append('topic', uplTop)
            }
            else if (uplSyn.length == 0 && uplPaper.length != 0) {
                fd.append('domain', uplDom)
                fd.append('topic', uplTop)
                fd.append('paper', uplPaper)
            }
            else if (uplSyn.length != 0 && uplPaper.length != 0) {
                fd.append('domain', uplDom)
                fd.append('topic', uplTop)
                fd.append('synopsis', uplSyn)
                fd.append('paper', uplPaper)
            }
        }
        else {
            if (uplSyn.length != 0 && uplPaper.length == 0) {
                fd.append('synopsis', uplSyn)
            }
            else if (uplSyn.length == 0 && uplPaper.length != 0) {
                fd.append('paper', uplPaper)
            }
            else if (uplSyn.length != 0 && uplPaper.length != 0) {
                fd.append('synopsis', uplSyn)
                fd.append('paper', uplPaper)
            }
        }

        dispatch(TeamDBDataThunk(fd)).
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
                    dispatch(TeamDBThunk())
                } else if (res.payload.status === 413) {
                    toast.error("File is too large. Kindly upload the file in the size of 1MB", {
                        position: "top-right",
                        theme: "light",
                        autoClose: 5000,
                    });
                }
                else if (res.payload.status === 429) {
                    toast.error("You have attempted too many times Today, please try again tomorrow", {
                        position: "top-right",
                        theme: "light",
                        autoClose: 5000,
                    });
                } else {
                    setUplPaper('')
                    setUplSyn('')
                    toast.error(y, {
                        position: "top-right",
                        theme: "light",
                        autoClose: 5000,
                    });
                }
            })
            .catch((err) => {

            })
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

    function handleChange(e) {
        setUplPaper(e.target.files[0])
    }

    function handleSynopsis() {
        if ((topic === '' && domain === '') && (uplDom === "" && uplTop === "") || (uplDom != "" && uplTop === "")) {
            toast.error("Please select a Topic and Domain to upload Synopsis", {
                position: "top-right",
                theme: "light",
                autoClose: 5000,
            });
        }
    }

    function handlePaper() {
        if (!selected) {
            toast.error("Please wait for Admin response", {
                position: "top-right",
                theme: "light",
                autoClose: 5000,
            });
        }
    }

    let condition = (prevDomain != uplDom || prevSyn != uplSyn || prevTop != uplTop || prevPap != uplPaper) ? false : true

    return <>
        <Navbar pg="db"/>
        <div id="dbDialog">
            <img id="dialImg" src={image} />
            <p id="dialText1">{text1}</p>
            <p id="dialText2">{text2}</p>
            <p id="dialText3">{text3}</p>
        </div>
        <div className="dbOuterDiv">
            <p className="dashboard">Hi, {teamName}</p>
            <p className="dbHead1">Details regarding Team and Members</p>
            <hr className="dbHR1" />

<div className="flex justify-center">
<div id="dbdial" className="flex flex-col rounded-lg items-center p-[1.5rem] text-center w-[80%] mb-[2rem] mob1:hidden">
<img className="w-[3rem]" src={image} />
<p id="dialText1">{text1}</p>
<p id="dialtt">{text2}</p>
</div>

</div>
            <div className="dbFlex1">
                <p className="dbHead">Team ID</p>
                <div className="teamID_box">{teamId}</div>
            </div>

            <hr className="dbHR2" />

            <div className="dbFlex1">
                <p className="dbHead">Team Size</p>
                <div className="teamID_box">{teamSize}</div>
            </div>

            <hr className="dbHR2" />

            <p className="dbHead">Members</p>
            <table id="caTable">
                <tr className="member_box">
                    <td>Name</td>
                    <td>Role</td>
                    <td>Scroll ID</td>
                </tr>
                {(leader != '' && leader != null && leader != undefined) ? <tr className="team_box_data"><td>{leader.name}</td>
                    <td>Leader</td>
                    <td>{leader.member_id}</td> </tr> : null}

                {(member2 != '' && member2 != null && member2 != undefined) ? <tr className="team_box_data"><td>{member2.name}</td>
                    <td>Member 2</td>
                    <td>{member2.member_id}</td> </tr> : null}

                {(member3 != '' && member3 != null && member3 != undefined) ? <tr className="team_box_data"><td>{member3.name}</td>
                    <td>Member 3</td>
                    <td>{member3.member_id}</td> </tr> : null}
            </table>
            <hr className="dbHR2" />

            <div className="dbFlex1">
                <div className="dbFlex2">
                    <p className="dbHead">Domain</p>
                    <p className="dbText">Select Team Domain</p>
                </div>
                {domain === "" ? <>
                    <select className="teamID_box" onChange={(e) => { setUplDom(e.target.value) }} >
                        <option id="option" value="">--select--</option>
                        <option value="Management Science">Management Science</option>
                        <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                        <option value="Civil Engineering">Civil Engineering</option>
                        <option value="Electrical and Electronics Engineering">Electrical and Electronics Engineering</option>
                        <option value="Computer Science and Information Technology">Computer Science and Information Technology</option>
                        <option value="Mechanical Engineering">Mechanical Engineering</option>
                    </select>
                </> : <div className="teamID_box">{domain}</div>}
            </div>

            <hr className="dbHR2" />

            <div className="dbFlex1">
                <div className="dbFlex2">
                    <p className="dbHead">Topic</p>
                    <p className="dbText">Select Topic</p>
                </div>
                <div>
    {topic === '' ? (
        <select className="teamID_box" onChange={(e) => { setUplTop(e.target.value) }}>
            {uplDom === "Management Science" ? (
                <>
                    <option id="option">--select--</option>
                    <option value="Work-Life Integration">Work-Life Integration</option>
                    <option value="India's Youth Dividend">India's Youth Dividend</option>
                    <option value="Global Connectivity">Global Connectivity</option>
                    <option value="Sustainability in India">Sustainability in India</option>
                    <option value="Democratizing News">Democratizing News</option>
                    <option value="Human-AI Collaboration">Human-AI Collaboration</option>
                    <option value="IRL vs. URL">IRL vs. URL</option>
                    <option value="Universal Basic Income (UBI)">Universal Basic Income (UBI)</option>
                    <option value="The Creator Hustle">The Creator Hustle</option>
                    <option value="Ethical Gene Editing">Ethical Gene Editing</option>
                    <option value="AI and Creativity">AI and Creativity</option>
                    <option value="India's Fintech Boom">India's Fintech Boom</option>
                    <option value="Algorithmic Society">Algorithmic Society</option>
                    <option value="Climate Change Action">Climate Change Action</option>
                    <option value="India's Electric Revolution">India's Electric Revolution</option>
                </>
            ) : null}
            {uplDom === "Electronics and Communication Engineering" ? (
                <>
                    <option id="option">--select--</option>
                    <option value="Organic LEDs: Lighting Innovation">Organic LEDs: Lighting Innovation</option>
                    <option value="Fuel Cell Technology">Fuel Cell Technology</option>
                    <option value="Hybrid Cars">Hybrid Cars</option>
                    <option value="Optical Wireless and 5G">Optical Wireless and 5G</option>
                    <option value="Smart Antenna">Smart Antenna</option>
                    <option value="Semiconductor Industry Revolution">Semiconductor Industry Revolution</option>
                    <option value="Industrial IoT and Automation">Industrial IoT and Automation</option>
                    <option value="4D Printing Revolution in Electronics">4D Printing Revolution in Electronics</option>
                    <option value="Bio-Circuits">Bio-Circuits</option>
                    <option value="AI Vision and Image Processing">AI Vision and Image Processing</option>
                    <option value="Energy Harvesting Sensors for Sustainable Smart Homes">Energy Harvesting Sensors for Sustainable Smart Homes</option>
                    <option value="Beyond Silicon: Future Trends">Beyond Silicon: Future Trends</option>
                    <option value="Quantum Computing in Electronics">Quantum Computing in Electronics</option>
                    <option value="Bioelectronics in Biomedicine">Bioelectronics in Biomedicine</option>
                </>
            ) : null}
            {uplDom === "Civil Engineering" ? (
                <>
                    <option id="option">--select--</option>
                    <option value="Stressed Ribbon Bridge">Stressed Ribbon Bridge</option>
                    <option value="Green Building">Green Building</option>
                    <option value="Self-Healing Concrete">Self-Healing Concrete</option>
                    <option value="Fiber-Reinforced Concrete">Fiber-Reinforced Concrete</option>
                    <option value="Advanced Earthquake Techniques">Advanced Earthquake Techniques</option>
                    <option value="Base Isolation Building">Base Isolation Building</option>
                    <option value="AI in Civil Engineering">AI in Civil Engineering</option>
                    <option value="Intelligent Transport System">Intelligent Transport System</option>
                    <option value="Mixed Traffic Control">Mixed Traffic Control</option>
                    <option value="Advanced Pavement Design">Advanced Pavement Design</option>
                    <option value="Augmented Reality for Construction">Augmented Reality for Construction</option>
                    <option value="Water Management in Changing Climate">Water Management in Changing Climate</option>
                </>
            ) : null}
            {uplDom === "Electrical and Electronics Engineering" ? (
                <>
                    <option id="option">--select--</option>
                    <option value="Vehicular Power Electronic Circuits and Charging Systems">Vehicular Power Electronic Circuits and Charging Systems</option>
                    <option value="Robot Design, Development, and Control">Robot Design, Development, and Control</option>
                    <option value="Integrating Multiple Energy Sources">Integrating Multiple Energy Sources</option>
                    <option value="Smart Grids and Sustainable Systems">Smart Grids and Sustainable Systems</option>
                    <option value="IoT in Power Systems">IoT in Power Systems</option>
                    <option value="Energy Policies & Standards">Energy Policies & Standards</option>
                    <option value="Battery Energy Management System">Battery Energy Management System</option>
                    <option value="E-Mobility: Opportunities & Challenges">E-Mobility: Opportunities & Challenges</option>
                    <option value="Application of AI & ML in Power Stations">Application of AI & ML in Power Stations</option>
                    <option value="Solar Photovoltaic Systems">Solar Photovoltaic Systems</option>
                    <option value="Modeling Control of AC/DC Converters">Modeling Control of AC/DC Converters</option>
                    <option value="Energy-Efficient Power Electronics">Energy-Efficient Power Electronics</option>
                </>
            ) : null}
            {uplDom === "Mechanical Engineering" ? (
                <>
                    <option id="option">--select--</option>
                    <option value="CAD/CAE: Design Innovation">CAD/CAE: Design Innovation</option>
                    <option value="Self-Healing and Smart Materials: Future of Engineering">Self-Healing and Smart Materials: Future of Engineering</option>
                    <option value="Optimizing Supply Chains: Blockchain for Transparency">Optimizing Supply Chains: Blockchain for Transparency</option>
                    <option value="Sustainable Manufacturing Solutions">Sustainable Manufacturing Solutions</option>
                    <option value="3D Printing Revolution: Printing Electronics On-Demand">3D Printing Revolution: Printing Electronics On-Demand</option>
                    <option value="MEMS – Micro Electro Mechanical Systems">MEMS – Micro Electro Mechanical Systems</option>
                    <option value="Automated Driving: EV & Self-Driving Tech">Automated Driving: EV & Self-Driving Tech</option>
                    <option value="Friction Stir Welding: Innovation">Friction Stir Welding: Innovation</option>
                    <option value="Industry 4.0: Smart Factory">Industry 4.0: Smart Factory</option>
                    <option value="Nanotechnology">Nanotechnology</option>
                    <option value="Cobots: Collaborative Robots">Cobots: Collaborative Robots</option>
                    <option value="Bioprinting: Organs on Demand">Bioprinting: Organs on Demand</option>
                </>
            ) : null}
            {uplDom === "Computer Science and Information Technology" ? (
                <>
                    <option id="option">--select--</option>
                    <option value="Cloud Computing">Cloud Computing</option>
                    <option value="AI & Cognitive Science">AI & Cognitive Science</option>
                    <option value="Image Processing (Computer Vision)">Image Processing (Computer Vision)</option>
                    <option value="Deep Learning">Deep Learning</option>
                    <option value="Machine Learning">Machine Learning</option>
                    <option value="Augmented Reality(AR), Virtual Reality(VR) & Metaverse Technology">Augmented Reality(AR), Virtual Reality(VR) & Metaverse Technology</option>
                    <option value="Big Data and Analytics">Big Data and Analytics</option>
                    <option value="Web 3.0">Web 3.0</option>
                    <option value="Semantic Analysis of Social Media or E-commerce Data.">Semantic Analysis of Social Media or E-commerce Data.</option>
                    <option value="Explainable artificial intelligence (XAI)">Explainable artificial intelligence (XAI)</option>
                    <option value="EV's and Self Driving Revolution">EV's and Self Driving Revolution</option>
                    <option value="Bio-Inspired Security for IOT & Edge Computing">Bio-Inspired Security for IOT & Edge Computing</option>
                    <option value="Quantum computing">Quantum computing</option>
                    <option value="Space Exploration">Space Exploration</option>
                    <option value="Cyber Security">Cyber Security</option>
                </>
            ) : null}
        </select>
    ) : (
        <div className="teamID_box">{topic}</div>
    )}
</div>

</div>

            <hr className="dbHR2" />

            <div id="synopsis">
                <div className="dbFlex1">
                    <div className="dbFlex2">
                        <p className="dbHead">Synopsis</p>
                        <p className="dbText">Note: You can upload the document (only PDF, DOCx) of size less than or equals to 1MB only once. Please carefully recheck your document while uploading.</p>
                    </div>

                    {synopsis === '' || synopsis === null || synopsis === undefined ? <>
                        {(uplSyn.length == 0) ?
                            <label for="uploadSyn">
                                <div className="file_box">
                                    <label for="uploadSyn"><img src={file} onClick={() => { handleSynopsis() }} className="fileIcon" /></label>
                                    <input type="file" id="uploadSyn" accept=".doc, .docx, .pdf" disabled={((topic === '' && domain === '') && (uplDom === "" && uplTop === "") || (uplDom != "" && uplTop === "")) ? true : false} onChange={(e) => { setUplSyn(e.target.files[0]) }} hidden />
                                    <label for="uploadSyn"><p className="uploadText">Click to upload</p></label>
                                </div>
                            </label> : <div id="dbFiles">
                                <div className="teamID_box">{uplSyn.name}</div>
                                <div className="fileFlex">
                                    <label for="uploadSyn" id="editFile">Edit</label>
                                    <input type="file" id="uploadSyn" accept=".doc, .docx, .pdf" disabled={((topic === '' && domain === '') && (uplDom === "" && uplTop === "") || (uplDom != "" && uplTop === "")) ? true : false} onChange={(e) => { setUplSyn(e.target.files[0]) }} hidden />
                                    <p id="remove" onClick={() => { setUplSyn('') }}>Remove</p>
                                </div>
                            </div>
                        }
                    </>
                        : <div className="synopsis"><a href={`https://scrollsdev.silive.in/${synopsis}`}>{`https://scrollsdev.silive.in/${synopsis}`}</a></div>}
                </div>
                <hr className="dbHR2" />
            </div>

            <div id="Paper">
                <div className="dbFlex1">
                    <div className="dbFlex2">
                        <p className="dbHead">Paper</p>
                        <p className="dbText">Note: You can upload the document (only PDF, DOCx) only once. Please carefully recheck your document while uploading.</p>
                    </div>

                    {paper === "" || paper === null || paper === undefined ? <>
                        {(uplPaper.length == 0) ?
                            <label for="uploadFile">
                                <div className="file_box">
                                    <label for="uploadFile"><img src={file} onClick={() => { handlePaper() }} className="fileIcon" /></label>
                                    <input type="file" id="uploadFile" accept=".doc, .docx, .pdf" disabled={(!selected) ? true : false} onChange={(e) => { handleChange(e) }} hidden />
                                    <label for="uploadFile"><p className="uploadText">Click to upload</p></label>
                                </div>
                            </label> : <div id="dbFiles">
                                <div className="teamID_box">{uplPaper.name}</div>
                                <div className="fileFlex">
                                    <label for="uploadFile" id="editFile">Edit</label>
                                    <input type="file" id="uploadFile" accept=".doc, .docx, .pdf" disabled={(!selected) ? true : false} onChange={(e) => { handleChange(e) }} hidden />
                                    <p id="remove" onClick={() => { setUplPaper('') }}>Remove</p>
                                </div>
                            </div>
                        }
                    </>
                        : <div className="synopsis"><a href={`https://scrollsdev.silive.in/${paper}`}>{`https://scrollsdev.silive.in/${paper}`}</a></div>}
                </div>
                <hr className="dbHR2" />
            </div>

            <div className="dbBtns">
                <button className="dbCancel" onClick={() => { handleCancel() }} >Cancel</button>
                <button className="dbSave" type="button" disabled={condition} onClick={() => { handleSave() }}>Save</button>
            </div>
        </div>
        <Footer />
        <ToastContainer />
        {(loading) ? <Spinner animation="border" variant="dark" id="loadSpinner" /> : null}
    </>
}

export default TeamDB
