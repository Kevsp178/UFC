import React from 'react';
import './CreatePost.css'
import { useState, useEffect } from 'react';
import { supabase } from '../client'

const CreatePost =  () => {

    const [post, setPost] = useState({title: "", author: "", description: ""})

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
            .from('Posts')
            .insert({Name: post.Name,
                    Element: post.Element,
                    Description: post.Description,
                    Health: post.Health,
                    Strength: post.Strength,
                    Speed: post.Speed})
            .select();

        window.location = "/";
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
                <input type="submit" value="Submit" onClick={createPost} />
            </form>
        </div>
    )
}

export default CreatePost