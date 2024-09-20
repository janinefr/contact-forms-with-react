
import './App.css';
import Forms from './components/Forms'
import {useState} from 'react'

function App() {

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <Forms aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
  );
}

export default App;
