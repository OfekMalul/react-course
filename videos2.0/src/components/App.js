import React from "react";
import SearchBar from "./SearchBar";
import YoutubeApi from "../API/YoutubeApi";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";
import "../styles/App.css";

class App extends React.Component {
  //holding the states of the videos and the video that the user selects
  state = {
    videos: [],
    chosenVideo: null,
  };
  //just so it will have some content before the user search for a video
  componentDidMount() {
    this.runOnSubmit("halo");
  }
  //there is the use of async await as we need to wait for data to be fetched from youtube API
  //we set the search term for videos and selecting automatically a video by setting the first index to the chosen video.
  runOnSubmit = async (term) => {
    const response = await YoutubeApi.get("/search", {
      params: { q: term },
    });
    this.setState({
      videos: response.data.items,
      chosenVideo: response.data.items[0],
    });
  };
  //passing this function to video VideoItem component
  chosenVideo = (video) => {
    this.setState({ chosenVideo: video });
  };
  render() {
    return (
      <div>
        <SearchBar runOnSubmit={this.runOnSubmit} />
        <div className="flex__container container">
          <div className="col video__details__container">
            <VideoDetails video={this.state.chosenVideo} />
          </div>
          <div className="col video__list__container">
            <VideoList
              videos={this.state.videos}
              chosenVideo={this.chosenVideo}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
