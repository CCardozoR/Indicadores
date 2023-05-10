import React from 'react';
import './App.scss';
import Perspectiva from './componentes/Perspectivas';
import { useSelector } from 'react-redux';
import { IPerspectiva } from './modelos/IPerspectiva';

function App() {
  const perspectivas: IPerspectiva[] = useSelector(
    (state: any) => state.perspectivas.perspectivas,
  );
  
  return (
    <div className='app'>
      <table>
        {perspectivas.map((perspectiva, key) =>{
          return <Perspectiva {...perspectiva} key={key}></Perspectiva>
        })}
      </table>
    </div>
  );
}

export default App;
