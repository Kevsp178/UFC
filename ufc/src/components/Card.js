import React, { useEffect } from 'react'
import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'
import { supabase } from '../client'



const Card = (props) =>  {

  const [count, setCount] = useState(0)
  const [randomImage, setRandomImage] = useState('');
   const dateObject = new Date(props.Date);
  // Extract the date in the format YYYY-MM-DD
  const formattedDate = dateObject.toISOString().split('T')[0];

  useEffect(() => {
    const getCount = async () => {
  const { data, error } = await supabase
    .from('Forum')
    .select('betCount')
    .eq('id', props.id);

  if (error) {
    console.error('Error fetching bet count:', error.message);
    return;
  }

  if (data && data.length > 0) {
    setCount(data[0].betCount);
  } else {
    console.error('No data found for the specified ID');
  }
};

    getCount();
    

  }, [props]);
  

  const updateCount = async (event) => {
  event.preventDefault();

  await supabase
    .from('Forum')
    .update({ betCount: count + 1})
    .eq('id', props.id)

  setCount((count) => count + 1);
}

  return (
      <div className="Card">
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <h2 className="title">Created By: {props.Name}</h2>
          <p className="description">Description: {props.Description}</p>
          <h3 className="description">Created on: {formattedDate}</h3>
          

          <button className="betButton" onClick={updateCount} style={{marginRight:"1px"}}>👍 Like Post {count}</button>
          
      </div>
  );
};

export default Card;