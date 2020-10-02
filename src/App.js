import React from 'react';
import './App.css';
import hello from './image/hello.png';

const firstName = prompt("type your first name");

function App() {
  return (
    <div className="App">
      <div  className='flexione'style = {{
        border: '1px solid black',
        maxWidth: '100vw'
      }}>
        
<h1 className='titlered'>
Hello {firstName || "Anonymous"} 
</h1>
<br></br>
<img className='hello' src={hello} alt='hello'/>
<br></br>
<img  className='welcom' src="/image/imageInPublic.png" alt="myimage" />
      </div>
 <div className="video">
    <video src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4" width="320" height="240" controls="controls" /> 
    </div>
    <div className="card">
  <h5 className="card-header">happy watching</h5>
  
</div>

    </div>
  );
}

export default App;
