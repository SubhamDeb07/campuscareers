import routes from "./index";
import express from "express";
import "./config/database";

const app = express();

app.use(express.json({ limit: "10mb" }));

app.use(
  express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 })
);

const port = 3000;

app.use("/", routes);

app.listen(port, () => {
  console.log("App is running");
});
