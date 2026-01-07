import TitleBar from "../../components/TitleBar.jsx";
import './Board.css'

import coda from "../../assets/executiveMembers/coda-prez.png"
import yuupar from "../../assets/executiveMembers/yuupar-evp.png"
import aleena from "../../assets/executiveMembers/aleena-ivp.png"
import saja from "../../assets/executiveMembers/saja-engagedirector.png"
import aye from "../../assets/executiveMembers/aye-treasurer.png"
import raima from "../../assets/executiveMembers/raima-secretary.png"

import {Link} from "react-router-dom"

export default function Board(){ 
    
    return (
        <main>

            <div className = "TitleBar">
                <TitleBar title= "Our Board"/>
            </div>

            {/* Buttons */}

            <div className="buttons">
                <div className = "executiveButton">
                    <Link to = "/board">
                        <button>Executive Board</button>
                    </Link>
                </div>

                <div className = "boardButton">
                    <Link to = "/board/members">
                        <button>Board</button>
                    </Link>
                </div>
            </div>
            
            {/* Executive Board Members */}

            <div className= "board">
                
                <div className = "leftMember"> 
                    <div className="executiveLeftPhoto"> 
                        <img src={coda} alt="Photo of the president Coda"/> 
                    </div>

                    <div className="caption">
                        <p className = "name"> Coda Richmond</p>
                        <p className = "position">Executive Position:</p>
                        <p className = "position">President</p>
                    </div>
                </div>

                <div className = "rightMember"> 
                    <div className="executiveRightPhoto"> 
                        <img src={yuupar} alt="Photo of the vice president Yuupar"/> 
                    </div>
                    
                    <div className="caption">
                        <p className = "name">Yuupar</p>
                        <p className = "position">Executive Position:</p>
                        <p className = "position">External Vice President</p>
                    </div>
                </div>

                <div className = "leftMember"> 
                    <div className="executiveLeftPhoto"> 
                        <img src={aleena} alt="Photo of the internal vice president Aleena"/> 
                    </div>

                    <div className="caption">
                        <p className = "name"> Aleena</p>
                        <p className = "position">Executive Position:</p>
                        <p className = "position">Internal Vice President</p>
                    </div>
                </div>

                <div className = "rightMember"> 
                    <div className="executiveRightPhoto"> 
                        <img src={saja} alt="Photo of the engagement director Saja"/> 
                    </div>

                    <div className="caption">
                        <p className = "name">Saja</p>
                        <p className = "position">Executive Position:</p>
                        <p className = "position">Engagement Director</p>
                    </div>
                </div>

                <div className = "leftMember"> 
                    <div className="executiveLeftPhoto"> 
                        <img src={aye} alt="Photo of the treasurer Aye"/> 
                    </div>
                    
                    <div className="caption">
                        <p className = "name">Aye</p>
                        <p className = "position">Executive Position:</p>
                        <p className = "position">Treasurer</p>
                    </div>
                </div>

                <div className = "rightMember"> 
                    <div className="executiveRightPhoto"> 
                        <img src={raima} alt="Photo of the secratary Raima"/> 
                    </div>

                    <div className="caption">
                        <p className = "name">Raima</p>
                        <p className = "position">Executive Position:</p>
                        <p className = "position">Secratary</p>
                    </div>
                </div>

            </div>
        </main>
        
    );
}