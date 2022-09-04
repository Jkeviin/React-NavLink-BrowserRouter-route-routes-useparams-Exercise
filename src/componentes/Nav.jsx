import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <NavLink className={({isActive}) => isActive ? "activo":null} to="/">Home</NavLink>
      <NavLink className={({isActive}) => isActive ? "activo":null} to="/atanagildo">Atanagildo</NavLink>
      <NavLink className={({isActive}) => isActive ? "activo":null} to="/ataulfo">Ataulfo</NavLink>
      <NavLink className={({isActive}) => isActive ? "activo":null} to="/ervigio">Ervigio</NavLink>
      <NavLink className={({isActive}) => isActive ? "activo":null} to="/leovigildo">Leovigildo</NavLink>
      <NavLink className={({isActive}) => isActive ? "activo":null} to="/recesvinto">Recesvinto</NavLink>
      <NavLink className={({isActive}) => isActive ? "activo":null} to="/sisebuto">Sisebuto</NavLink>
    </nav>
  )
}
