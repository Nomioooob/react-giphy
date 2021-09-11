import React, { Component } from 'react';
import Gif from './gif';

// eslint-disable-next-line react/prefer-stateless-function
class GifList extends Component {
  render() {
    const { ids, changeSelectedGif } = this.props;
    return (
      <div className="gif-list">
        {ids.map((id) => <Gif id={id} key={id} changeSelectedGif={changeSelectedGif} />)}
      </div>
    );
  }
}

export default GifList;
