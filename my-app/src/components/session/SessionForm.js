import React, { useEffect, useState, useContext } from "react";
import DatePicker from "react-date-picker";
import axios from "axios";
import sports from "../SportOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faCheck,
  faCheckCircle,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const SessionForm = ({ getSessions }) => {
  const [isAddingSession, setIsAddingSession] = useState(false);
  const [sessionName, setSessionName] = useState(null);
  const [sessionDate, setSessionDate] = useState(new Date());
  const [error, setError] = useState(null);

  const [selectedSport, setSelectedSport] = useState(null);

  const addSession = () => {
    if (!sessionName || !selectedSport) {
      setError("Fields Name and Activity are mandotary");
      return;
    }
    axios({
      method: "post",
      url: "http://localhost:5000/api/session",
      data: {
        name: sessionName,
        type: selectedSport,
        date: sessionDate,
      },
    })
      .then((res) => {
        console.log(res.data);
        setIsAddingSession(!isAddingSession);
        getSessions();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div
        className={
          !isAddingSession
            ? "session-form session-form-unfocused"
            : "session-form session-form-focused"
        }
      >
        <FontAwesomeIcon
          icon={faPlus}
          className={
            isAddingSession
              ? "icon add-session display-none"
              : "icon add-session"
          }
          onClick={() => {
            setIsAddingSession(!isAddingSession);
          }}
        />
        <FontAwesomeIcon
          icon={faMinus}
          className={
            isAddingSession
              ? "icon close-add-session"
              : "icon close-add-session display-none"
          }
          onClick={() => {
            setIsAddingSession(!isAddingSession);
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
              required
              placeholder="Name"
              onChange={(e) => setSessionName(e.target.value)}
            />
          </div>
          <div className="activity-container">
            <select onChange={(e) => setSelectedSport(e.target.value)}>
              <option value="">Activity</option>
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
            value={sessionDate}
            onChange={(date) => setSessionDate(date)}
          />

          <div className="confirm-container">
            <FontAwesomeIcon
              icon={faCheck}
              className="icon confirm"
              onClick={() => addSession()}
            />
          </div>
          <div className="error">{error}</div>
        </div>
      </div>
    </>
  );
};

export default SessionForm;
