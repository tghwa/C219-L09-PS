import { useParams, NavLink, Outlet } from "react-router-dom";
import { getDiploma } from "../api";

export default function Diploma() {
  const { dipId } = useParams();
  const diploma = getDiploma(dipId);

  return (
    <>
      <h2>{diploma.name} Sessions</h2>

      <ul className="session-list">
        {diploma?.sessions.map(session => (
          <li className="session" key={session.id}>
            <NavLink
              className={({ isActive }) => (isActive ? "session-active" : null)}
              to={session.id}
            >
              <p className="session-name">{session.name}</p>
              <p>
                {session.speaker.name} | {session.speaker.title}
              </p>
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
