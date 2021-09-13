
import './App.css';
import React from 'react'
import NavBar from './component/nav/navbar.js';
import Banner from './component/banner/banner';
import Rowpost from './component/rowpost/rowpost';
import {orginals, action, ComedyMovies, HorrorMovies, RomanceMovies, Documentaries } from './component/url'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Rowpost url={orginals} title="Netflix Orginals"/>
      <Rowpost url={action}title="Action" isSmall/>
      <Rowpost url={ComedyMovies}title="ComedyMovies" isSmall/>
      <Rowpost url={HorrorMovies}title="HorrorMovies" isSmall/>
      <Rowpost url={RomanceMovies}title="RomanceMovies" isSmall/>
      <Rowpost url={Documentaries}title="Documentaries" isSmall/>
      

    </div>
  );
}

export default App;
