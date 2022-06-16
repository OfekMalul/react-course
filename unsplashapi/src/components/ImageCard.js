import React, { createRef } from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = createRef();
  }
  setSpans = () => {
    const height = this.imageRef.current.height;
    const span = Math.ceil(height / 10 + 1);
    this.setState({ spans: span });
  };

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  render() {
    const { urls, description } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
