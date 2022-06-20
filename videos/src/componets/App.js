import React from "react";
import SearchBar from "./SearchBar";
import YoutubePubApi from "../api/YoutubePubApi";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

//two states, one to hold the vidoes we getting from the youtube API
//the other to hold the clicked video
class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.onTermSubmit("news");
  }

  //using async await to get the data from Youtube api!
  onTermSubmit = async (term) => {
    const response = await YoutubePubApi.get("/search/", {
      params: { q: term },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  //getting the video from the videodetail component
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "2rem" }}>
        <SearchBar runOnSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="six wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
