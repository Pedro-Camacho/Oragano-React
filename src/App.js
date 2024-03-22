import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Happy from './componentes/Happy';
import Time from './componentes/Time'

function App() {
  const [colaborador,setColaborador]=useState([]);
  const aoColaboradorCadastro=(colaborador)=>{
    console.log(colaborador)
  }
  return (
    <div className="App">
      <Banner/> 
      <Formulario aoColaboradorCadastro={colaborador=>aoColaboradorCadastro(colaborador)}/>                       
      <Time nome="Programação"/>
      <Happy/>      
    </div>
  );
}

export default App;
