import { Component } from "react";
import Profile from "../profile/profile.component";
import './profile-list.styles.css';

class ProfileList extends Component {
	render() {
		const { monsters } = this.props; // ACCESSING THE PROPS... this references the actual class component. // curly braces indicates access to HTML properties

		return (
			<div className="profile-list">
				{monsters.map((monster) => {
					return (
						<Profile monster={monster} /> // monster={monster} - setting up a prop 
					);
				})}
			</div>
		);
	}
}

export default ProfileList; // allows for access to this component from other files
