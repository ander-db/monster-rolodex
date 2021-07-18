import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

// Mis componentes
import { CardList } from "./components/card-list/card-list.component"
import { SearchBox } from "./components/search-box/search-box.component"

class App extends Component {
  constructor() {
    super();


    this.state = {
      monsters: [],
      searchField: ''
    };
  }


  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }


  render() {
    const { monsters, searchField } = this.state;
    const filterMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="Busca monstruos"
          handleChange={e => { this.setState({ searchField: e.target.value }) }}
        />
        <CardList monsters={filterMonster} />
      </div>
    )
  }
}

export default App;
