const Session = require("../models/session");
const User = require("../models/user");

exports.createSession = (req, res) => {
  const userId = "63d1365e4b6c45736973eebf";
  var session = new Session({
    name: req.body.name,
    userId: userId, //Provisional Solution.
    type: req.body.type,
    date: req.body.date,
  });
  console.log(session);
  session
    .save()
    .then(() => {
      console.log("session planned");
    })
    .catch((error) => {
      console.log(error);
      res.status(404).json({
        error: error,
      });
    });

  User.updateOne(
    { _id: userId },
    {
      $push: {
        points: -3,
      },
    }
  )
    .then(() => res.status(201).json("+5 points !"))
    .catch((error) => res.status(401).json({ error }));
};

exports.getSessions = (req, res) => {
  Session.find((err, docs) => {
    if (!err) res.send(docs);
    else res.send("Erreur :" + err);
  }).sort({ date: 1 });
};

exports.cancelSession = (req, res) => {
  const filter = { _id: req.params.id };
  const update = { statue: "Cancelled" };
  const userId = "63d1365e4b6c45736973eebf";
  Session.findOneAndUpdate(filter, update, {
    new: true,
  })
    .then(() => console.log("session cancelled"))
    .catch((error) => res.status(401).json({ error }));

  User.updateOne(
    { _id: userId },
    {
      $push: {
        points: -3,
      },
    }
  )
    .then(() => {
      console.log("-3points");
      res.status(201).json("-3 points !");
    })
    .catch((error) => console.log(error));
};

exports.completeSession = (req, res) => {
  const filter = { _id: req.params.id };
  const update = { statue: "Completed" };
  const userId = "63d1365e4b6c45736973eebf";
  Session.findOneAndUpdate(filter, update, {
    new: true,
  })
    .then(() => console.log("session completed"))
    .catch((error) => res.status(401).json({ error }));

  User.updateOne(
    { _id: userId },
    {
      $push: {
        points: 10,
      },
    }
  )
    .then(() => res.status(201).json("+10 points !"))
    .catch((error) => {
      console.log(error);
      res.status(401).json({ error });
    });
};

exports.updateSession = (req, res) => {
  console.log("updateSession");
  const filter = { _id: req.params.id };
  const update = { ...req.body };
  Session.findOneAndUpdate(filter, update, {
    new: true,
  })
    .then(() => res.status(201).json("session Updated"))
    .catch((error) => res.status(401).json({ error }));
};
