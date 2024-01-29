import React from 'react';
import Tour from './Tour';

const ToursContainer = ({tours, removeTour}) => {
    console.log('tours in container :', tours);
  return (
    <div>
        <h3>Our Tours</h3>
        <section className='tours'>
            {
                tours?.map((tour, index)=> {
                    return <Tour key ={index} tour={tour} removeTour={removeTour}></Tour>
                })
            }
        </section>

    </div>
  )
}

export default ToursContainer