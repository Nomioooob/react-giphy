import React, { Component } from 'react';

import SearchBar from './searchBar';
import GifList from './gifList';
import Gif from './gif';

const giphy = require('giphy-api')({
  apiKey: 'process.env.REACT_APP_GIPHY_API_KEY',
  https: true
});

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: "W0Tg8pls9xMuQ",
      ids: ["gG6OcTSRWaSis", "PnpkimJ5mrZRe", "5ntdy5Ban1dIY"]
    };
  }

  changeSelectedGif= (newId) => {
    this.setState({
      selectedId: newId
    });
  }

  changeGifIds = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        ids: res.data.map((gif) => gif.id)
      });
    });
  }

  render() {
    // const selectedId = "W0Tg8pls9xMuQ";
    // const ids = ["gG6OcTSRWaSis", "PnpkimJ5mrZRe", "5ntdy5Ban1dIY"];
    const { selectedId, ids } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar changeGifIds={this.changeGifIds} />
          <div className="selected-gif">
            <Gif id={selectedId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList ids={ids} changeSelectedGif={this.changeSelectedGif} />
        </div>
      </div>
    );
  }
}

export default App;
