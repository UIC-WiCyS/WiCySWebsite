import TitleBar from "../../components/TitleBar.jsx";
import './Board.css'

import coda from "../../assets/boardpics/coda-prez.png"

//const IMAGES = [aleena, aye, coda, raima, saja, yuppar]


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

                {/* <div className = "member"> 
                    <div className="text">
                        <h1 className = "name">Yuupar</h1>
                        <p className = "position"> Executive Position: External Vice President</p>
                    </div>
                    <div className="image"> 
                        <img src={yuppar} alt="Photo of EVP Yuppar"/> 
                    </div>
                </div>

                <div className = "member"> 
                    <div className="text">
                        <h1 className = "name">Aleena</h1>
                        <p className = "position">Executive Position: Internal Vice President</p>
                    </div>
                    <div className="image"> 
                        <img src={aleena} alt="Photo of the IVP Alenna" /> 
                    </div>
                </div>

                <div className = "member"> 
                    <div className="text">
                        <h1 className = "name">Saja</h1>
                        <p className = "position">Executive Position: Engagement Director</p>
                    </div>
                    <div className="image"> 
                        <img src={saja} alt="Photo of engage director Saja" /> 
                    </div>
                </div>

                <div className = "member"> 
                    <div className="text">
                        <h1 className = "name">Aye</h1>
                        <p className = "position">Executive Position: Treasure</p>
                    </div>
                    <div className="image"> 
                        <img src={aye} alt="Photo of the treasurer Aye" /> 
                    </div>
                </div>

                <div className = "member"> 
                    <div className="text">
                        <h1 className = "name">Raima</h1>
                        <p className = "position">Executive Position: Secretary </p>
                    </div>
                    <div className="image"> 
                        <img src={raima} alt="Photo of secretary Raima" /> 
                    </div>
                </div> */}

            </div>
        </main>
        
    )
}