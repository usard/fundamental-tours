import {useState, useEffect } from 'react';
import axios from 'axios';
import ToursContainer from './ToursContainer'
const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const getTours = async() => {
    setLoading(true);
    try {
      const response = await axios(url);
      const data = await response.data; // await response.json() if we use fetch method instead of axios
      console.log('response :', data)
      setLoading(false);
      setTours(data);
      return data;
    }
    catch(error) {
      setLoading(false);
      console.log('error while fetching :', error);
    }
  }
  useEffect(()=> {
   getTours();
  },[])
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);
  console.log('render', tours);
  const removeTour = (id) => {
   const newTours = tours.filter(tour => tour.id !== id);
   setTours(newTours);
  }
  if(loading) {
    return <main>
      <div>Loading...</div>
    </main>
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => getTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return <main>
    <ToursContainer tours={tours} removeTour={removeTour}/>
  </main>
};
export default App;
