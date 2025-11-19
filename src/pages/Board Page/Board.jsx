import TitleBar from "../../components/TitleBar.jsx";
import './Board.css'

import coda from "../../assets/boardpics/coda-prez.png"

export default function Board(){ 
    return (
        <main>
            <TitleBar title="Our Board"/>

            <div className= "board">
            
                <div className = "member"> 
                    <div className="image"> 
                        <img src={coda} alt="Photo of the president Coda"/> 
                    </div>
                    <div className="text">
                        
                        <p className = "name"> Coda Richmond</p>
                        <p className = "position">Executive Position:</p>
                        <p className = "position">President</p>
                    </div>
                </div>

            </div>
        </main>
        
    );
}