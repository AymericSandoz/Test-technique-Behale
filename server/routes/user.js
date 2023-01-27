const express = require("express");
const router = express.Router(); //création d'un routeur express dans lequel on va enregistrer nos routes

//Importation controllers
const stuffCtrl = require("../controllers/user");

//Routes

router.get("/getUserPoints", stuffCtrl.getUserPoints); //Création de post
router.get(
  "/getUserNbOfCompletedSessions",
  stuffCtrl.getUserNbOfCompletedSessions
);
router.get("/getWeekGoal", stuffCtrl.getWeekGoal);
router.post("/defineWeekGoal", stuffCtrl.defineWeekGoal);

module.exports = router;
