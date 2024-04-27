import React from 'react';
import './CreatePost.css'
import { useState, useEffect } from 'react';
import { supabase } from '../client'

const CreatePost =  () => {

    const [post, setPost] = useState({Name: "", Title: "", description: ""})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createPost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Forum')
            .insert({Name: post.Name,
                    Description: post.Description,
                    Title: post.Title,
                    Date: post.Date
                    })
            .select();

        window.location = "/";
    }

    

    return (
        <div>
            <form>
                <input placeholder="UserName" type="text" id="Name" name="Name" onChange={handleChange} /><br />
                <br/>

                <input placeholder='Title of your Post' type="text" id="Title" name="Title" onChange={handleChange} /><br />
                <br/>

                <textarea placeholder='Drop knowledge' rows="5" cols="50" id="Description" name = "Description" onChange={handleChange}>
                </textarea>
                <br/>
                <input type="submit" value="Submit" onClick={createPost} />
            </form>
        </div>
    )
}

export default CreatePost