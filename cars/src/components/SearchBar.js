import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.runOnSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label
              style={{
                fontSize: "1.5rem",
                display: "block",
                marginBottom: "0.5rem",
                textAlign: "center",
              }}
            >
              Search for images!
            </label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: `${e.target.value}` })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
