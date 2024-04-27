import React from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'
import { useState, useEffect } from 'react';
import { supabase } from '../client'

const EditPost = ({data}) => {

    const {id} = useParams();
    const [post, setPost] = useState({id: null, title: "", author: "", description: ""});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const updatePost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Forum')
            .update({Name: post.Name,
                    Date: post.Date,
                    Description: post.Description})
            .eq('id', id);

         window.location = "/";
    }

    const deletePost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Forum')
            .delete()
            .eq('id', id); 

        window.location = "http://localhost:3000/";
    }

    return (
        <div>
            <form>
               
                <input placeholder='Username' type="text" id="Name" name="Name" onChange={handleChange} /><br />
                <br/>
                
                <textarea placeholder='Drop Knowledge' rows="5" cols="50" id="Description" name = "Description" onChange={handleChange}>
                </textarea>
                <br/>
                <input type="submit" value="Submit" onClick={updatePost}/>
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost