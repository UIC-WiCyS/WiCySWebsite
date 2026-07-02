import TitleBar from "../../components/TitleBar.jsx";
import './Board.css'

import {Link} from "react-router-dom"

export default function Board26_27(){ 
    
    return (
        <main>

            <div className = "TitleBar">
                <TitleBar title= "Our Board"/>
            </div>

            <div className = "yearButtons">
                <Link to= "/board/2026_2027" className = "currYear">
                    2026 - 2027                
                </Link>

                <Link to= "/board/2025_2026" className = "Button2025_26">
                    2025 - 2026
                </Link>
            </div>

            
        </main>
        
    );
}