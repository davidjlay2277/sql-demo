//access environemnt variables
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

// process.env.VAR_NAME  node is providing "process"
//below, the above is done with deconstruction
const { SERVER_PORT } = process.env;
//seed is like another controller
const { seed } = require("./seed.js");

// pre-built functions
const {
  getUserInfo,
  updateUserInfo,
  getUserAppt,
  requestAppointment,
} = require("./controller.js");

//middleware
app.use(express.json());
app.use(cors());

// DEV;
app.post("/seed", seed);

// USER;
app.get("/user", getUserInfo);
app.put('/user', updateUserInfo)

// APPOINTMENTS;
app.get("/appt", getUserAppt);
app.post("/appt", requestAppointment);

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`));
