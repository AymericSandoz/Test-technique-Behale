const express = require("express");
const router = express.Router(); //création d'un routeur express dans lequel on va enregistrer nos routes

//Importation controllers
const stuffCtrl = require("../controllers/session");

//Routes session

router.post("/", stuffCtrl.createSession); //Création de session
router.get("/", stuffCtrl.getSessions); //récupération des sessions
router.put("/update/:id", stuffCtrl.updateSession); //modification de session
router.put("/complete/:id", stuffCtrl.completeSession); //compléter une session
router.put("/cancel/:id", stuffCtrl.cancelSession); //annuler une session

module.exports = router; //exportations de notre routeur
