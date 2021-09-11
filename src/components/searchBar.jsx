import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class SearchBar extends Component {
  handleChange = (event) => {
    const { changeGifIds } = this.props;
    changeGifIds(event.currentTarget.value);
  }

  render() {
    return (
      <input type="text" className="form-control form-search" placeholder="Search a gif" onChange={this.handleChange} />
    );
  }
}

export default SearchBar;
