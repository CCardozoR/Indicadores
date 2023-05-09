import React from 'react';
import './App.scss';
import { IIndicador } from './modelos/IIndicador';
import Indicador from './componentes/Indicador';
import { IMacroproceso } from './modelos/IMacroproceso';
import { perspectivas } from './data/Perspectivas';
import Perspectiva from './componentes/Perspectivas';

function App() {
  
  return (
    <div className='app'>
      <table>
        {perspectivas.map(perspectiva =>{
          return <Perspectiva {...perspectiva}></Perspectiva>
        })}
      </table>
    </div>
  );
}

export default App;
