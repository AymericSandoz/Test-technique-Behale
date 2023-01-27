import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

const UserPoints = ({ sessions }) => {
  const [points, setPoints] = useState();
  const [loadPoints, setLoadPoints] = useState(true);

  const getUserPoints = () => {
    axios({
      method: "get",
      url: `http://localhost:5000/api/user/getUserPoints/`,
    })
      .then((res) => {
        console.log("Nb of points : ", res.data);
        setPoints(res.data.points);
        setLoadPoints(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUserPoints();
  }, [loadPoints, points, sessions]);

  return (
    <div className="user-points">
      <FontAwesomeIcon icon={faCoins} className="user-points-icon icon" />{" "}
      <p>Number of points : </p>
      <span className="number">{points}</span>
    </div>
  );
};

export default UserPoints;
