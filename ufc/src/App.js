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

      <div className='side-by-side'>

        <div className='Champions '>
          <h4>Champions</h4>
          <br></br>
          <h5>HeavyWeight - 248lbs</h5>
          <img className='Champs'
          src='https://dmxg5wxfqgb4u.cloudfront.net/styles/inline/s3/2023-03/JONES_JON_BELT_03_04.png?itok=V2RTFJtr'
          alt='React image'/>
          <h6>John "Bones" Jones - 
          27(W)-1(L)-0(D)</h6>
          <br></br>
          

          <h5>Light HeavyWeight - 205lbs</h5>
          <img className='Champs'
          src='https://dmxg5wxfqgb4u.cloudfront.net/styles/inline/s3/2024-04/PEREIRA_ALEX_BELT_04-13.png?itok=JE3paFtt'
          alt='React image'/>
          <h6>Alex "Poatan" Pereira - 
            10(W)-2(L)-0(D)</h6>
            <br></br>

          <h5>MiddleWeight - 185lbs</h5>
          <img className='Champs'
          src='https://dmxg5wxfqgb4u.cloudfront.net/styles/inline/s3/2024-01/DU_PLESSUS_DRICUS_BELTMOCK.png?itok=jNmYbV1P'
          alt='React image'/>
          <h6>Dricus Du Plessis - 
            21(W)-2(L)-0(D)</h6>
            <br></br>

          <h5>WalterWeight - 170lbs</h5>
          <img className='Champs'
          src='https://dmxg5wxfqgb4u.cloudfront.net/styles/inline/s3/2023-12/EDWARDS_LEON_BELT_12-16.png?itok=Mjf-WFCU'
          alt='React image'/>
          <h6>Leon "Rocky" Edwards - 
            22(W)-3(L)-0(D)</h6>
            <br></br>
          
          <h5>LightWeight - 155lbs</h5>
          <img className='Champs'
          src='https://dmxg5wxfqgb4u.cloudfront.net/styles/inline/s3/2023-10/MAKHACHEV_ISLAM_BELT_10-21.png?itok=dwmcXGem'
          alt='React image'/>
          <h6>Islam Makhachev - 
            25(W)-1(L)-0(D)</h6>
            <br></br>
          
          <h5>FeatherWeight - 145lbs</h5>
          <img className='Champs'
          src='https://dmxg5wxfqgb4u.cloudfront.net/styles/inline/s3/2024-02/TOPURIA_ILIA_BELT-298.png?itok=kOCEmQbE'
          alt='React image'/>
          <h6>Ilia "El Matador" Topuria - 
            15(W)-0(L)-0(D)</h6>
            <br></br>
          
          <h5>BantamWeight - 135lbs</h5>
          <img className='Champs'
          src='https://dmxg5wxfqgb4u.cloudfront.net/styles/inline/s3/2024-03/OMALLEY_SEAN_BELT_03-09.png?itok=axsxpavs'
          alt='React image'/>
          <h6>"Sugar" Sean O'malley - 
            18(W)-1(L)-0(D)</h6>
            <br></br>

           <h5>FlyWeight - 125lbs</h5>
          <img className='Champs'
          src='https://dmxg5wxfqgb4u.cloudfront.net/styles/inline/s3/2023-12/PANTOJA_ALEXANDRE_12-16.png?itok=IKM2yDRZ'
          alt='React image'/>
          <h6>Alexandre "El Cannibal" Pantoja - 
            27(W)-5(L)-0(D)</h6>
            <br></br>

            <h5>Women's BantamWeight - 135lbs</h5>
          <img className='Champs'
          src='https://dmxg5wxfqgb4u.cloudfront.net/styles/inline/s3/2024-01/PENNINGTON_RAQUEL_BELTMOCK.png?itok=WpJvlfpe'
          alt='React image'/>
          <h6>Raquel "Rocky" Pennington- 
            16(W)-9(L)-0(D)</h6>
            <br></br>

            <h5>Women's FlyWeight - 126lbs</h5>
          <img className='Champs'
          src='https://dmxg5wxfqgb4u.cloudfront.net/styles/inline/s3/2023-09/GRASSO_ALEXA_BELT_09-16.png?itok=8Y-VJ44T'
          alt='React image'/>
          <h6>Alexa Grasso- 
            16(W)-3(L)-1(D)</h6>
            <br></br>

            <h5>Women's StrawWeight - 125lbs</h5>
          <img className='Champs'
          src='https://dmxg5wxfqgb4u.cloudfront.net/styles/inline/s3/2024-04/WEILI_ZHANG_BELT_04-13.png?itok=BbCg_WfF'
          alt='React image'/>
          <h6>Zhang "Magnum" Weili- 
            25(W)-3(L)-0(D)</h6>
            <br></br>

          
          
        </div>
      

        <div className="header">
          <h1>Welcome to the UFC 
          </h1>
        
          <Link to="/"><button className="headerBtn"> Explore your knights  </button></Link>
          <Link to="/new"><button className="headerBtn"> Create a Fourm </button></Link>

          <div >
            <img className = "figure"
             src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/17d847e9-6099-49ec-9029-b88eefdcb494/daxul94-e0e1c17c-23cb-4483-8839-36f845db491e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE3ZDg0N2U5LTYwOTktNDllYy05MDI5LWI4OGVlZmRjYjQ5NFwvZGF4dWw5NC1lMGUxYzE3Yy0yM2NiLTQ0ODMtODgzOS0zNmY4NDVkYjQ5MWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HMuxLNXQPRATtwjjGqa2KDe_jM3etwjmlXR1Yt5VlOw"
              alt="React Image"/>
          </div>
        </div>
      
        {element}
     
        
      </div>
    </div>

  );
}

export default App;
