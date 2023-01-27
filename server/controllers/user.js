const User = require("../models/user");
const Session = require("../models/session");

exports.getUserPoints = (req, res) => {
  console.log("getPoints ");
  const userId = "63d1365e4b6c45736973eebf";

  User.findOne({ _id: userId }, function (err, user) {
    let sum = 0;
    const Sum = (array) => {
      for (let i = 0; i < array.length; i++) {
        sum += array[i];
      }
      return sum;
    };
    if (!err) {
      console.log("eeeeees");
      const points = Sum(user.points);
      res.status(200).json({ points });
    } else {
      console.log("erreur:", err);
      res.status(500).json({ error: err });
    }
  });
};

exports.getUserNbOfCompletedSessions = (req, res) => {
  console.log("getUserNbOfCompletedSessions");
  const userId = "63d1365e4b6c45736973eebf";

  Session.find(
    { userId: userId, statue: "Completed" },
    function (err, sessions) {
      nbCompletedSessions = sessions.length;
      if (!err) res.status(200).json({ nbCompletedSessions });
      else res.status(500).json({ error: err });
    }
  );
};

exports.getWeekGoal = (req, res) => {
  console.log("getWeekGoal");
  const userId = "63d1365e4b6c45736973eebf";

  User.findOne({ userId: userId }, function (err, user) {
    const weekGoal = user.weeklyGoal;
    console.log(user.weeklyGoal);
    if (!err) {
      if (weekGoal == undefined) res.status(200).json("undefined");
      else res.status(200).json({ weekGoal });
    } else res.status(500).json({ error: err });
  });
};

exports.defineWeekGoal = (req, res) => {
  console.log("defineWeekGoal");
  console.log(req.body.weekGoalInput);
  const userId = "63d1365e4b6c45736973eebf";

  User.updateOne({ _id: userId }, { weeklyGoal: req.body.weekGoalInput })
    .then(() => {
      res.status(201).json("week goal defined");
    })
    .catch((error) => console.log(error));
};
