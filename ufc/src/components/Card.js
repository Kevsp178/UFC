import React, { useEffect } from 'react'
import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'
import { supabase } from '../client'



const Card = (props) =>  {

  const [count, setCount] = useState(0)
   const dateObject = new Date(props.Date);
  // Extract the date in the format YYYY-MM-DD
  const formattedDate = dateObject.toISOString().split('T')[0];
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  

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
    

  // Fetch comments
    const getComments = async () => {
      const { data, error } = await supabase
        .from('Comment')
        .select()
        .eq('postId', props.id);

      if (error) {
        console.error('Error fetching comments:', error.message);
        return;
      }

      if (data) {
        setComments(data);
      }
    };

    getComments();
  }, [props.id]);
  

  const updateCount = async (event) => {
  event.preventDefault();

  await supabase
    .from('Forum')
    .update({ betCount: count + 1})
    .eq('id', props.id)

  setCount((count) => count + 1);
}

const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();

    if (comment.trim() === '') {
      return;
    }

    const { data, error } = await supabase.from('Comment').insert([{ postId: props.id, comment: comment.trim() }]);
    if (error) {
      console.error('Error adding comment:', error.message);
      return;
    }

    if (data) {
      setComments([...comments, data[0]]);
      setTimeout(() => {
         setComment('');
      }, 0);
      setComments('');
    }
  };




  return (
       <div className="Card">
      <Link to={'edit/' + props.id}>
        <img className="moreButton" alt="edit button" src={more} />
      </Link>
      <h2 className="title">Created By: {props.Name}</h2>
      <p className="description">Description: {props.Description}</p>
      <h3 className="description">Created on: {props.Date}</h3>

      <button className="betButton" onClick={updateCount} style={{ marginRight: '1px' }}>
        👍 Like Post {count}
      </button>

      <form onSubmit={handleCommentSubmit}>
        <input type="text" value={comment} onChange={handleCommentChange} placeholder="Add a comment..." />
        <button type="submit">Submit</button>
      </form>

      <div>
        <h4>Comments:</h4>
        {comments.map((commentData) => (
          <div key={commentData.id}>
            <p className='cbox'>{commentData.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;