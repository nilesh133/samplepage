import React from 'react'
import Topleft from './components/Topleft';
import Topright from './components/Topright';
import Center from './components/Center';
import Bottomleft from './components/Bottomleft';
import Bottomright from './components/Bottomright';
import ContextProvider from './context/ContextProvider';
import "./App.css"
const App = () => {
  return (
    <ContextProvider>
      <div className='App'>
        <div className='top'>
          <Topleft />
          <Topright />
        </div>
        <div className='center'>
        <Center />
        </div>
       
        <div className='bottom'>
          <Bottomleft />
          <Bottomright />
        </div>
      </div>
    </ContextProvider>
  )
}

export default App