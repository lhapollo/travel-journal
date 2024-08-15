import React from 'react';
import './App.css';
import Header from './Header.jsx'
import Location from './Location.jsx'
import Data from './data.js'

function App() {
  const mappedData = Data.map(spot => {
    return (
      <div className="location--container">
        <Location {...spot}/>
        <hr/>
      </div>
    )
  })

  return (
    <div className="app">
      <Header/>
      {mappedData}
    </div>
  )
}

export default App;
