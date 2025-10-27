import TitleBar from "../../components/TitleBar.jsx";
import './Board.css'

import aleena from "../../assets/boardpics/aleena-ivp.png"
import aye from "../../assets/boardpics/aye-treasurer.png"
import coda from "../../assets/boardpics/coda-prez.png"
import raima from "../../assets/boardpics/raima-secretary.png"
import saja from "../../assets/boardpics/saja-engagedirector.png"
import yuppar from "../../assets/boardpics/yuppar-evp.png"

//const IMAGES = [aleena, aye, coda, raima, saja, yuppar]

// function FirstButton(){
//     return(
//         <button>First Button</button>
//     );
// }



export default function Board(){ 
    return (
        <main>
            <TitleBar title="Our Board" />
            <h1>Board Members</h1>

            <img src={aleena} alt="Photo of the IVP Alenna " />
            <img src={aye} alt="Photo of the treasurer Aye" />
            <img src={coda} alt="Photo of the president Coda" />
            <img src={raima} alt="Photo of secretary Raima" />
            <img src={saja} alt="Photo of engagedirector Saja" />
            <img src={yuppar} alt="Photo of EVP Yuppar" />
            
        </main>
    )
}