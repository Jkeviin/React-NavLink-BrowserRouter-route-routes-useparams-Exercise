import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

/* REYES */
import Atanagildo from './reyes/Atanagildo';
import Ataulfo from './reyes/Ataulfo';
import Ervigio from './reyes/Ervigio';
import Leovigildo from './reyes/Leovigildo';
import Recesvinto from './reyes/Recesvinto';
import Sisebuto from './reyes/Sisebuto';

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
          <Route path="/atanagildo" element={<Atanagildo/>} />
          <Route path="/ataulfo" element={<Ataulfo/>} />
          <Route path="/ervigio" element={<Ervigio/>} />
          <Route path="/leovigildo" element={<Leovigildo/>} />
          <Route path="/leogivildo" element={<Navigate to="/leovigildo"/>} />
          <Route path="/recesvinto" element={<Recesvinto/>} />
          <Route path="/sisebuto" element={<Sisebuto/>} />
          <Route path="/*" element={<Error404/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
