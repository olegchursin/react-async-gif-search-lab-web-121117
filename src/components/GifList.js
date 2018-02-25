import React from 'react';

const GifList = ({gifs}) => {
  console.log("from GifList", gifs) // works

  const gifArr = gifs.map(gif => <div key={gif.id}><img src={gif.images.fixed_height.url} alt={gif.slug}/></div>)

  return (
    <div>
      {gifArr.slice(22)}
    </div>
  )
}

export default GifList;
