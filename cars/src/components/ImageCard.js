import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imgRef = React.createRef();
  }

  setSpans = () => {
    const height = this.imgRef.current.clientHeight;
    //the 150 comes from the height alocated in the grid, which is 150px.
    const span = Math.ceil(height / 10 + 1);
    this.setState({ spans: span });
  };

  //It takes time to load the images, hence we need to wait for the load.
  //when the load is done we are calling set spans
  componentDidMount() {
    this.imgRef.current.addEventListener("load", this.setSpans);
  }

  // reuturns the image with the set spans height to ImageList so it will be renderd as part of the grid!
  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imgRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}
export default ImageCard;
