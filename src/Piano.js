import React, { Component } from "react";
import { Octave } from "./Keyboard/Octave";
import "./styles.css";
import Grid from "@material-ui/core/Grid";

class Piano extends Component {
  render() {
    return (
      <Grid
        justify='center'
        style={{display: "flex"}}
      >
        <Octave />
        <Octave />
      </Grid>
    );
  }
}

export default Piano;
