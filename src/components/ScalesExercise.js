import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
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
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Scales
          </Typography>
          <Typography variant="h4">{exercise}</Typography>
        </CardContent>
        <CardActions>
          <Button color="primary" onClick={this.reload}>
            Reload
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default ScalesExercise;
