import React, { useEffect, useState, useContext } from "react";
import SessionCard from "../session/SessionCard";
import axios from "axios";
import UserPoints from "../session/UserPoints";
import NbOfCompletedSessions from "../session/NbCompletedSessions";
import SessionForm from "../session/SessionForm";
import WeeklyGoal from "../weeklyGoal/WeeklyGoalForm";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [points, setPoints] = useState(Number);
  const [name, setName] = useState();
  const [sessions, setSessions] = useState([]);
  const [loadSessions, setLoadSessions] = useState(true);
  const [reloadProfil, setReloadProfil] = useState(false);
  const [isUptaded, setIsUpdated] = useState(false);
  const [weekCount, setWeekCount] = useState(
    parseInt(parseFloat(moment(new Date()).format("w")))
  );

  //   const filterSessionByWeeks = (array) => {
  //     let newArray = [];
  //     const today = new Date();
  //     let thisWeek = parseInt(parseFloat(moment(today).format("w")));
  //     console.log(weekCount);
  //     array.forEach((session) => {
  //       let weekFiltered = moment(session.date).format("w"); //week session
  //       let weekFiltered_nb = parseInt(parseFloat(weekFiltered)); //week session formated to number

  //       let weekToFilter = thisWeek + weekCount;
  //       console.log("weekToFilter", weekToFilter);
  //       console.log("weekFiltered_nb", weekFiltered_nb);
  //       if (weekFiltered_nb === weekToFilter) {
  //         newArray.push(session);
  //       }
  //     });
  //     console.log(newArray);
  //     return newArray;
  //   };

  const getSessions = () => {
    axios
      .get("http://localhost:5000/api/session")
      .then((res) => {
        // setSessions(filterSessionByWeeks(res.data));
        setSessions(res.data);
        setLoadSessions(false);
      })
      .catch((err) =>
        console.log("requête axios de getPosts ne fonctionne pas :" + err)
      );
  };

  useEffect(() => {
    if (loadSessions) {
      getSessions();
    }
  }, [loadSessions, sessions]);

  return (
    <div className="profil">
      <header>
        <div className="user-info">
          <UserPoints sessions={sessions} />
          <NbOfCompletedSessions sessions={sessions} />
          <WeeklyGoal />
        </div>

        <div className="date-filter">
          <FontAwesomeIcon
            icon={faAngleLeft}
            onClick={() => {
              setWeekCount(weekCount - 1);
              getSessions();
            }}
            className="left-icon icon"
          />
          <FontAwesomeIcon
            icon={faCalendarDay}
            className="calendar-icon icon"
          />
          <FontAwesomeIcon
            icon={faAngleRight}
            onClick={() => {
              setWeekCount(weekCount + 1);
              getSessions();
            }}
            className="left-icon icon"
          />
          <span className="week-count">{weekCount}</span>
        </div>
      </header>
      <div>
        <div className="sessions-container">
          <h2> My Sessions</h2>
          <ul>
            {sessions.length > 0 &&
              sessions.map((session) => {
                if (moment(session.date).format("w") == weekCount) {
                  return (
                    <SessionCard
                      session={session}
                      getSessions={getSessions}
                      key={session._id}
                    />
                  );
                }
              })}
          </ul>
        </div>
      </div>
      <SessionForm getSessions={getSessions} />
    </div>
  );
};

export default Home;
