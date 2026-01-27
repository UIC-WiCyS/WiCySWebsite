import TitleBar from "../../components/TitleBar.jsx";
import './Board.css'

import ammani from "../../assets/boardMembers/ammani.jpg"
import bre from "../../assets/boardMembers/bre.jpg"
import deeya from "../../assets/boardMembers/deeya.jpg"
import giselle from "../../assets/boardMembers/giselle.jpg"
import julia from "../../assets/boardMembers/julia.jpg"
import krisha from "../../assets/boardMembers/krisha.jpg"
import martha from "../../assets/boardMembers/martha.jpg"
import samira from "../../assets/boardMembers/samira.jpg"
import simran from "../../assets/boardMembers/simran.jpg"
import srijani from "../../assets/boardMembers/srijani.jpg"

import {Link} from "react-router-dom"


export default function BoardExecutive(){ 
    return (
        <main>
            <div className = "TitleBar">
                <TitleBar title="Our Board"/>
            </div>

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

            {/* Board Members */}

            <div className= "board">

                <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                    <div className = "rightMember">    
                        <div className="rightPhoto"> 
                            <img src={ammani}/> 
                        </div>

                        <div className="caption">
                            <p className = "name">Ammani</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                    <div className = "leftMember">
                        <div className="leftPhoto"> 
                            <img src={bre}/> 
                        </div>

                        <div className="caption">
                            <p className = "name">Bre</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                    <div className = "rightMember">    
                        <div className="rightPhoto"> 
                            <img src={deeya}/> 
                        </div>

                        <div className="caption">
                            <p className = "name">Deeya</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                    <div className = "leftMember"> 
                        <div className="leftPhoto"> 
                            <img src={giselle}/> 
                        </div>
                        <div className="caption">
                            <p className = "name">Giselle</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                    <div className = "rightMember">    
                        <div className="rightPhoto"> 
                            <img src={julia}/> 
                        </div>

                        <div className="caption">
                            <p className = "name">Julia</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                    <div className = "leftMember"> 
                        <div className="leftPhoto"> 
                            <img src={krisha}/> 
                        </div>
                        <div className="caption">
                            <p className = "name">Krisha</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                    <div className = "rightMember"> 
                        <div className="rightPhoto"> 
                            <img src={martha}/> 
                        </div>

                        <div className="caption">
                            <p className = "name">Martha</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                    <div className = "leftMember"> 
                        <div className="leftPhoto"> 
                            <img src={samira}/> 
                        </div>

                        <div className="caption">
                            <p className = "name">Samira</p>
                        </div>
                    </div>
                </a>

                <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                    <div className = "rightMember"> 
                        <div className="rightPhoto"> 
                            <img src={simran}/> 
                        </div>   

                        <div className="caption">
                            <p className = "name">Simran</p>
                        </div>
                    </div>
                </a>
                
                <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                    <div className = "leftMember"> 
                        <div className="leftPhoto"> 
                            <img src={srijani}/> 
                        </div>
                        <div className="caption">
                            <p className = "name">Srijani</p>
                        </div>
                    </div>
                </a>

            </div>


        </main>
    );
}