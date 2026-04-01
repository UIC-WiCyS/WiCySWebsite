import TitleBar from "../../components/TitleBar.jsx";
import folderImg from "../../assets/picsEvents/folder.svg";
import introToWireshark from "../../assets/picsEvents/introToWireshark.png";
import "./Jan.css"; 

export default function Jan() {
  return (
    <main className="jan-page">
      <TitleBar title="January Events" />

      <section className="jan-content">
        <h2>Welcome to January 🎉</h2>
        <p>Here are all the events happening this month:</p>

        <div className="event-grid">
        <div className="event-card-passed">
            <img
            src={introToWireshark}              
            alt="Intro to Wireshark: Find the Rotten Tomato "
            className="event-img"
          />
          <h2>Intro to Wireshark: Find the Rotten Tomato</h2>
          <p><strong>Date & Time:</strong> 1/26/26 4-5 PM</p>
          <p><strong>Location:</strong> EIB 224 </p>
          <p><strong>Details:</strong> This technical workshop introduces students to Wireshark, a widely used and essential tool for network and cybersecurity professionals. Students will learn how to use Wireshark by exploring key features such as sql-like display filters and packet analysis techniques. The session will also include a beginner-friendly lab in which students will investigate network traffic to identify the “bad tomato” attempting to phish company employees. </p>
          <p>
            <strong>Slides: </strong>
              <a href="/slides/Intro-to-Wireshark.pdf" target="_blank">
                Intro to Wireshark Slides
              </a>
            </p>
  
      
        
        </div>
        </div>

      </section>
    </main>
  );
}
