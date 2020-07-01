import _ from "lodash";
import React from "react";

const exercises = [
  "C to F♯ (5ths)",
  "C to G♭ (4ths)",
  "F♯ to C (4ths)",
  "G♭ to C (5ths)",
];

class ScalesExercise extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>{_.sample(exercises)}</h1>
      </React.Fragment>
    );
  }
}

export default ScalesExercise;
