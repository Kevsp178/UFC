import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ReadPosts from './pages/ReadPost';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';


const App = () => {
  
  const descr = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

  const posts = [
      {'id':'1', 
      'Name': 'da creator',
      'Element': 'Fire',
      'Strength': '10',
      'Speed': '10',
      'Health': '10', 
      'Description': descr},
      {'id':'2', 
      'Name': 'da element',
      'Element': 'Water',
      'Strength': '5',
      'Speed': '10',
      'Health': '8', 
      'Description': descr},
      {'id':'3', 
      'Name': 'da creator',
      'Element': 'Fire',
      'Strength': '10',
      'Speed': '10',
      'Health': '10', 
      'Description': descr},
      {'id':'4', 
      'Name': 'da creator',
      'Element': 'Fire',
      'Strength': '10',
      'Speed': '10',
      'Health': '10', 
      'Description': descr},
  ]
 

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadPosts data={posts}/>
    },
    {
      path:"/edit/:id",
      element: <EditPost data={posts} />
    },
    {
      path:"/new",
      element: <CreatePost />
    }
  ]);

  return ( 

    <div className="App">
      

        <div className="header">
          <h1>Create your meta Squad!</h1>
        
          <Link to="/"><button className="headerBtn"> Explore your knights  </button></Link>
          <Link to="/new"><button className="headerBtn"> add your knights </button></Link>

          <div >
            <img className = "figure"
             src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/17d847e9-6099-49ec-9029-b88eefdcb494/daxul94-e0e1c17c-23cb-4483-8839-36f845db491e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE3ZDg0N2U5LTYwOTktNDllYy05MDI5LWI4OGVlZmRjYjQ5NFwvZGF4dWw5NC1lMGUxYzE3Yy0yM2NiLTQ0ODMtODgzOS0zNmY4NDVkYjQ5MWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HMuxLNXQPRATtwjjGqa2KDe_jM3etwjmlXR1Yt5VlOw"
              alt="React Image"/>
          </div>
        </div>
      
        {element}
     
        
    </div>

  );
}

export default App;
