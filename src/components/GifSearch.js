import React from 'react';

const GifSearch = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input name="searchTerm" value={props.searchTerm} type="text" placeholder="Search term" onChange={props.handleChange}/>
      <input type="submit" value="Search" />
    </form>
  )
}

export default GifSearch;
