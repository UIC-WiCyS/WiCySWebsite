import TitleBar from "../../components/TitleBar.jsx";
import mandiant from "../../assets/picsEvents/mandiant.png";
import gathers from "../../assets/picsEvents/gathers.png";
import BackButton from "../../components/BackButton.jsx";


import "./Nov.css"; 

export default function Nov() {
  return (
    <main className="nov-page">
      <TitleBar title="November Events" />

      <section className="nov-content">
        <BackButton />
        <h2>Welcome to November 🎉</h2>
        <p>Here are all the events happening this month:</p>

        <div className="event-grid">
        <div className="event-card-active">
            <img
            src={mandiant}              
            alt="MandiantxWiCyS"
            className="event-img"
          />
          <h2>MandiantxWiCyS</h2>
          <p><strong>Date & Time:</strong> 11/3/25, 6 PM - 7 PM </p>
          <p><strong>Location:</strong> ARC 135</p>
          <p><strong>Details:</strong> Mandiant, Inc. is an American cybersecurity firm! Learn more about them. </p>
          
  
        </div>
        
        
        <div className="event-card-passed">
            <img
            src={gathers}             
            alt="Gathers Fundraiser"
            className="event-img"
          />
          <h2>Gathers Fundraiser</h2>
          <p><strong>Date & Time:</strong> 12/3/25, ALL DAY! </p>
          <p><strong>Location:</strong> Gathers Tea Bar</p>
          <p><strong>Details:</strong> Support WiCys by buying a drink at gathers and clicking the gathers option at checkout! For every drink purchased under WiCys, a dollar is donated. Clicking the WiCys option DOES NOT increase the price of your drink. The fundraising runs all day December 3rd. </p>
          
  
        </div>
        </div>

      </section>
    </main>
  );
}
