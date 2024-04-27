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
            .from('Posts')
            .update({Name: post.Name,
                    Element: post.Element,
                    Description: post.Description,
                    Health: post.Health,
                    Strength: post.Strength,
                    Speed: post.Speed})
            .eq('id', id);

         window.location = "/";
    }

    const deletePost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Posts')
            .delete()
            .eq('id', id); 

        window.location = "http://localhost:3000/";
    }

    return (
        <div>
            <form>
               <label for="Name">Name</label> <br />
                <input type="text" id="Name" name="Name" onChange={handleChange} /><br />
                <br/>

                <label for="Element">Element</label><br />
                <input type="text" id="Element" name="Element" onChange={handleChange} /><br />
                <br/>

                <label for="Health">Health</label><br />
                <input type="int" id="Health" name="Health" onChange={handleChange} /><br />
                <br/>

                <label for="Strength">Strength</label><br />
                <input type="int" id="Strength" name="Strength" onChange={handleChange} /><br />
                <br/>

                <label for="Speed">Speed</label><br />
                <input type="int" id="Speed" name="Speed" onChange={handleChange} /><br />
                <br/>
                
                <label for="Description">Description</label><br />
                <textarea rows="5" cols="50" id="Description" name = "Description" onChange={handleChange}>
                </textarea>
                <br/>
                <input type="submit" value="Submit" onClick={updatePost}/>
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost