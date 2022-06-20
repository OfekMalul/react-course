import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };
  formOnSubmit = (e) => {
    e.preventDefault();
    //passing the information to App component
    this.props.runOnSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.formOnSubmit} className="ui form">
          <label
            className="ui red tag label"
            style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}
          >
            Search for videos
          </label>
          <input
            type="text"
            value={this.state.term}
            onChange={(e) => {
              this.setState({ term: e.target.value });
            }}
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;
