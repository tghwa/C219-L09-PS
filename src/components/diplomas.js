import { getDiplomas } from "../api";
import { Outlet, NavLink } from "react-router-dom";

export default function Diplomas() {
  const diplomas = getDiplomas();
  return (
    <div className="container">
      <h1>Schools</h1>

      <ul classname="categories">
        {diplomas.map(dip => (
          <li key={dip.id}>
            <NavLink 
              className={({ isActive}) => 
              isActive ? "category-active" : null
              }
              to={dip.id}
            >
              {dip.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
