import TitleBar from "../../components/TitleBar.jsx";
import './Board.css'
import './BoardOne.jsx'

import coda from "../../assets/boardpics/coda-prez.png"
import yuupar from "../../assets/boardpics/yuupar-evp.png"
import aleena from "../../assets/boardpics/aleena-ivp.png"
import saja from "../../assets/boardpics/saja-engagedirector.png"
import aye from "../../assets/boardpics/aye-treasurer.png"
import raima from "../../assets/boardpics/raima-secretary.png"

import {Link} from "react-router-dom"

export default function Board(){ 
    
    return (
        <main>

            <div className = "TitleBar">
                <TitleBar title="Our Board"/>
            </div>

            <div className="buttons">
                <div className = "buttonExecutive">
                    <Link to = "/board/executive">
                        <button>Executive Board</button>
                    </Link>
                </div>

                <div className = "buttonBoard">
                    <Link to = "/board/members">
                        <button>Board</button>
                    </Link>
                </div>
            </div>
            

            <div className= "board">
                
                <div className = "memberLeft"> 
                    <div className="image"> 
                        <img src={coda} alt="Photo of the president Coda"/> 
                    </div>
                    <div className="text">
                        <p className = "name"> Coda Richmond</p>
                        <p className = "position">Executive Position:</p>
                        <p className = "position">President</p>
                    </div>
                </div>

                <div className = "memberRight"> 
                    
                    <div className="text">
                        <p className = "name">Yuupar</p>
                        <p className = "position">Executive Position:</p>
                        <p className = "position">External Vice President</p>
                    </div>

                    <div className="imgRight"> 
                        <img src={yuupar} alt="Photo of the vice president Yuupar"/> 
                    </div>
                </div>

                <div className = "memberLeft"> 
                    <div className="image"> 
                        <img src={aleena} alt="Photo of the internal vice president Aleena"/> 
                    </div>
                    <div className="text">
                        <p className = "name"> Aleena</p>
                        <p className = "position">Executive Position:</p>
                        <p className = "position">Internal Vice President</p>
                    </div>
                </div>

                <div className = "memberRight"> 
                    
                    <div className="text">
                        <p className = "name">Saja</p>
                        <p className = "position">Executive Position:</p>
                        <p className = "position">Engagement Director</p>
                    </div>

                    <div className="imgRight"> 
                        <img src={saja} alt="Photo of the engagement director Saja"/> 
                    </div>
                </div>

                <div className = "memberLeft"> 
                    <div className="image"> 
                        <img src={aye} alt="Photo of the treasurer Aye"/> 
                    </div>
                    <div className="text">
                        <p className = "name">Aye</p>
                        <p className = "position">Executive Position:</p>
                        <p className = "position">Treasurer</p>
                    </div>
                </div>

                <div className = "memberRight"> 
                    
                    <div className="text">
                        <p className = "name">Raima</p>
                        <p className = "position">Executive Position:</p>
                        <p className = "position">Secratary</p>
                    </div>

                    <div className="imgRight"> 
                        <img src={raima} alt="Photo of the secratary Raima"/> 
                    </div>
                </div>

            </div>
        </main>
        
    );
}