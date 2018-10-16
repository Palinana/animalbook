import axios from "axios";
import React, { Component } from "react";
import AllAnimals from "./AllAnimals";
import SingleAnimal from "./SingleAnimal";

class App extends Component {
  constructor() {
    super();
    this.state = {
      animals: [],
      selectedAnimal: {}
    };
    this.pickAnimal = this.pickAnimal.bind(this);
    this.listAll = this.listAll.bind(this);
  }

  async componentDidMount() {
    const { data } = await axios.get("/api/animals");
    this.setState({
      animals: data
    });
  }

  pickAnimal(animalId) {
    return async () => {
      const { data } = await axios.get(`/api/animals/${animalId}`);
      this.setState({
        selectedAnimal: data
      });
    };
  }

  listAll() {
    this.setState({
      selectedAnimal: {}
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="App__main-title">AnimalBook</h1>
        <div className="App__container">
          {this.state.selectedAnimal.id ? (
            <SingleAnimal animal={this.state.selectedAnimal} listAll={this.listAll} />
          ) : (
            <AllAnimals animals={this.state.animals} pickAnimal={this.pickAnimal} />
          )}
        </div>
      </div>
    );
  }
}

export default App;