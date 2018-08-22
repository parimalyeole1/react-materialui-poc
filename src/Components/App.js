import React, { Component, Fragment } from 'react'
import { Header, Footer } from './Layouts'
import Exercises from './Exercises'
import { muscles, exercises } from './../store'

//Note: somethisn
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

  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises, exercise]
    }))
  }

  render() {
    const exercises = this.getExercisesByMuscles(),
      { category, exercise } = this.state;
    return (
      <Fragment>
        <Header
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
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
