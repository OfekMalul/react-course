import React from "react";
import "../styles/SearchBar.css";

class SearchBar extends React.Component {
  state = {
    term: "",
  };
  //passing the term to runOnSubmit that it is in App component.
  formOnSubmit = (e) => {
    e.preventDefault();
    this.props.runOnSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search__bar container">
        <form onSubmit={this.formOnSubmit}>
          <div>
            <label className="search__bar__label">search for videos !</label>
          </div>
          <input
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
            className="search__bar__input"
            type="text"
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;
