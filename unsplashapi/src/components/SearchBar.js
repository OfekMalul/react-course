import React from "react";

class SearchBar extends React.Component {
  state = {
    fieldSearch: "",
  };

  formOnSubmit = (e) => {
    e.preventDefault();
    //the data on submit needs to call for images from the unsplash API
    this.props.runOnSubmit(this.state.fieldSearch);
  };

  inputOnChange = (e) => {
    e.preventDefault();
    this.setState({ fieldSearch: e.target.value });
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.formOnSubmit} className="ui form">
          <div className="field">
            <label
              style={{
                textAlign: "center",
                display: "block",
                fontSize: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              Search for any images
            </label>
            <input
              value={this.state.fieldSearch}
              type="text"
              onChange={this.inputOnChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
