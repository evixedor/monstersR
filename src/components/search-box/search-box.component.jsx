import React from "react";
import { Component } from "react";
import './search-box.styles.css';

// export const SearchBox = ({ placeholder, changeHandler }) => (
//   <input
//       className='search'
//       type='search'
//       placeholder={placeholder}
//       onChange={changeHandler} // this updates the state of searchField but also by doing it this way, we make onChange generic
//   />);

class SearchBox extends Component {
	render() {
		return (
			<input
				className={`search-box ${this.props.className}`}
				type='search'
				placeholder={this.props.placeholder}
				onChange={this.props.changeHandler}
			/>
		);
	}
}
export default SearchBox;
