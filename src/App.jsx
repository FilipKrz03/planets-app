import './Globals.scss';
import Header from './Components/Header/Header';
import PlanetContent from './Components/PlanetContent/PlanetContent';
import { useState } from 'react';


function App() {

  const [activePlanet , setAtivePlanet] = useState('Mercury');

  const changePlanetHandler = (id) => {
    setAtivePlanet(id);
  }

  const planetChangerHandler = () => {

  }


  return (
  <div className="app">
    <Header onChangePlanet = {changePlanetHandler} />
    <PlanetContent planetToDisplay = {activePlanet} planetChanger = {planetChangerHandler} />
  </div>
  );
}

export default App;
