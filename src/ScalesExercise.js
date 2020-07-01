import _ from 'lodash';
import React from 'react';

const exercises = [
  'C to F♯ (5ths)',
  'C to G♭ (4ths)',
  'F♯ to C (4ths)',
  'G♭ to C (5ths)'
]

const ScalesExercise = () => <h1>{_.sample(exercises)}</h1>

export default ScalesExercise;
