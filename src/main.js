import "./style/styles.css";
import { weatherAppFactory } from "./weatherApp";

weatherAppFactory("Rogers, AR", { metric: false, temp: "F" });
