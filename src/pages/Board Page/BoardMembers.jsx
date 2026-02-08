import TitleBar from "../../components/TitleBar.jsx";
import './Board.css'

import ammani from "../../assets/board26/ammani.jpg"
import angela from "../../assets/board26/angela.jpg"
import bre from "../../assets/board26/bre.jpg"
import deeya from "../../assets/board26/deeya.jpg"
import giselle from "../../assets/board26/giselle.jpg"
import hiba from "../../assets/board26/hiba.jpg"
import hooriya from "../../assets/board26/hooriya.jpg"
import malika from "../../assets/board26/malika.jpg"
import martha from "../../assets/board26/martha.jpg"
import samira from "../../assets/board26/samira.jpg"
import simran from "../../assets/board26/simran.jpg"
import srijani from "../../assets/board26/srijani.jpg"
import valeria from "../../assets/board26/valeria.jpg"

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

                {/*Board Member 1*/}
                <a href="https://www.linkedin.com/in/ammanikhan" target="_blank" rel="noopener noreferrer">
                    <div className = "rightMember">    
                        <div className="rightPhoto"> 
                            <img src={ammani}/> 
                        </div>
                        <div className="caption">
                            <p className = "name">Ammani Khan</p>
                        </div>
                    </div>
                </a>

                {/*Board Member 2*/}
                {/*<a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">*/}
                    <div className = "leftMember">
                        <div className="leftPhoto"> 
                            <img src={angela}/> 
                        </div>
                        <div className="caption">
                            <p className = "name">Angela</p>
                        </div>
                    </div>
                {/*</a>*/}

                {/*Board Member 3*/}
                {/*<a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">*/}
                    <div className = "rightMember">    
                        <div className="rightPhoto"> 
                            <img src={bre}/> 
                        </div>
                        <div className="caption">
                            <p className = "name">Bre</p>
                        </div>
                    </div>
                {/*</a>*/}

                {/*Board Member 4*/}
                {/*<a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">*/}
                    <div className = "leftMember"> 
                        <div className="leftPhoto"> 
                            <img src={deeya}/> 
                        </div>
                        <div className="caption">
                            <p className = "name">Deeya</p>
                        </div>
                    </div>
                {/*</a>*/}

                {/*Board Member 5*/}
                {/*<a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">*/}
                    <div className = "rightMember">    
                        <div className="rightPhoto"> 
                            <img src={giselle}/> 
                        </div>
                        <div className="caption">
                            <p className = "name">Giselle</p>
                        </div>
                    </div>
                {/*</a>*/}

                {/*Board Member 6*/}
                <a href="https://www.linkedin.com/in/hibamirza0/" target="_blank" rel="noopener noreferrer">
                    <div className = "leftMember"> 
                        <div className="leftPhoto"> 
                            <img src={hiba}/> 
                        </div>
                        <div className="caption">
                            <p className = "name">Hiba</p>
                        </div>
                    </div>
                </a>

                {/*Board Member 7*/}
                {/*<a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">*/}
                    <div className = "rightMember"> 
                        <div className="rightPhoto"> 
                            <img src={hooriya}/> 
                        </div>
                        <div className="caption">
                            <p className = "name">Hooriya</p>
                        </div>
                    </div>
                {/*</a>*/}

                {/*Board Member 8*/}
                <a href="https://www.linkedin.com/in/malikarsyeda?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" rel="noopener noreferrer">
                    <div className = "leftMember"> 
                        <div className="leftPhoto"> 
                            <img src={malika}/> 
                        </div>
                        <div className="caption">
                            <p className = "name">Malika</p>
                        </div>
                    </div>
                </a>

                {/*Board Member 9*/}
                <a href="https://www.linkedin.com/in/martha-barraza?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank" rel="noopener noreferrer">
                    <div className = "rightMember"> 
                        <div className="rightPhoto"> 
                            <img src={martha}/> 
                        </div>   
                        <div className="caption">
                            <p className = "name">Martha</p>
                        </div>
                    </div>
                </a>
                
                {/*Board Member 10*/}
                {/*<a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">*/}
                    <div className = "leftMember"> 
                        <div className="leftPhoto"> 
                            <img src={samira}/> 
                        </div>
                        <div className="caption">
                            <p className = "name">Samira</p>
                        </div>
                    </div>
                {/*</a>*/}

                {/*Board Member 11*/}
                {/*<a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">*/}
                    <div className = "rightMember"> 
                        <div className="rightPhoto"> 
                            <img src={simran}/> 
                        </div>   
                        <div className="caption">
                            <p className = "name">Simran</p>
                        </div>
                    </div>
                {/*</a>*/}

                {/*Board Member 12*/}
                {/*<a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">*/}
                    <div className = "leftMember"> 
                        <div className="leftPhoto"> 
                            <img src={srijani}/> 
                        </div>
                        <div className="caption">
                            <p className = "name">Srijani</p>
                        </div>
                    </div>
                {/*</a>*/}

                {/*Board Member 13*/}
                {/*<a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">*/}
                    <div className = "rightMember"> 
                        <div className="rightPhoto"> 
                            <img src={valeria}/> 
                        </div>   
                        <div className="caption">
                            <p className = "name">Valeria</p>
                        </div>
                    </div>
                {/*</a>*/}

            </div>


        </main>
    );
}