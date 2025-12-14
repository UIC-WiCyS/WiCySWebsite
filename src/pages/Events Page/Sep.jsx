import TitleBar from "../../components/TitleBar.jsx";
import folderImg from "../../assets/picsEvents/folder.svg";
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
            src={folderImg}              
            alt="Welcome Back Mixer"
            className="event-img"
          />
          <h2>Involvement Fair</h2>
          <p><strong>Date & Time:</strong> 9/3/25 - 9/4/25, 11 AM - 3 PM  </p>
          <p><strong>Location:</strong> UH Lawn </p>
          <p><strong>Details:</strong> welcome mixer for everyone. We will be providing snacks pull up! </p>
          
  
        </div>
        <div className="event-card-active">
            <img
            src={folderImg}              
            alt="GBM"
            className="event-img"
          />
          <h2>GBM</h2>
          <p><strong>Date & Time:</strong> 9/8/25 </p>
          <p><strong>Location:</strong> "CDRLC 1413, 11 AM - 3 PM"  </p>
          <p><strong>Details:</strong> welcome mixer for everyone. We will be providing snacks pull up! </p>
          
  
        </div>
        <div className="event-card-active">
            <img
            src={folderImg}             
            alt="Intro To Cybersecurity"
            className="event-img"
          />
          <h2>Intro To Cybersecurity</h2>
          <p><strong>Date & Time:</strong> 9/15/25, 4 - 5 PM </p>
          <p><strong>Location:</strong> CDRLC 1413 </p>
          <p><strong>Details:</strong> welcome mixer for everyone. We will be providing snacks pull up! </p>
          
  
        </div>
        <div className="event-card-passed">
            <img
            src={folderImg}             
            alt="LuGxWiCyS"
            className="event-img"
          />
          <h2>LuGxWiCyS</h2>
          <p><strong>Date & Time:</strong> 9/23/25, 4-5 pm </p>
          <p><strong>Location:</strong> CDRLC 1413 </p>
          <p><strong>Details:</strong> welcome mixer for everyone. We will be providing snacks pull up! </p>
          
  
        </div>
       
       
           </div>
     

      </section>
    </main>
  );
}
