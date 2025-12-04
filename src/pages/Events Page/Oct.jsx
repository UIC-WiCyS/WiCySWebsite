import TitleBar from "../../components/TitleBar.jsx";
import folderImg from "../../assets/picsEvents/folder.svg";
import "./Oct.css"; 

export default function Oct() {
  return (
    <main className="oct-page">
      <TitleBar title="October Events" />

      <section className="oct-content">
        <h2>Welcome to October 🎉</h2>
        <p>Here are all the events happening this month:</p>

        <div className="event-grid">
        <div className="event-card-active">
            <img
            src={folderImg}              
            alt="Welcome Back Mixer"
            className="event-img"
          />
          <h2>Welcome Back Mixer</h2>
          <p><strong>Date & Time:</strong> 8/25/25 </p>
          <p><strong>Location:</strong> CDRLC 1413 </p>
          <p><strong>Details:</strong> welcome mixer for everyone. We will be providing snacks pull up! </p>
          
  
        </div>
        <div className="event-card-active">
            <img
            src={folderImg}              
            alt="Welcome Back Mixer"
            className="event-img"
          />
          <h2>Zebra Talk</h2>
          <p><strong>Date & Time:</strong> 8/28/25 </p>
          <p><strong>Location:</strong> CDRLC 1413 </p>
          <p><strong>Details:</strong> welcome mixer for everyone. We will be providing snacks pull up! </p>
          
  
        </div>
        <div className="event-card-active">
            <img
            src={folderImg}             
            alt="Welcome Back Mixer"
            className="event-img"
          />
          <h2>GBM</h2>
          <p><strong>Date & Time:</strong> 9/1/25 </p>
          <p><strong>Location:</strong> CDRLC 1413 </p>
          <p><strong>Details:</strong> welcome mixer for everyone. We will be providing snacks pull up! </p>
          
  
        </div>
        <div className="event-card-passed">
            <img
            src={folderImg}             
            alt="Welcome Back Mixer"
            className="event-img"
          />
          <h2>Hack-o-ween</h2>
          <p><strong>Date & Time:</strong> 9/4/25 </p>
          <p><strong>Location:</strong> CDRLC 1413 </p>
          <p><strong>Details:</strong> welcome mixer for everyone. We will be providing snacks pull up! </p>
          
  
        </div>
        </div>

      </section>
    </main>
  );
}
