import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Game from './pages/game';
import Contacto from './pages/contacto';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>



    </BrowserRouter>

  );
}

export default App;
