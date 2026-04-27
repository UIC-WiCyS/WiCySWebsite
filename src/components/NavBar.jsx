import {NavLink} from "react-router-dom"
import { useEffect, useState } from "react";
import "./NavBar.css"
import logo from "../assets/wicys_logo.png"
import Scroll from "./scroll"

export default function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false);


    const link = ({ isActive }) =>
        "nav-link" + (isActive ? " active" : "")

    useEffect(() => {
        if (!menuOpen) return;

        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [menuOpen]);

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") setMenuOpen(false);
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar">
            <Scroll />

            <div className="nav-links">
                <NavLink to="/events" className={link}>Events</NavLink>
                <NavLink to="/board" className={link}>Our Board</NavLink>


                <div className="logo-link">
                    <NavLink to="/home" className={link}>
                        <img src={logo} alt="WiCyS Logo" className="logo"/>
                    </NavLink>
                </div>

                
                <NavLink to="/announcements" className={link}>Announcements</NavLink>
                <NavLink to="/join" className={link}>Join Us</NavLink>
            </div>

            <button className="nav-button" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen((v) => !v)}>
                <span className="hor-line" />
                <span className="hor-line" />
                <span className="hor-line" />
            </button>

            <div id="mobile-menu" className={`mobile-overlay ${menuOpen ? "open" : ""}`} role="dialog" aria-modal="true" onClick={closeMenu}>
                <div className="mobile-panel" onClick={(e) => e.stopPropagation()}>
                  ✕  

                <NavLink to="/events" className={link} onClick={closeMenu}>Events</NavLink>
                <NavLink to="/board" className={link} onClick={closeMenu}>Our Board</NavLink>
                <NavLink to="/announcements" className={link} onClick={closeMenu}>Announcements</NavLink>
                <NavLink to="/join" className={link} onClick={closeMenu}>Join Us</NavLink>

                <NavLink to="/home" className={link} onClick={closeMenu}>
                    <img src={logo} alt="WiCyS Logo" className="logo mobile-logo"/>
                </NavLink>
            </div>
                </div>


            
        </nav>
    )
}