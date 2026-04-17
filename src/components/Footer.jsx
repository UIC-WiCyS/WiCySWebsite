import "./Footer.css"


export default function Footer () {
    return (
        <footer className="footer">
           <p>© {new Date().getFullYear()} WiCyS UIC Chapter</p> 
        </footer>
    );
}