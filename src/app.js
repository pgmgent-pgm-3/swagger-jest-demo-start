import express from "express";
import "dotenv/config";
import * as path from "path";
import { create } from "express-handlebars";
import { SOURCE_PATH } from "./consts.js";
import { home } from "./controllers/home.js";
import HandlebarsHelpers from "./lib/HandlebarsHelpers.js";
import DataSource from "./lib/DataSource.js";
import bodyParser from "body-parser";
import {
  postInterest,
  deleteInterest,
  getInterests,
  updateInterest,
} from "./controllers/api/interest.js";
import {
  deleteObject,
  getObjects,
  postObject,
  updateObject,
} from "./controllers/api/object.js";
import { getUsers, postUser } from "./controllers/api/user.js";
import { getRoles } from "./controllers/api/role.js";

const app = express();
app.use(express.static("public"));

/**
 * Handlebars Init
 */
const hbs = create({
  helpers: HandlebarsHelpers,
  extname: "hbs",
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(SOURCE_PATH, "views"));

// When sending data via a body (e.g. POSTing a form)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * App Routing
 */
app.get("/", home);

/**
 * API app routes.
 */
app.get("/api/interest", getInterests);
app.post("/api/interest", postInterest);
app.delete("/api/interest/:id", deleteInterest);
app.put("/api/interest", updateInterest);
app.get("/api/users", getUsers);
app.get("/api/user/:id", (req, res, next) => getObject("User", req, res, next));
app.post("/api/user", postUser);
app.get("/api/roles", getRoles);
app.delete("/api/user/:id", (req, res, next) =>
  deleteObject("User", req, res, next)
);
app.put("/api/user", (req, res, next) => updateObject("User", req, res, next));

/**
 * Init TypeORM
 */

// start the server
DataSource.initialize()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Application is running on http://localhost:${process.env.PORT}/.`
      );
    });
  })
  .catch(function (error) {
    console.log("Error: ", error);
  });
