import React, { Component, Fragment } from 'react'
import { Header, Footer } from './Layouts'
import Exercises from './Exercises'
import { muscles, exercises } from './../store'

class App extends Component {
  state = {
    exercises,
    category: null,
    exercise: {}
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

  handleCategorySelection = (category) => {
    this.setState({
      category
    })
  }

  handleExerciseSelection = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(x => x.id === id)
    }))
  }

  render() {
    const exercises = this.getExercisesByMuscles(),
      { category, exercise } = this.state;
    return (
      <Fragment>
        <Header />
        <Exercises
          exercise={exercise}
          exercises={exercises}
          category={category}
          onSelect={this.handleExerciseSelection}
        />
        <Footer
          muscles={muscles}
          category={category}
          onSelect={this.handleCategorySelection}
        />
      </Fragment>
    );
  }
}
export default App;
