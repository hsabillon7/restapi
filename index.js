const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/index");

// Crear el servidor
const app = express();

// Configuración de Mongo y Mongoose
const mongoUri =
  "mongodb+srv://root:root2019@cluster0-aklxa.mongodb.net/restapi";
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
mongoose.connection.on("connected", () => {
  console.log("Connnected to mongo instance");
});
mongoose.connection.on("error", err => {
  console.log("Error connecting to mongo", err);
});

// Habilitar body -parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Implementar las rutas
app.use("/", routes());

// Habilitar el puerto de escucha del servidor
app.listen(5000, () => {
  console.log("Listening on port 5000");
});
