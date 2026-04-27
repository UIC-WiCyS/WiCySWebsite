import TitleBar from "../../components/TitleBar.jsx";
import './Board.css'

import coda from "../../assets/executive26/coda2026.JPG"
import yuupar from "../../assets/executive26/yuupar2026.JPG"
import aleena from "../../assets/executive26/aleena2026.jpg"
import saja from "../../assets/executive26/saja2026.jpg"
import aye from "../../assets/executive26/aye2026.jpg"
import raima from "../../assets/executive26/raima2026.jpg"
import yuuparmod from "../../assets/executive26/yuupar-mod.png"
import aleenamod from "../../assets/executive26/aleena-mod.png"
import codamod from "../../assets/executive26/coda-mod.png"

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

                <div className="columnMembers desktopOnly">

                    {/* External Vice President: Yuupar */}
                    <div className = "columnTwo"> 
                        <a href="https://www.linkedin.com/in/heramyat/" target="_blank" rel="noopener noreferrer">
                            <div className="captionColumn">
                                <p className = "name">Khin Yuupar Myat</p>
                            </div>

                            <div className="columnImg"> 
                                <img src={yuupar} alt="Photo of the vice president Yuupar"/> 
                            </div>
                            
                            <div className="captionColumn">
                                <p className = "position">External</p>
                                <p className = "position">Vice President</p>
                            </div>
                        </a> 
                    </div>

                    {/* President: Coda */}

                    <div className = "columnOne"> 
                        <a href="https://www.linkedin.com/in/coda-richmond/" 
                        target="_blank" rel="noopener noreferrer">
                            <div className="captionColumn">
                                <p className = "name"> Coda Richmond</p> 
                            </div>

                            <div className="columnImg"> 
                                <img src={coda} alt="Photo of the president Coda"/> 
                            </div>

                            <div className="captionColumn">
                                <p className = "position">President</p>
                            </div>
                        </a>
                    </div>

                    {/*Internal Vice President: Aleena */}
                    <div className = "columnThree"> 
                        <a href="https://www.linkedin.com/in/aleena-mehmood/" 
                        target="_blank" rel="noopener noreferrer">
                            <div className="captionColumn">
                                <p className = "name"> Aleena Mehmood</p>
                            </div>

                            <div className="columnImg"> 
                                <img src={aleena} alt="Photo of the internal vice president Aleena"/> 
                            </div>

                            <div className="captionColumn">
                                <p className = "position">Internal </p>
                                <p className = "position">Vice President</p>
                            </div>
                        </a>
                    </div>
                    
                </div>

                {/* this is for MOBILE ONLY, top 3 were not looking good */}
                <div className="mobileOnly">
                    <a href="https://www.linkedin.com/in/coda-richmond?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                        <div className = "leftMember"> 
                                
                                <div className="executiveRightPhoto"> 
                                    <img src={codamod} alt="Photo of the president Coda"/> 
                                </div>

                                <div className="caption">
                                    <p className = "name">Coda Richmond</p>
                                    <p className = "position">President</p>
                                </div>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/heramyat/" target="_blank" rel="noopener noreferrer">
                        <div className = "rightMember"> 
                
                            <div className="executiveRightPhoto"> 
                                <img src={yuuparmod} alt="Photo of the external vice president yuupar"/> 
                            </div>
                        
                            <div className="caption">
                                <p className = "name">Khin Yuupar Myat</p>
                                <p className = "position">External Vice President</p>
                            </div>
                        </div>
                    </a>

                    <div className = "leftMember"> 
                        <a href="https://www.linkedin.com/in/aleena-mehmood/" 
                        target="_blank" rel="noopener noreferrer">
                            <div className="executiveRightPhoto"> 
                                <img src={aleenamod} alt="Photo of the internal vice president aleena"/> 
                            </div>

                            <div className="caption">
                                <p className = "name">Aleena Mehmood</p>
                                <p className = "position">Internal Vice President</p>
                            </div>
                        </a>
                    </div>
                </div>


                {/*Engagement Director: Saja*/}
                {/*<a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">*/}
                    <div className = "rightMember"> 
                            
                            <div className="executiveRightPhoto"> 
                                <img src={saja} alt="Photo of the engagement director Saja"/> 
                            </div>

                            <div className="caption">
                                <p className = "name">Saja Bushara</p>
                                <p className = "position">Engagement Director</p>
                            </div>
                    </div>
                {/*</a>*/}

                {/*Treasurer: Aye*/}
                
                <a href= "https://www.linkedin.com/in/ayekyawtzin/"
                target="_blank" rel="noopener noreferrer">
                    <div className = "leftMember"> 
                            <div className="executiveLeftPhoto"> 
                                <img src={aye} alt="Photo of the treasurer Aye"/> 
                            </div>
                            
                            <div className="caption">
                                <p className = "name">Aye Kyawt Zin</p>
                                <p className = "position">Treasurer</p>
                            </div>
                    </div>
                </a>

                {/*Secratary: Raima */}
                {/*<a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">*/}
                    <div className = "rightMember"> 
                        <div className="executiveRightPhoto"> 
                            <img src={raima} alt="Photo of the secratary Raima"/> 
                        </div>

                        <div className="caption">
                            <p className = "name">Raima Chowdhury</p>
                            <p className = "position">Secratary</p>
                        </div>
                    </div>
                {/*</a>*/}

            </div>
        </main>
        
    );
}