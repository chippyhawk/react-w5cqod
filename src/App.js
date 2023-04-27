import React from "react";
import "./index.css";

import Routes from "./components/Routes";

import { makeStyles, createStyles, Theme } from "@material-ui/core";


export default function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.dynamicPage}>
        <Routes />
      </div>
    </div>
  );
}
