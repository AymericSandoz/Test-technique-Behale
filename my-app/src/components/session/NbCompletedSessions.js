import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBiking,
  faCalendarDay,
  faCheck,
  faCheckCircle,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const NbOfCompletedSessions = ({ sessions }) => {
  const [nbCompletedSession, setNbCompletedSession] = useState();
  const [loadNbCmptSession, setLoadNbCmptSession] = useState(true);

  const getNbofCompletedSessions = () => {
    axios({
      method: "get",
      url: `http://localhost:5000/api/user/getUserNbOfCompletedSessions/`,
    })
      .then((res) => {
        console.log("Nb of completed session : ", res.data);
        setNbCompletedSession(res.data.nbCompletedSessions);
        setLoadNbCmptSession(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getNbofCompletedSessions();
  }, [loadNbCmptSession, nbCompletedSession, sessions]);

  return (
    <div className="number-sessions-completed">
      {" "}
      <FontAwesomeIcon icon={faBiking} className="cancel-button" />
      <p> Number of sessions completed :</p>
      <span className="number">{nbCompletedSession}</span>
    </div>
  );
};

export default NbOfCompletedSessions;
