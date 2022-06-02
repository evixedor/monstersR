import { Component } from "react";

import SearchBox from "./components/search-box/search-box.component";
import ProfileList from "./components/profile-list/profile-list.component";
import "./App.css";

// CLASS COMPONENT
class App extends Component {
	// this constructor method allows for the tracking of what is called a local state
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: "",
		};
		console.log("constructor1"); // the order in which class methods are ran
	}

	// lifecycle method with promises
	componentDidMount() {
		console.log("componentDidMount3");
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
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

	// anonymous function
	handleChange = (event) => {
		console.log(event.target.value);
		const searchField = event.target.value.toLocaleLowerCase();
		this.setState(
			() => {
				return { searchField };
			},
			() => {
				console.log(this.state);
			}
		);
	};

	render() {
		console.log("render2");

		// destructuring and pulling props off this, this.state and casting them to variables in order to shorten our variable name by initializing a constant
		const { monsters, searchField } = this.state;
		const { handleChange } = this;

		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});

		return (
			<div className="App">
				<h1 className='app-title'>Monsters Rolodex</h1>
				<SearchBox
					className="monsters-search-box"
					changeHandler={handleChange}
					placeholder="search monsters"
				/>
				<ProfileList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
