import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client'

const ReadPosts = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await supabase
                .from('Forum')
                .select();

            // set state of posts
            setPosts(data)
        }

        setPosts(props.data);
        fetchPosts();
    }, [props]);
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card id={post.id} Name={post.Name} Description={post.Description} Date={post.Date} Comment={post.comment} Title={post.Title}/>
                ) : <h2>{}</h2>
            }
        </div>  
    )
}

export default ReadPosts;