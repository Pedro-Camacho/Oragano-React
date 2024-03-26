//imports para cada componente e hooks do react
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Happy from './componentes/Happy';
import Time from './componentes/Time'


function App() {
 //Lista de times
  const times=[
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data-Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'ux e design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
    },
    {
      nome: 'mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'inovação e gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }
  ]
  /*primeiro uso de hooks no projeto
  neste primeiro caso estamos aguardando o submit de um formulario e guardando as informação no colaborador
  */
 
  
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorCadastro=(colaborador)=>{
    console.log(colaborador)
    setColaboradores([...colaboradores,colaborador])
  }

  return (
  
    <div className="App">
      <Banner/>   
      <Formulario  times={times.map(time=>time.nome)} aoColaboradorCadastro={colaborador=>aoNovoColaboradorCadastro(colaborador)}/>                       
      {/*para cada time no nosso componente time cria um componete Time e o coloca o nome */}      
      {times.map(time=> <Time 
                          key={time.nome} 
                          nome={time.nome} 

                          corPrimaria={time.corPrimaria} 
                          corSecundaria={time.corSecundaria}
                          colaboradores={colaboradores.filter(colaborador=>colaborador.time === time.nome)}
      />)}
      
      <Happy/>      
    </div>
  );
}

export default App;
