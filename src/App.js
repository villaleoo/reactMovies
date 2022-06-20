import GlobalPeliculasContext from './context/GlobalPeliculasContext';
import { Rutas } from './routes/Rutas';


function App() {
  return (
    <div className="App">
      <GlobalPeliculasContext>

        <Rutas/>

      </GlobalPeliculasContext>
    </div>
  );
}

export default App;
