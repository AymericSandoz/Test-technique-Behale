const express = require("express");
const router = express.Router(); //création d'un routeur express dans lequel on va enregistrer nos routes

//Importation controllers
const stuffCtrl = require("../controllers/session");

//Routes

router.post("/", stuffCtrl.createSession); //Création de post
router.get("/", stuffCtrl.getSessions); //Création de post
router.put("/update/:id", stuffCtrl.updateSession); //Création de post
router.put("/complete/:id", stuffCtrl.completeSession); //Création de post
router.put("/cancel/:id", stuffCtrl.cancelSession); //Création de post

module.exports = router; //exportations de notre routeur
