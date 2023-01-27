import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faCheck,
  faCheckCircle,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const CompleteSession = ({ session, getSessions, editActionDone }) => {
  const complete = () => {
    axios({
      method: "put",
      url: `http://localhost:5000/api/session/complete/${session._id}`,
    })
      .then((res) => {
        console.log("session completed");
        editActionDone();
        getSessions();
      })
      .catch((err) => console.log(err));
  };

  return (
    <FontAwesomeIcon
      icon={faCheckCircle}
      className="complete-button icon"
      onClick={() => {
        complete();
      }}
    />
  );
};

export default CompleteSession;
