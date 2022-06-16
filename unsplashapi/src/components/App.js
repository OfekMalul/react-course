import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "./unsplash";
import ImageDispaly from "./ImageDispaly";

class App extends React.Component {
  state = {
    images: [],
  };
  onSearchSubmit = async (fieldSearch) => {
    const response = await unsplash.get("/search/photos/", {
      params: { query: fieldSearch },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "1rem" }}>
        <SearchBar runOnSubmit={this.onSearchSubmit} />
        <ImageDispaly images={this.state.images} />
      </div>
    );
  }
}
export default App;
