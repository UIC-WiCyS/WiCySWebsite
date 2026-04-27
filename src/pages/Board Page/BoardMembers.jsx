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
import samira from "../../assets/board26/samira.jpg"
import simran from "../../assets/board26/simran.jpg"
import srijani from "../../assets/board26/srijani.jpg"
import valeria from "../../assets/board26/valeria.jpg"
import martha from "../../assets/board26/martha.jpg"

import {Link} from "react-router-dom"


export default function BoardExecutive(){ 
    return (
        <main>
            <div className = "TitleBar">
                <TitleBar title="Our Board"/>
            </div>

            <div className="buttons">
                <Link to="/board" className="executiveButton">
                    Executive Board
                </Link>

            <Link to="/board/members" className="boardButton">
                    Board
            </Link>

                {/* <div className = "boardButton">
                    <Link to = "/board/members">
                        <button>Board</button>
                    </Link>
                </div> */}
            </div>

            {/* Board Members */}

            <div className= "board">

                {/*Board Members: Communication Team*/}

                <a href="https://www.linkedin.com/in/ammanikhan" target="_blank" rel="noopener noreferrer">
                    <div className = "rightMember">    
                        <div className="rightPhoto"> 
                            <img src={ammani}/> 
                        </div>
                        <div className="caption">
                            <p className = "name">Ammani Khan</p>
                            <p className = "position">Communications Chair</p>
                            <p className = "name">Ammani Khan</p>
                            <p className = "position">Communications Chair</p>
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
                            <p className = "name">Samira Ali</p>
                            <p className = "position">Communications Committee</p>
                        </div>
                    </div>
                {/*</a>*/}

                {/*Board Member 8*/}
                <a href="https://www.linkedin.com/in/malikarsyeda?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" rel="noopener noreferrer">
                    <div className = "rightMember"> 
                        <div className="rightPhoto"> 
                            <img src={malika}/> 
                        </div>
                        <div className="caption">
                            <p className = "name">Malika Syeda</p>
                            <p className = "position">Communications Committee</p>
                        </div>
                    </div>
                {/*</a>*/}

                {/*Board Member 3*/}
                {/*<a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">*/}
                    <div className = "leftMember">    
                        <div className="leftPhoto"> 
                            <img src={bre}/> 
                        </div>
                        <div className="caption">
                            <p className = "name">Breanna Brown</p>
                            <p className = "position">Social Media Chair</p>
                        </div>
                    </div>
                {/*</a>*/}

                {/*Board Member 12*/}
                {/*<a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">*/}
                    <div className = "rightMember"> 
                        <div className="rightPhoto"> 
                            <img src={srijani}/> 
                        </div>
                        <div className="caption">
                            <p className = "name">Srijani Prekki</p>
                            <p className = "position">Social Media Chair</p>
                        </div>
                    </div>
                {/*</a>*/}

                {/*Board Member 11*/}
                {/*<a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">*/}
                    <div className = "leftMember"> 
                        <div className="leftPhoto"> 
                            <img src={simran}/> 
                        </div>   
                        <div className="caption">
                            <p className = "name">Simran Ashraf</p>
                            <p className = "position">Social Media Committee</p>
                        </div>
                    </div>
                </a>

                {/*Board Members: Social Media Team*/}

                {/*<a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">*/}
                    <div className = "rightMember"> 
                        <div className="rightPhoto"> 
                            <img src={deeya}/> 
                        </div>
                        <div className="caption">
                            <p className = "name">Deeya Rawat</p>
                            <p className = "position">Fundraising Chair</p>
                        </div>
                    </div>
                {/*</a>*/}

                {/*<a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">*/}
                    <div className = "leftMember">    
                        <div className="leftPhoto"> 
                            <img src={giselle}/> 
                        </div>
                        <div className="caption">
                            <p className = "name">Giselle Lechuga</p>
                            <p className = "position">Fundraising Committee</p>
                        </div>
                    </div>
                {/*</a>*/}

                {/*Board Member 6*/}
                <a href="https://www.linkedin.com/in/hibamirza0/" target="_blank" rel="noopener noreferrer">
                    <div className = "rightMember"> 
                        <div className="rightPhoto"> 
                            <img src={hiba}/> 
                        </div>
                        <div className="caption">
                            <p className = "name">Hiba Mirza</p>
                            <p className = "position">Fundraising Committee</p>
                        </div>
                    </div>
                </a>

                {/*Board Member 9*/}
                <a href="https://www.linkedin.com/in/martha-barraza?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank" rel="noopener noreferrer">
                    <div className = "leftMember"> 
                        <div className="leftPhoto"> 
                            <img src={martha}/> 
                        </div>   
                        <div className="caption">
                            <p className = "name">Martha Barraza</p>
                            <p className = "position">Web Admin Chair</p>
                        </div>
                    </div>
                </a>

                {/*Board Member 2*/}
                <a href="https://www.linkedin.com/in/angela-camargo-/" target="_blank" rel="noopener noreferrer">
                    <div className = "rightMember">
                        <div className="rightPhoto"> 
                            <img src={angela}/> 
                        </div>
                        <div className="caption">
                            <p className = "name">Angela Camargo</p>
                            <p className = "position">Web Admin Committee</p>
                            <p className = "name">Angela Camargo</p>
                            <p className = "position">Web Admin Committee</p>
                        </div>
                    </div>
                </a>

                {/*Board Member 7*/}
                {/*<a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">*/}
                    <div className = "leftMember"> 
                        <div className="leftPhoto"> 
                            <img src={hooriya}/> 
                        </div>
                        <div className="caption">
                            <p className = "name">Hooriya Kazmi</p>
                            <p className = "position">Web Admin Committee</p>
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
                            <p className = "name wrap">Valeria Marquez Enriquez</p>
                            <p className = "position">Web Admin Committee</p>
                            <p className = "name wrap">Valeria Marquez Enriquez</p>
                            <p className = "position">Web Admin Committee</p>
                        </div>
                    </div>
                {/*</a>*/}

            </div>


        </main>
    );
}