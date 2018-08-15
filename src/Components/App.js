import React, { Component, Fragment } from 'react'
import { Header, Footer } from './Layouts'
import Exercises from './Exercises'
import { muscles, exercises } from './../store'


class App extends Component {
  state = {
    exercises
  }

  getExercisesByMuscles() {
    return Object.entries(this.state.exercises.reduce((acc, exe) => {
      const { muscles } = exe;
      acc[muscles] = acc[muscles]
        ? [...acc[muscles], exe]
        : [exe];
      return acc;
    }, {}))
  }

  render() {
    const exercises = this.getExercisesByMuscles()
    return (
      <Fragment>
        <Header />
        <Exercises exercises={exercises} />
        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}

export default App;
