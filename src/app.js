const express = require("express");
const initModels = require("./models/initModels");
const userRoutes = require("./routes/users.route");
const tasksRoutes = require("./routes/tasks.route");
require('dotenv').config()
// importamos la instancia db de database.js
const db = require("./utils/database");
const Tasks = require("./models/ tasks.models");

const app = express();

const PORT = process.env.PORT || 3000;

db.authenticate() // devuelve una promesa
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync({ force: false }) // devuelve una promesa
  .then(() => console.log("Base sincronizada"))
  .catch((error) => console.log(error));

initModels();

app.get("/", (req, res) => {
  res.status(200).json("Todo copas");
});

app.use('/api/v1', userRoutes, tasksRoutes);

app.listen(PORT, () => console.log("Servidor corriendo en " + PORT));
