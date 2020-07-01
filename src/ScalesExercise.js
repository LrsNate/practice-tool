import _ from "lodash";
import React from "react";

const exercises = [
  "C to F♯ (5ths)",
  "C to G♭ (4ths)",
  "F♯ to C (4ths)",
  "G♭ to C (5ths)",
];

class ScalesExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = { exercise: _.sample(exercises) };
  }

  reload = () => {
    const previousExercise = this.state.exercise;
    let exercise;
    do {
      exercise = _.sample(exercises);
    } while (exercise === previousExercise);
    this.setState({ exercise });
  };

  render() {
    const { exercise } = this.state;
    return (
      <React.Fragment>
        <h1>{exercise}</h1>
        <button onClick={this.reload}>Reload</button>
      </React.Fragment>
    );
  }
}

export default ScalesExercise;
