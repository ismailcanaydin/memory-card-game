import './App.css';
import React from 'react';
import logo from './pictures/question.png';
import { country } from './country';

function App() {
  console.log(country.name);

  return (
    <div className='wrapper'>
      <ul className='cards'>
        <li className='card'>
          <div className='view front-view'>
            <span className='material-icons' >
              <img src={logo} />
            </span>
          </div>
          <div className='back-view'>
            <img src={'./pictures/argentina.png'} alt='card-image' />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
