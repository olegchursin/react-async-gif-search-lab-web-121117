import React from 'react';

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      gifArr: [],
      searchTerm: ''
    }
  }

  handleChange = (e) => {
    // console.log(e.target.value) // works
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const query = this.state.searchTerm
    // console.log(query) // works

    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`)
    .then(res => res.json())
    .then(gifs => {
      // console.log(gifs.data) // works
      this.setState({
        gifArr: gifs.data
      })
    })
  }

  render(){
    return (
      <div>
        <GifSearch searchTerm={this.state.searchTerm} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <GifList gifs={this.state.gifArr} />
      </div>
    )
  }
}

export default GifListContainer;
