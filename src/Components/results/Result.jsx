import { useState } from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../footer/footer";
import "./result.css";
import TableComp from "./table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ResultThunk } from "../../Redux/resultSlice";
import { Spinner } from "react-bootstrap";

function Result() {
  const dispatch = useDispatch();
  const reducer = useSelector((s) => s.result);

  const team = {
    MS_team: "",
    CS_team: "",
    EN_team: "",
    EC_team: "",
    CE_team: "",
    ME_team: "",
  };
  const [selected, setSelected] = useState(team);
  const [wait, setWait] = useState(team);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(ResultThunk());
  }, []);

  useEffect(() => {
    if (
      reducer.selectedTeam != "" &&
      reducer.selectedTeam != null &&
      reducer.selectedTeam != undefined
    ) {
      setSelected({
        ...selected,
        MS_team: reducer.selectedTeam.msg.MS_team,
        CS_team: reducer.selectedTeam.msg.CS_team,
        EN_team: reducer.selectedTeam.msg.EN_team,
        EC_team: reducer.selectedTeam.msg.EC_team,
        CE_team: reducer.selectedTeam.msg.CE_team,
        ME_team: reducer.selectedTeam.msg.ME_team,
      });
    }
    if (
      reducer.waitlistedTeam != "" &&
      reducer.waitlistedTeam != null &&
      reducer.waitlistedTeam != undefined
    ) {
      setWait({
        ...wait,
        MS_team: reducer.waitlistedTeam.MS_team,
        CS_team: reducer.waitlistedTeam.CS_team,
        EC_team: reducer.waitlistedTeam.EC_team,
      });
    }
  }, [reducer]);

  const [timer, setTimer] = useState(10);
  // useEffect(() => {
  //   if (reducer.loading) {
  //     const time =
  //       timer > 0 &&
  //       setInterval(() => {
  //         setTimer(timer - 1);
  //       }, 1000);
  //     return () => clearInterval(time);
  //   }
  // }, [timer, reducer.loading]);

  // useEffect(() => {
  //   if (timer > 0 && reducer.loading) {
  //     setLoading(true);
  //     document.body.style.opacity = 0.5;
  //   } else {
  //     setLoading(false);
  //     document.body.style.opacity = 1;
  //   }
  // }, [reducer.loading, timer]);

  return (
    <>
      <Navbar />
      <div className="sm:px-[2rem]" id="RESULT">
        <div id="resultHead">Winners-2023</div>
        <TableComp
          name="Computer Science and Information Technology"
          data={selected.CS_team}
          wait={wait.CS_team}
          bool="true"
          team1="Ananta"
          team2="Udi Baba"
          team3="The Recyclers"
        />
        <TableComp
          name="Civil Engineering"
          data={selected.CE_team}
          wait={wait.CE_team}
          bool="false"
          team1="Bro-Gang"
          team2="Innovators"
          team3="CRYstals"
        />
        <TableComp
          name="Electrical and Electronics Engineering"
          data={selected.EN_team}
          wait={wait.EN_team}
          bool="false"
          team1="Explorers"
          team2="Unbeaten"
          team3="Innovators"
        />
        <TableComp
          name="Electronics and Communication Engineering"
          data={selected.EC_team}
          wait={wait.EC_team}
          bool="true"
          team1="AUGN"
          team2="Research Rockets"
          team3="Captivators"
        />
        <TableComp
          name="Mechanical Engineering"
          data={selected.ME_team}
          wait={wait.ME_team}
          bool="false"
          team1="Mischief Managed"
          team2="Shubham Bahuguna"
          team3="Alpha"
        />
        <TableComp
          name="Management Sciences"
          data={selected.MS_team}
          wait={wait.MS_team}
          bool="true"
          team1="Meta Mavericks"
          team2="Sahasra"
          team3="Vanquishers"
        />
      </div>
      <Footer />
{/* 
      {loading ? (
        <Spinner animation="border" variant="dark" id="loadSpinner" />
      ) : null} */}
    </>
  );
}

export default Result;
