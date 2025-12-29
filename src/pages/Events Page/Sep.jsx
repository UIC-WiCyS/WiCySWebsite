import TitleBar from "../../components/TitleBar.jsx";
import involvementFair from "../../assets/picsEvents/involvementFair.png";
import sepGBM from "../../assets/picsEvents/sepGBM.JPG";
import introToCyber from "../../assets/picsEvents/introToCyber.png";
import wicysXlug from "../../assets/picsEvents/wicysXlug.png";
import "./Sep.css"; 

export default function Sep() {
  return (
    <main className="sep-page">
      <TitleBar title="September Events" />

      <section className="sep-content">
        <h2>Welcome to September 🎉</h2>
        <p>Here are all the events happening this month:</p>

        <div className="event-grid">
        <div className="event-card-active">
            <img
            src={involvementFair}              
            alt="Involvement Fair"
            className="event-img"
          />
          <h2>Involvement Fair</h2>
          <p><strong>Date & Time:</strong> 9/3/25 - 9/4/25, 11 AM - 3 PM  </p>
          <p><strong>Location:</strong> UH Lawn </p>
          <p><strong>Details:</strong> Come see what wicys is all about at UH Lawn! </p>
          
  
        </div>
        <div className="event-card-active">
            <img
            src={sepGBM}              
            alt="GBM"
            className="event-img"
          />
          <h2>GBM</h2>
          <p><strong>Date & Time:</strong> 9/8/25 </p>
          <p><strong>Location:</strong> CDRLC 1413, 5 PM - 6 PM  </p>
          <p><strong>Details:</strong> Our first general board meeting of the semester. We will be going over what WiCyS entails. </p>
          
  
        </div>
        <div className="event-card-active">
            <img
            src={introToCyber}             
            alt="Intro To Cybersecurity"
            className="event-img"
          />
          <h2>Intro To Cybersecurity</h2>
          <p><strong>Date & Time:</strong> 9/15/25, 4 PM - 5 PM </p>
          <p><strong>Location:</strong> EIB 224 </p>
          <p><strong>Details:</strong> An event to learn what cybersecurity is and why it matters. We’ll cover what blue teaming (defense) and red teaming (offense) are all about, and share possible job paths you can take in the field. Perfect for anyone curious about getting started in cybersecurity! </p>
          
  
        </div>
        <div className="event-card-passed">
            <img
            src={wicysXlug}             
            alt="LuGxWiCyS"
            className="event-img"
          />
          <h2>LuGxWiCyS</h2>
          <p><strong>Date & Time:</strong> 9/23/25, 4-5 pm </p>
          <p><strong>Location:</strong> SEO 1000 </p>
          <p><strong>Details:</strong> This event shows how attackers can use Nmap to scan a target VM and map out its open ports and services. On the defense side, participants will learn to catch and analyze that same scan in real time using Wireshark, helpful to have very basic linux or coding knowledge </p>
          
  
        </div>
       
       
           </div>
     

      </section>
    </main>
  );
}
