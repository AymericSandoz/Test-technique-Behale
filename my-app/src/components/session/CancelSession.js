import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faCancel,
  faCheck,
  faCheckCircle,
  faMinus,
  faPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const CancelSession = ({ session, getSessions, editActionDone }) => {
  const cancel = () => {
    axios({
      method: "put",
      url: `http://localhost:5000/api/session/cancel/${session._id}`,
    })
      .then((res) => {
        console.log("session cancelled");
        editActionDone();
        getSessions();
      })
      .catch((err) => console.log(err));
  };

  return (
    <FontAwesomeIcon
      icon={faCancel}
      className="cancel-button icon"
      onClick={() => {
        cancel();
      }}
    />
  );
};

export default CancelSession;
