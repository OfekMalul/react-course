import React from "react";
import ReactDOM from "react-dom";
import SeasonsDisplay from "./SeasonsDisplay";
import Spinner from "./Spinner";
// const App = () => {
//   return <div>latittude:</div>;
// };

class App extends React.Component {
  //this function will automatically called every time we call the app fucntion
  // constructor(props) {
  //   super(props);
  //   //This is the only time we directly assign to this.state
  //   this.state = {
  //     lat: null,
  //     errorMessage: "",
  //   };
  // }
  state = { lat: null, errorMessage: "", userDate: "" };
  //will be called only once!
  componentDidMount() {
    const date = new Date();
    const month = date.getMonth() + 1;
    this.setState({ userDate: month });
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //we called setState to set the state!
        this.setState({ lat: position.coords.latitude });
      },
      (error) => this.setState({ errorMessage: `User Denied Geolocation` })
    );
  }

  //Helper function
  renderContect() {
    if (this.state.lat) {
      return (
        <SeasonsDisplay latitude={this.state.lat} month={this.state.userDate} />
      );
    } else if (this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    return <Spinner message="Please allow and be that cool person 😎" />;
  }

  //We have to define render!!
  render() {
    return <div className="border red">{this.renderContect()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
