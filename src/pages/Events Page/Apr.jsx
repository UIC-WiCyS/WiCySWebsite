import TitleBar from "../../components/TitleBar.jsx";
import folderImg from "../../assets/picsEvents/folder.svg";
import tamingTheDragon from "../../assets/picsEvents/tamingTheDragon.png";
import wicysXOverlayApr from "../../assets/picsEvents/wicysXOverlayApr.png";
import cyberEscapeRoom from "../../assets/picsEvents/cyberEscapeRoom.png";
import sessionHijacking from "../../assets/picsEvents/sessionHijacking.png";
import protocols from "../../assets/picsEvents/protocols.png";
import honeypotsAndDeceptions from "../../assets/picsEvents/honeypotsAndDeceptions.png";
import thriftShop from "../../assets/picsEvents/thriftShop.png";


import "./Apr.css"; 

export default function Apr() {
  return (
    <main className="apr-page">
      <TitleBar title="April Events" />

      <section className="apr-content">
        <h2>Welcome to April 🎉</h2>
        <p>Here are all the events happening this month:</p>

        <div className="event-grid">
        <div className="event-card-passed">
            <img
            src={tamingTheDragon}              
            alt="Taming the Dragon: Ghidra Workshop"
            className="event-img"
          />
          <h2>Taming the Dragon: Ghidra Workshop</h2>
          <p><strong>Date & Time:</strong> 4/2/26, 5-7 PM </p>
          <p><strong>Location:</strong> ARC 240 </p>
          <p><strong>Details:</strong> Workshop for students that will feature using Ghidra (a decompiler) to inspect Malware and see how Cyber Professionals go about removing/investigating malware </p>
          
  
        </div>
        <div className="event-card-passed">
            <img
            src={wicysXOverlayApr}              
            alt="WiCyS X Overlay Collab"
            className="event-img"
          />
          <h2>WiCyS X Overlay Collab</h2>
          <p><strong>Date & Time:</strong> 4/07/26 </p>
          <p><strong>Location:</strong> Overlay </p>
          <p><strong>Details:</strong> Collaboration with Overlay cafe! Make sure to mention wicys with your order! </p>
          
  
        </div>
        <div className="event-card-passed">
            <img
            src={cyberEscapeRoom}             
            alt="Cyber Escape Room"
            className="event-img"
          />
          <h2>Cyber Escape Room</h2>
          <p><strong>Date & Time:</strong> April 9th, 12-1 PM </p>
          <p><strong>Location:</strong> EIB 271 </p>
          <p><strong>Details:</strong> Teams race to solve a chain of easy puzzles hidden in a “digital evidence folder.” Each solved puzzle gives a code word/number. Combine them to unlock the final “vault” and win. </p>
          
  
        </div>
        <div className="event-card-active">
            <img
            src={sessionHijacking}             
            alt="Session Hijacking"
            className="event-img"
          />
          <h2>Session Hijacking</h2>
          <p><strong>Date & Time:</strong> 4/13/26, 5-6 PM</p>
          <p><strong>Location:</strong> EIB 224 </p>
          <p><strong>Details:</strong> Technical workshop about session hijacking! </p>
          
  
        </div>
        <div className="event-card-active">
            <img
            src={protocols}             
            alt="Protocols"
            className="event-img"
          />
          <h2> Protocols </h2>
          <p><strong>Date & Time:</strong> 4/16/26, 4-5 PM</p>
          <p><strong>Location:</strong> SELE 2264 </p>
          <p><strong>Details:</strong> Technical workshop about protocols in cyber security! </p>
          
  
        </div>
        <div className="event-card-active">
            <img
            src={honeypotsAndDeceptions}             
            alt="Honeypots and Deceptions"
            className="event-img"
          />
          <h2> Honeypots and Deceptions </h2>
          <p><strong>Date & Time:</strong> 4/21/26, 4-5 PM</p>
          <p><strong>Location:</strong> SELE 2264 </p>
          <p><strong>Details:</strong>  Honeypots and deception workshop. Attendees will learn how defenders use digital traps to catch attackers and deploy their own live canary token. </p>
          
        </div>
        <div className="event-card-active">
                    <img
                    src={thriftShop}             
                    alt="Thrift Fundraiser"
                    className="event-img"
                  />
                  <h2>Thrift Fundraiser</h2>
                  <p><strong>Date & Time:</strong> 4/23/26, 12-3 PM </p>
                  <p><strong>Location:</strong> Quad </p>
                  <p><strong>Details:</strong> Support Wicys by shopping and thrifting with us! </p>
                  
          
                </div>
        
        </div>

      </section>
    </main>
  );
}
