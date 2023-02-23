import './App.css';
import { ListaDeTareas } from './componentes/ListaDeTareas';
import { Logofree } from './componentes/logo';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <Logofree />
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
