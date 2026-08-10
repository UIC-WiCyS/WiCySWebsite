import "./Footer.css"
import logo from "../assets/wicys_full_logo.png"
import {NavLink} from "react-router-dom"


export default function Footer () {
    return (
        <footer className="footer">
           <div>
                <img src={logo} alt="WiCyS Logo" className="logo"/>
                <p style={{fontSize: "smaller"}}>We love our committed members. 
                    <br /> Remember to stay involved, and 
                    <br />keep up with WiCyS!</p>
                <p style={{color: "#384E77", fontSize: "larger", lineHeight: 0}}>© {new Date().getFullYear()} WiCyS UIC Chapter</p> 
           </div>

            <div style={{flexGrow: 1}}/>

           <div className="footer-nav">
                <div className="footer-links">
                    <p style={{fontWeight: "bolder", fontSize: "medium"}}>Links</p>
                    <a href="https://www.instagram.com/wicysatuic/" target="_blank">Instagram</a>
                    <a href="https://discord.gg/VAdD4kf7Yw" target="_blank">Discord</a>
                    <a href="https://www.wicys.org/" target="_blank">WiCyS National</a>
                </div>
                
                <div className="footer-links">
                    <p style={{fontWeight: "bolder", fontSize: "medium"}}>Pages</p>
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/events" >Events</NavLink>
                    <NavLink to="/announcements" >Announcements</NavLink>
                    <NavLink to="/board" >Board</NavLink>
                </div>
           </div>
        </footer>
    );
}