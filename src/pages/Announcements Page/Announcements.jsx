import React from 'react';
import "./Announcements.css"
import { announcements } from './Announcements.js';
import TitleBar from "../../components/TitleBar.jsx";
export default function Announcements(){ 
    return (
        <main>
            <TitleBar title="Announcements" />
                {/* banner */}
                <div className='announcements-banner'>
                    <p className='anno-banner-txt'>
                        you rock :)
                    </p>
                </div>
            <div className="announcements">

                {/* title */}
                <h3 className='announcements-text'>Stay up to date with us!</h3>

                {/* texts */}
                <div className='announcements'>
                    {announcements.map((item, id)=>(
                        <div key={id} className="announcements-card" style={{backgroundColor: id % 2 == 0 ? "#C7DE83":"#E899DC", textAlign: id%2==0 ? "right" : "left", alignSelf: id%2==0 ? "end" : "start", borderRadius: id%2==0 ? "50px 50px 5px 50px" : "50px 50px 50px 5px"}}>
                            <p>
                                {item.body}
                            </p>
                            <p>
                                {item.date}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}