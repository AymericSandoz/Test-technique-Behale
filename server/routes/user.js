const express = require("express");
const router = express.Router(); //création d'un routeur express dans lequel on va enregistrer nos routes

//Importation controllers
const stuffCtrl = require("../controllers/user");

//Routes user

router.get("/getUserPoints", stuffCtrl.getUserPoints); //récupération des points de l'utilisateur
router.get(
  "/getUserNbOfCompletedSessions",
  stuffCtrl.getUserNbOfCompletedSessions
); //récupération  du nb de session complété par l'utilisateur
router.get("/getWeekGoal", stuffCtrl.getWeekGoal); //récupération du weekgoal
router.post("/defineWeekGoal", stuffCtrl.defineWeekGoal); //définition du weekgoal
module.exports = router;
