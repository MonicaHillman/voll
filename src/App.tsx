import './App.css';
import Cabecalho from './components/Cabecalho';
import Container from './components/Container';
import Rodape from './components/Rodape';
import Titulo from './components/Titulo';

function App() {
  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Administrativa</Titulo>
      </Container>
      <Rodape />
    </>
  );
}

export default App;
