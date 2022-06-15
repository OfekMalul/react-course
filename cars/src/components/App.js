import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: [],
  };
  //gets the images from unspalsh API
  //we need to use async await as it takes time to get the data from the api call
  onSearchSubmit = async (term) => {
    //when we use axios it gets two arguments, url and config.
    const response = await unsplash.get("/search/photos/", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "2rem" }}>
        <SearchBar runOnSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
