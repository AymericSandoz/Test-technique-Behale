import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import DatePicker from "react-date-picker";
import sports from "../SportOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faCalendarDay,
  faCheck,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import CancelSession from "./CancelSession";
import CompleteSession from "./CompleteSession";

const UpdateSession = ({ session, getSessions, editActionDone }) => {
  const [sessionName, setSessionName] = useState(session.name);
  const [sessionDate, setSessionDate] = useState(session.date);
  const [selectedSport, setSelectedSport] = useState(session.type);
  const [isAddingSession, setIsAddingSession] = useState(true);

  const update = () => {
    console.log("update");
    axios({
      method: "put",
      url: `http://localhost:5000/api/session/update/${session._id}`,
      data: {
        name: sessionName,
        type: selectedSport,
        date: sessionDate,
      },
    })
      .then((res) => {
        console.log("session updated");
        editActionDone();
        getSessions();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div
        className={
          !isAddingSession
            ? "update-session-form update-session-form-unfocused"
            : "update-session-form update-session-form-focused"
        }
      >
        <FontAwesomeIcon
          icon={faMinus}
          className={
            isAddingSession
              ? "icon close-add-session"
              : "icon close-add-session display-none"
          }
          onClick={() => {
            editActionDone();
          }}
        />
        <div
          className={
            !isAddingSession
              ? "session-form-container display-none"
              : "session-form-container"
          }
        >
          <div className="name-container">
            <input
              name="sessionName"
              id="sessionName"
              placeholder={sessionName}
              onChange={(e) => setSessionName(e.target.value)}
            />
          </div>
          <div className="activity-container">
            <select onChange={(e) => setSelectedSport(e.target.value)}>
              <option value="">{selectedSport}</option>
              {Object.values(sports).map((sport) => (
                <option key={sport.name} value={sport.name}>
                  {sport.name}
                </option>
              ))}
            </select>
            {selectedSport && <p>{selectedSport.description}</p>}
          </div>
          <div className="plan-date-container">
            <FontAwesomeIcon icon={faCalendarDay} className="icon calendar" />
            <p> Plan session : </p>
          </div>

          <DatePicker
            value={
              typeof sessionDate === "string"
                ? new Date(sessionDate)
                : sessionDate
            }
            onChange={(date) => setSessionDate(date)}
          />

          <div className="confirm-container">
            <FontAwesomeIcon
              icon={faCheck}
              className="icon confirm"
              onClick={() => update()}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateSession;
