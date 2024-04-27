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
           <img className = "Champs"
             src = "https://i.ytimg.com/vi/IJVQMYRm5jw/maxresdefault.jpg"
              alt="React Image"/>
          <br></br>
          <h5>HeavyWeight - 248lbs</h5>
          <a href='https://www.ufc.com/athlete/jon-jones' target='_blank' rel='noopener noreferrer'>
            <img className='Champs'
            src='https://dmxg5wxfqgb4u.cloudfront.net/styles/inline/s3/2023-03/JONES_JON_BELT_03_04.png?itok=V2RTFJtr'
            alt='React image'/>
          </a>
          <h6>John "Bones" Jones - 
          27(W)-1(L)-0(D)</h6>
          <br></br>
          

          <h5>Light HeavyWeight - 205lbs</h5>
          <a href='https://www.ufc.com/athlete/alex-pereira' target='_blank' rel='noopener noreferrer'>
            <img className='Champs'
            src='https://dmxg5wxfqgb4u.cloudfront.net/styles/inline/s3/2024-04/PEREIRA_ALEX_BELT_04-13.png?itok=JE3paFtt'
            alt='React image'/>
          </a>
          <h6>Alex "Poatan" Pereira - 
            10(W)-2(L)-0(D)</h6>
            <br></br>

          <h5>MiddleWeight - 185lbs</h5>
          <a href='https://www.ufc.com/athlete/dricus-du-plessis' target='_blank' rel='noopener noreferrer'>
          <img className='Champs'
          src='https://dmxg5wxfqgb4u.cloudfront.net/styles/inline/s3/2024-01/DU_PLESSUS_DRICUS_BELTMOCK.png?itok=jNmYbV1P'
          alt='React image'/>
          </a>
          <h6>Dricus Du Plessis - 
            21(W)-2(L)-0(D)</h6>
            <br></br>

          <h5>WalterWeight - 170lbs</h5>
          <a href='https://www.ufc.com/athlete/leon-edwards' target='_blank' rel='noopener noreferrer'>
          <img className='Champs'
          src='https://dmxg5wxfqgb4u.cloudfront.net/styles/inline/s3/2023-12/EDWARDS_LEON_BELT_12-16.png?itok=Mjf-WFCU'
          alt='React image'/>
          </a>
          <h6>Leon "Rocky" Edwards - 
            22(W)-3(L)-0(D)</h6>
            <br></br>
          
          <h5>LightWeight - 155lbs</h5>
          <a href='https://www.ufc.com/athlete/islam-makhachev' target='_blank' rel='noopener noreferrer'>
          <img className='Champs'
          src='https://dmxg5wxfqgb4u.cloudfront.net/styles/inline/s3/2023-10/MAKHACHEV_ISLAM_BELT_10-21.png?itok=dwmcXGem'
          alt='React image'/>
          </a>
          <h6>Islam Makhachev - 
            25(W)-1(L)-0(D)</h6>
            <br></br>
          
          <h5>FeatherWeight - 145lbs</h5>
          <a href='https://www.ufc.com/athlete/ilia-topuria' target='_blank' rel='noopener noreferrer'>
          <img className='Champs'
          src='https://dmxg5wxfqgb4u.cloudfront.net/styles/inline/s3/2024-02/TOPURIA_ILIA_BELT-298.png?itok=kOCEmQbE'
          alt='React image'/>
          </a>
          <h6>Ilia "El Matador" Topuria - 
            15(W)-0(L)-0(D)</h6>
            <br></br>
          
          <h5>BantamWeight - 135lbs</h5>
          <a href='https://www.ufc.com/athlete/sean-omalley' target='_blank' rel='noopener noreferrer'>
          <img className='Champs'
          src='https://dmxg5wxfqgb4u.cloudfront.net/styles/inline/s3/2024-03/OMALLEY_SEAN_BELT_03-09.png?itok=axsxpavs'
          alt='React image'/>
          </a>
          <h6>"Sugar" Sean O'malley - 
            18(W)-1(L)-0(D)</h6>
            <br></br>

          <h5>FlyWeight - 125lbs</h5>
          <a href='https://www.ufc.com/athlete/alexandre-pantoja' target='_blank' rel='noopener noreferrer'>
          <img className='Champs'
          src='https://dmxg5wxfqgb4u.cloudfront.net/styles/inline/s3/2023-12/PANTOJA_ALEXANDRE_12-16.png?itok=IKM2yDRZ'
          alt='React image'/>
          </a>
          <h6>Alexandre "El Cannibal" Pantoja - 
            27(W)-5(L)-0(D)</h6>
            <br></br>

          <h5>Women's BantamWeight - 135lbs</h5>
          <a href='https://www.ufc.com/athlete/raquel-pennington' target='_blank' rel='noopener noreferrer'>
          <img className='Champs'
          src='https://dmxg5wxfqgb4u.cloudfront.net/styles/inline/s3/2024-01/PENNINGTON_RAQUEL_BELTMOCK.png?itok=WpJvlfpe'
          alt='React image'/>
          </a>
          <h6>Raquel "Rocky" Pennington- 
            16(W)-9(L)-0(D)</h6>
            <br></br>

          <h5>Women's FlyWeight - 126lbs</h5>
          <a href='https://www.ufc.com/athlete/alexa-grasso' target='_blank' rel='noopener noreferrer'>
          <img className='Champs'
          src='https://dmxg5wxfqgb4u.cloudfront.net/styles/inline/s3/2023-09/GRASSO_ALEXA_BELT_09-16.png?itok=8Y-VJ44T'
          alt='React image'/>
          </a>
          <h6>Alexa Grasso- 
            16(W)-3(L)-1(D)</h6>
            <br></br>
          

          <h5>Women's StrawWeight - 125lbs</h5>
          <a href='https://www.ufc.com/athlete/weili-zhang' target='_blank' rel='noopener noreferrer'>
          <img className='Champs'
          src='https://dmxg5wxfqgb4u.cloudfront.net/styles/inline/s3/2024-04/WEILI_ZHANG_BELT_04-13.png?itok=BbCg_WfF'
          alt='React image'/>
          </a>
          <h6>Zhang "Magnum" Weili- 
            25(W)-3(L)-0(D)</h6>
            <br></br>

          
        </div>
      

        <div className="header">
          <h1>Official UFC Forum
          </h1>
          <p>Let's Discuss the latest and greatest events of the UFC</p>
          <a href='https://www.ufc.com/' target='blank' style={{color: 'gold'}} >Visit the UFC home page</a>
          
      
          <div >
            <br></br>
            <img className = "figure"
             src = "https://i.ytimg.com/vi/IJVQMYRm5jw/maxresdefault.jpg"
              alt="React Image"/>
          </div>
          <Link to="/"><button className="headerBtn"> View Other Post  </button></Link>
          <Link to="/new"><button className="headerBtn"> Create a Post </button></Link>

          {element}
        </div>
      
        
     
        
      </div>

      
    </div>

  );
}

export default App;
