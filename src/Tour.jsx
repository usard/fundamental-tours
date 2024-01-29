import React, { useState } from 'react'

const Tour = ({tour, removeTour}) => {
  const {id, name ,image, info, price}= tour;
  const [readMore , setReadMore] = useState(false);
  return (
    <article className='single-tour'>
      <img className='img' src={image} alt="alt_image" />
      <p className='tour-price'>{price}</p>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>{readMore ? info : `${info.substring(0,200)}... `}<button className='info-btn' onClick={()=>setReadMore(!readMore)}>{readMore ? ' showless': ' read more'}</button></p>
        <button  className='btn btn-block delete-btn' onClick={()=> removeTour(id)}>Not interested</button>
      </div>
    </article>
  )
}

export default Tour;