import TitleBar from "../../components/TitleBar.jsx";
import './Board.css'

import {Link} from "react-router-dom"
import { boardInfo26 } from "./data/board26-27.js";


function getRole(role){
            
    if (role.toLowerCase().includes("chair") || role.toLowerCase().includes("president")){
        return "typeA"; /* assigned to presidents and chair members*/
    }
    return "typeB"; /* assigned to those in the committe */
}

export default function Board26_27(){ 

    return (
        <main>

            <div className = "TitleBar">
                <TitleBar title= "Our Board"/>
            </div>

            <div className = "yearButtons">
                <Link to= "/board/2026_2027" className = "currYear">
                    2026 - 2027                
                </Link>

                <Link to= "/board/2025_2026" className = "Button2025_26">
                    2025 - 2026
                </Link>
            </div>

            <div className="team">    
                <h1 className="teamName"> Executive Board </h1> 
                <div className = "teamMember">
                    {boardInfo26.prez.map((member,index) => (
                        <div key={index} className={`member ${getRole(member.role)}`}>
                            <a href={member.linkedin}>
                                {member.photo && <img src={`${import.meta.env.BASE_URL}.${member.photo}`}/>}
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </a>
                        </div>
                    ))}
                </div>
                <div className = "teamMember">
                    {boardInfo26.exec.map((member,index) => (
                        <div key={index} className={`member ${getRole(member.role)}`}>
                            <a href={member.linkedin}>
                                {member.photo && <img src={`${import.meta.env.BASE_URL}.${member.photo}`}/>}
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="team">
                <h1 className="teamName"> Communications </h1> 
                <div className = "teamMember">
                    {boardInfo26.comms.map((member,index) => (
                        <div key={index} className={`member ${getRole(member.role)}`}>
                            <a href={member.linkedin}>
                                {member.photo && <img src={`${import.meta.env.BASE_URL}.${member.photo}`}/>}
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="team">
                <h1 className="teamName"> Social Media </h1> 
                <div className = "teamMember">
                    {boardInfo26.media.map((member,index) => (
                        <div key={index} className={`member ${getRole(member.role)}`}>
                            <a href={member.linkedin}>
                                {member.photo && <img src={`${import.meta.env.BASE_URL}.${member.photo}`}/>}
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="team"> 
                <h1 className="teamName"> Web Dev </h1>
                <div className = "teamMember">
                    {boardInfo26.web.map((member,index) => (
                        <div key={index} className={`member ${getRole(member.role)}`}>
                            <a href={member.linkedin}>
                                {member.photo && <img src={`${import.meta.env.BASE_URL}.${member.photo}`}/>}
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            
        </main>
        
    );
}