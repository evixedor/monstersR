import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

// CLASS COMPONENT
class App extends Component {
	// this constructor method allows for the tracking of what is called a local state
	constructor() {
		super();

		this.state = {
			monsters: [],
		};
    console.log('constructor1'); // the order in which these class methods are ran
	}

  // lifecycle method with promises 
  componentDidMount() {
    console.log('componentDidMount3');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => 
      this.setState(
        () => {
          return { monsters: users };
        },
        () => {
          console.log(this.state);
        }
      )
    );
  }

	render() {
    console.log('render2');
		return (
			<div className="App">
        <input className='search-box' type='search' placeholder='search monsters' />
				{
					this.state.monsters.map((monster) => {
						return (
							<div key={monster.id}>
								<h1>{monster.name}</h1>
							</div>
						);
					}) // monster is the actual element of the array that the callback function of the map method receives as its first argument
				}
			</div>
		);
	}
}

export default App;
