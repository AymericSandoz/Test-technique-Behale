import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faPaperclip,
  faPaperPlane,
  faPenClip,
  faPlane,
  faSquareCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const WeeklyGoal = ({ sessions }) => {
  const [weekGoal, setWeekGoal] = useState();
  const [weekGoalInput, setWeekGoalInput] = useState();
  const [loadWeekGoal, setLoadWeekGoal] = useState(true);
  const [displayWeekgoalInput, setDisplayWeekgoalInput] = useState(false);

  const [error, setError] = useState(false);

  //Récupération du weekgoal
  const getWeekGoal = () => {
    axios({
      method: "get",
      url: `http://localhost:5000/api/user/getWeekGoal/`,
    })
      .then((res) => {
        console.log("week goal fetched", res.data.weekGoal);
        setWeekGoal(res.data.weekGoal);
        setLoadWeekGoal(false);
      })
      .catch((err) => console.log(err));
  };

  //définition du weekgoal
  const defineWeekGoal = () => {
    if (weekGoalInput < 11 && weekGoalInput > 3) {
      axios({
        method: "post",
        url: `http://localhost:5000/api/user/defineWeekGoal/`,
        data: { weekGoalInput },
      })
        .then((res) => {
          console.log("week goal defined");
          getWeekGoal();
          setDisplayWeekgoalInput(false);
        })
        .catch((err) => console.log(err));
    } else {
      console.log("error");
    }
  };

  useEffect(() => {
    if (loadWeekGoal) {
      getWeekGoal();
    }
  }, [weekGoal]);

  //Affichage dépendant de si weekgoal est déja défini et si l'utilisateur a cliqué sur la section
  return (
    <div className="user-week-goal">
      {!displayWeekgoalInput && weekGoal != undefined && (
        <div onClick={() => [setDisplayWeekgoalInput(true)]}>
          <p> Weekly Goal : </p>
          <span className="week-goal">{weekGoal} sessions</span>
          <FontAwesomeIcon
            icon={faPenClip}
            className="user-pen-icon icon"
          />{" "}
        </div>
      )}
      {!displayWeekgoalInput && weekGoal == undefined && (
        <>
          <div onClick={() => setDisplayWeekgoalInput(true)}>
            <p>Define your weekly goal</p>
            <FontAwesomeIcon icon={faPenClip} className="user-pen-icon icon" />
          </div>
        </>
      )}

      {displayWeekgoalInput && (
        <div onClick={() => setDisplayWeekgoalInput(true)}>
          <input
            name="weekGoal"
            id="weekGoal"
            type="number"
            min="3"
            max="10"
            placeholder="Your week Goal"
            onChange={(e) => setWeekGoalInput(e.target.value)}
          />

          <FontAwesomeIcon
            icon={faPaperPlane}
            className="user-plane-icon icon"
            onClick={() => defineWeekGoal()}
          />
        </div>
      )}
    </div>
  );
};

export default WeeklyGoal;
