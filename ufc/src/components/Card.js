import React, { useEffect } from 'react'
import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'
import { supabase } from '../client'



const Card = (props) =>  {

  const [count, setCount] = useState(0)
  const [randomImage, setRandomImage] = useState('');

  useEffect(() => {
    const getCount = async () => {
  const { data, error } = await supabase
    .from('Posts')
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
    .from('Posts')
    .update({ betCount: count + 1})
    .eq('id', props.id)

  setCount((count) => count + 1);
}

  return (
      <div className="Card">
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <img className = "figure"
            src = "https://tse2.mm.bing.net/th?id=OIP.18svcq71ttMpnvFING4HmgHaHQ&pid=Api&P=0&h=180"
            alt="React Image"/>
          <h2 className="title">Name: {props.Name}</h2>
          <h3 className="author">Element: {props.Element}</h3>
          <h3 className="author"> Health: {props.Health}</h3>
          <h3 className="author">Strength: {props.Strength}</h3>
          <h3 className="author">Speed: {props.Speed}</h3>
          <p className="description">Description: {props.Description}</p>
          
      </div>
  );
};

export default Card;