import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
	const [ locat, setLocation ] = useState( { lat: 0, lon: 0 } )
	// const [ temp, setTemp ] = useState( 0 )
	// const [ tempData, setTempData ] = useState( {} )
	useEffect( () => {
		let coords = {
			lat: 32,
			lon: 32,
		}
		const apikey = 'e47e36991466f72a561276756b62bfea'
		const getPos = () => {
			return new Promise( resolve => {
				const newPoss = ( pos ) => {
					resolve( coords = {
						lat: pos.coords.latitude,
						lon: pos.coords.longitude
					 } )
				}
				navigator.geolocation.getCurrentPosition( newPoss )
			})
		}

		getPos()
			.then( res => setLocation( res ) )
		    
	}, [] )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
	  <p>
	  lat: {locat.lat} <br />
	  lon: {locat.lon}
	  </p>
	 </header>
    </div>
  );
}

export default App;
