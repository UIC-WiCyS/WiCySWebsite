import TitleBar from "../../components/TitleBar.jsx";
import folderImg from "../../assets/picsEvents/folder.svg";
import BackButton from "../../components/BackButton.jsx";
import "./May.css"; 

export default function May() {
  return (
    <main className="may-page">
      <TitleBar title="May Events" />

      <section className="may-content">
        <BackButton />
        <h2>Welcome to May 🎉</h2>
        <p> Have a great Summer, see you next fall! </p>

        <div className="event-grid">
        {/* <div className="event-card-active">
            <img
            src={folderImg}              
            alt="Welcome Back Mixer"
            className="event-img"
          />
          <h2>Welcome Back Mixer</h2>
          <p><strong>Date & Time:</strong> 8/25/25 </p>
          <p><strong>Location:</strong> CDRLC 1413 </p>
          <p><strong>Details:</strong> welcome mixer for everyone. We will be providing snacks pull up! </p>
          
  
        </div> */
}
        
       
        </div>

      </section>
    </main>
  );
}
