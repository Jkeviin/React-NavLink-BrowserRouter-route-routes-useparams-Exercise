import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

/* REYES */
import Modelo from './reyes/Modelo';

/* Home */
import Home from './reyes/Home.js';

/* Error 404 */
import Error404 from './reyes/Error404.js';

/* NavLink */
import Nav from './componentes/Nav.jsx';


function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/reyes/:rey" element={<Modelo/>} />
          <Route path="/*" element={<Error404/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
