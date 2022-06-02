import { Component } from "react";
import './profile.styles.css'

class Profile extends Component {
	render() {
    const { name, email, id } = this.props.monster;
		return (
      <div className="profile-container" key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set3&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
	}
}

export default Profile;
