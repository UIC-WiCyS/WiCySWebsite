import React, { useEffect, useRef } from 'react'
import "./Announcements.css"
import { announcements } from './Announcements.js';
import TitleBar from "../../components/TitleBar.jsx";
import Marquee from "react-fast-marquee";
import {CheckCheck, Heart} from "lucide-react";

export default function Announcements(){ 
    const announcement_end = useRef(null);
    
    useEffect(() => {
        announcement_end.current?.scrollIntoView({ behavior: "smooth", block: "start",});
    }, []);

    return (
        <main>
            <TitleBar title="Announcements" />
            {/* banner */}
            <div className='announcements-banner'>
                <Marquee autoFill={false} gradient={true} gradientColor="#384E77">
                    <p style={{padding: "0px 9px"}}>you rock :)</p>
                </Marquee>
            </div>

            <div className="announcements">

                {/* title */}
                <h3 className='announcements-head'>Stay up to date with us!</h3>

                {/* texts */}
                <div className='announcements-cont'>
                    {announcements.map((item, id, arr)=>(
                        <div key={id} style={{width: "100%", display: 'flex', flexDirection: 'column'}}>
                            {
                                id==0 && 
                                <p style={{color:"#C2CEAF", fontSize: "small"}}>{item.date}</p>
                            }
                            { // check if dates are the same
                                id!=0 && item.date!=announcements[id-1].date && 
                                <p style={{color:"#C2CEAF", fontSize: "small"}}>{item.date}</p>
                            }
                            <div className="announcements-card" style={{alignItems: id%2==0 ? "end" : "start"}}>
                                <div style={{display: "flex", alignItems: "center", gap: "1em", justifyContent: id%2==0 ? "end" : "start"}}>
                                    <p className="announcements-text" style={{textAlign: id%2==0 ? "right" : "left", backgroundColor: id % 2 == 0 ? "#C7DE83":"#E899DC", borderRadius: id%2==0 ? "50px 50px 5px 50px" : "50px 50px 50px 5px"}}>{item.body}</p>
                                    {/* heart symbol */}
                                    {
                                        id%2!=0 && 
                                        <Heart className="text-heart" color="#0F8B8D" strokeWidth={1} size={32} />
                                    }  
                                </div>
                                
                                <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem"}}>
                                    {/* time */}
                                    <p style={{color:"#C2CEAF", fontSize: "small", lineHeight: 3}}>{item.time}</p>
                                    
                                    {/* read symbol */}
                                    {
                                        id%2==0 && 
                                        <CheckCheck color="#0F8B8D" strokeWidth={1} size={16}/>
                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* dummy div */}
                <div ref={announcement_end} style={{scrollBehaviour: "smooth"}}/> 
            </div>
        </main>
    )
}