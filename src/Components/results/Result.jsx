import { useState } from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../footer/footer";
import "./result.css";
import TableComp from "./table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ResultThunk } from "../../Redux/resultSlice";
// import { Spinner } from "react-bootstrap";

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
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(ResultThunk());
  }, []);

  useEffect(() => {
    if (
      reducer.selectedTeam !== "" &&
      reducer.selectedTeam !== null &&
      reducer.selectedTeam !== undefined
    ) {
      setSelected((prevSelected) => ({
        ...prevSelected,
        MS_team: reducer.selectedTeam.msg.MS_team,
        CS_team: reducer.selectedTeam.msg.CS_team,
        EN_team: reducer.selectedTeam.msg.EN_team,
        EC_team: reducer.selectedTeam.msg.EC_team,
        CE_team: reducer.selectedTeam.msg.CE_team,
        ME_team: reducer.selectedTeam.msg.ME_team,
      }));
    }
    if (
      reducer.waitlistedTeam !== "" &&
      reducer.waitlistedTeam !== null &&
      reducer.waitlistedTeam !== undefined
    ) {
      setWait((prevWait) => ({
        ...prevWait,
        MS_team: reducer.waitlistedTeam.MS_team,
        CS_team: reducer.waitlistedTeam.CS_team,
        EC_team: reducer.waitlistedTeam.EC_team,
      }));
    }
  }, [reducer]);

  return (
    <>
      <Navbar pg="res" />
      <div className="sm:px-[2rem]" id="RESULT">
        <div id="resultHead">Scrolls Winners-2024</div>
        <TableComp
          name="Computer Science and Information Technology"
          data={selected.CS_team}
          wait={wait.CS_team}
          bool="true"
          team1="Firstcall Fleet"
          team2="D-Generation Z"
          team3="Terminators"
        />
        <TableComp
          name="Civil Engineering"
          data={selected.CE_team}
          wait={wait.CE_team}
          bool="false"
          team1="Lightning Engineers"
          team2="Team Trifecta"
          team3="Team Bytebuilders"
        />
        <TableComp
          name="Electrical and Electronics Engineering"
          data={selected.EN_team}
          wait={wait.EN_team}
          bool="false"
          team1="Robo Rangers"
          team2="Curiosity Crusaders"
          team3="Rover Rangers"
        />
        <TableComp
          name="Electronics and Communication Engineering"
          data={selected.EC_team}
          wait={wait.EC_team}
          bool="true"
          team1="Eunoia"
          team2="Virtual Visionaries"
          team3="Little Bits"
        />
        <TableComp
          name="Mechanical Engineering"
          data={selected.ME_team}
          wait={wait.ME_team}
          bool="false"
          team1="Team Resistance"
          team2="Team Mechmages"
          team3="Smart Researchers"
        />
        <TableComp
          name="Management Sciences"
          data={selected.MS_team}
          wait={wait.MS_team}
          bool="true"
          team1="Synergy Squad"
          team2="Planet Protecors"
          team3="Lifetech Leader"
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
