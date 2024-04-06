import { useEffect, useState } from "react";
import "./result.css"
import Table from 'react-bootstrap/Table';

function TableComp(props) {
    return <>
        <div className="resDiv">
            <div>
            <p className="resHead">{props.name}</p>
            <div className="flex font-semibold mb-1 gap-[2rem] md:flex-nowrap flex-wrap sm:flex-col flex-col mt-3 ">
<div>Team {props.team1}{"("}1st{")"}</div>
<div>Team {props.team2}{"("}2nd{")"}</div>
<div>Team {props.team3}{"("}3rd{")"}</div>    
            </div>
            {/* <p className="resHead2">Shortlisted Teams</p>
            <div id="tableScroll" style={{ overflowX: "auto" }}>
                <Table striped bordered hover className="resTablee">
                    <thead>
                        <tr>
                            <th>Team ID</th>
                            <th>Team Name</th>
                            <th className="namee">College Name</th>
                            <th>Domain (Topic)</th>
                            <th>Member's Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.length > 0 ? props.data.map((d) => {
                            return <>
                                <tr className="resTableRow">
                                    <td>{d.team_id}</td>
                                    <td>{d.name}</td>
                                    <td className="namee" >{d.college}</td>
                                    {(d.domain === '' || d.domain === null || d.domain === undefined) && (d.topic === '' || d.topic === null || d.topic === undefined) ? null :
                                    <td>{d.domain} ({d.topic})</td>
                                     } 
                                    <td ><ul>
                                        <li><p>{d.leader_name}</p></li>
                                        <li><p>{d.member_2_name}</p></li>
                                        {(d.member_3_name != '' && d.member_3_name != null && d.member_3_name != undefined) ?
                                            <li><p>{d.member_3_name}</p></li>
                                            : null}
                                    </ul></td>
                                </tr>
                            </>
                        })
                            : null}
                    </tbody>
                </Table>
            </div>
            {props.wait.length > 0 ?
                <>
                    <p className="resHead2">Waitlisted Teams</p>
                    <div style={{ overflowX: "auto" }}>
                        <Table striped bordered hover className="resTablee">
                            <thead>
                                <tr>
                                    <th>Team ID</th>
                                    <th>Team Name</th>
                                    <th className="namee">College Name</th>
                                    <th>Domain (Topic)</th>
                                    <th>Member's Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.wait.length > 0 ? props.wait.map((d) => {
                                    return <>
                                        <tr className="resTableRow">
                                            <td>{d.team_id}</td>
                                            <td>{d.name}</td>
                                            <td className="namee" >{d.college}</td>
                                            <td>{d.domain} ({d.topic})</td>
                                            <td ><ul>
                                                <li>{d.leader_name}</li>
                                                <li>{d.member_2_name}</li>
                                                {(d.member_3_name != '' && d.member_3_name != null && d.member_3_name != undefined) ?
                                                    <li>{d.member_3_name}</li>
                                                    : null}
                                            </ul></td>
                                        </tr>
                                    </>
                                })
                                    : null}
                            </tbody>
                        </Table>
                    </div>
                </> : null
            } */}
        </div>
        </div>
    </>
}

export default TableComp;