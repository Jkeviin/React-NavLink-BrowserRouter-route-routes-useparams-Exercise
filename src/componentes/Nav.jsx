import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <NavLink className={({isActive}) => isActive ? "activo":null} to="/">Home</NavLink>
      <NavLink className={({isActive}) => isActive ? "activo":null} to="/reyes/atanagildo">Atanagildo</NavLink>
      <NavLink className={({isActive}) => isActive ? "activo":null} to="/reyes/ataulfo">Ataulfo</NavLink>
      <NavLink className={({isActive}) => isActive ? "activo":null} to="/reyes/ervigio">Ervigio</NavLink>
      <NavLink className={({isActive}) => isActive ? "activo":null} to="/reyes/leovigildo">Leovigildo</NavLink>
      <NavLink className={({isActive}) => isActive ? "activo":null} to="/reyes/recesvinto">Recesvinto</NavLink>
      <NavLink className={({isActive}) => isActive ? "activo":null} to="/reyes/sisebuto">Sisebuto</NavLink>
    </nav>
  )
}
