const express = require("express");

const PORT = process.env.PORT || 5000;

const app = express();
require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const sessionRoutes = require("./routes/session");
const userRoutes = require("./routes/user");
const cors = require("cors");
var bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //accéder à notre API depuis n'importe quelle origine ( '*' )
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  ); //ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.)
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  ); //envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.
  next();
});

app.use("/api/session", sessionRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
