import { NavLink } from "react-router-dom";
import TitleBar from "../../components/TitleBar.jsx";
import folderImg from "../../assets/picsEvents/folder.svg";
import "./Events.css";

export default function Events() {
  const MONTHS = [
    { label: "Aug", to: "/events/aug" },
    { label: "Sep", to: "/events/sep" },
    { label: "Oct", to: "/events/oct" },
    { label: "Nov", to: "/events/nov" },
    { label: "Dec", to: "/events/dec" },
    { label: "Jan", to: "/events/jan" },
  ];

  const folderLink = ({ isActive }) =>
    "folder-link" + (isActive ? " active" : "");

  return (
    <main>
      <TitleBar title="Upcoming Events" />

      <div className="folder-grid">
        {MONTHS.map(({ label, to }) => (
          <NavLink key={label} to={to} className={folderLink}>
            <div className="folder-wrapper">
              <img src={folderImg} alt={label} className="folder-img" />
              <span className="folder-label">{label}</span>
            </div>
          </NavLink>
        ))}
      </div>
    </main>
  );
}
