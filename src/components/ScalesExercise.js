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

const tempos = ["70bpm", "80bpm", "90bpm", "100bpm", "110bpm"];
const articulations = ["Legato", "Portato", "Bebop articulation"];

class ScalesExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: _.sample(exercises),
      tempo: _.sample(tempos),
      articulation: _.sample(articulations),
    };
  }

  reload = () => {
    this.setState({
      exercise: _.sample(exercises),
      tempo: _.sample(tempos),
      articulation: _.sample(articulations),
    });
  };

  render() {
    const { exercise, tempo, articulation } = this.state;
    return (
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Scales
          </Typography>
          <Typography variant="h4" gutterBottom>
            {exercise}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Tempo
          </Typography>
          <Typography variant="h4" gutterBottom>
            {tempo}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Articulation
          </Typography>
          <Typography variant="h4" gutterBottom>
            {articulation}
          </Typography>
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
