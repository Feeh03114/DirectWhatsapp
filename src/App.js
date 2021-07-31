import './App.css';
import React from 'react'
import DirectWhats from './Components/direct'

export function App() {
  
  
  return (<div className='App-header'>
      <div className='title'> 
        <div>
          <img className='logo' src='./imgs/ico.png' alt="" />
        </div>
        <div>
        <h1>Direct Whatsapp</h1>
        </div>
      </div>
          <DirectWhats className='dados'/>
      <div className='rodape'>

      </div>   
  </div>);
} 
