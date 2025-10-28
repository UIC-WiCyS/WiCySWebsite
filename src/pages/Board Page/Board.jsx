import TitleBar from "../../components/TitleBar.jsx";
import './Board.css'

import aleena from "../../assets/boardpics/aleena-ivp.png"
import aye from "../../assets/boardpics/aye-treasurer.png"
import coda from "../../assets/boardpics/coda-prez.png"
import raima from "../../assets/boardpics/raima-secretary.png"
import saja from "../../assets/boardpics/saja-engagedirector.png"
import yuppar from "../../assets/boardpics/yuupar-evp.png"

//const IMAGES = [aleena, aye, coda, raima, saja, yuppar]

export default function Board(){ 
    return (
        <main>
            <TitleBar title="Our Board" />
            <h1>Board Members</h1>

            <img className= "portraits" src={aleena} alt="Photo of the IVP Alenna " />
            <img className= "portraits" src={aye} alt="Photo of the treasurer Aye" />
            <img className= "portraits" src={coda} alt="Photo of the president Coda" />
            <img className= "portraits" src={raima} alt="Photo of secretary Raima" />
            <img className= "portraits" src={saja} alt="Photo of engagedirector Saja" />
            <img className= "portraits" src={yuppar} alt="Photo of EVP Yuppar" />
        </main>
    )
}