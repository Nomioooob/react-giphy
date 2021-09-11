import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
  handleClick = () => {
    const { id, changeSelectedGif } = this.props;
    changeSelectedGif(id);
  };

  render() {
    const { id } = this.props;
    const url = `https://media.giphy.com/media/${id}/giphy.gif`;
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <img src={url} alt="gif" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
