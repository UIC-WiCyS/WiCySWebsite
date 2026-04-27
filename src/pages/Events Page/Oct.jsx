import TitleBar from "../../components/TitleBar.jsx";
import zebra from "../../assets/picsEvents/zebra.png";
import introToRiskManagement from "../../assets/picsEvents/introToRiskManagement.JPG";
import johnTheRipper from "../../assets/picsEvents/johnTheRipper.png";
import morningstar from "../../assets/picsEvents/morningstar.png";
import sidley from "../../assets/picsEvents/sidley.png";
import hackoween from "../../assets/picsEvents/hackoween.JPG";
import wicysXrasoi from "../../assets/picsEvents/wicysXrasoi.png";
import wicysXcoldstone from "../../assets/picsEvents/wicysXcoldstone.png";
import folderImg from "../../assets/picsEvents/folder.svg";
import BackButton from "../../components/BackButton.jsx";
import "./Oct.css"; 


export default function Oct() {
  return (
    <main className="oct-page">
      <TitleBar title="October Events" />

      <section className="oct-content">
        <BackButton />
        <h2>Welcome to October 🎉</h2>
        <p>Here are all the events happening this month:</p>

        <div className="event-grid">
        <div className="event-card-active">
            <img
            src={zebra}              
            alt="WiCySxZebra"
            className="event-img"
          />
          <h2>WiCySxZebra</h2>
          <p><strong>Date & Time:</strong> 10/1/25, 5 PM - 6 PM </p>
          <p><strong>Location:</strong> EIB 124 </p>
          <p><strong>Details:</strong> Job how they secured a cyber job,day in the life of what they do in their job, what tools they recommend to learn based off of what they do and what skills they reccomend you should study if you want to x cyber job. heres how to advance your career </p>
          <p>
            <strong>Slides: </strong>
              <a href="#/WiCySWebsite/slides/WiCys-October-2025-Zebra.pdf" target="_blank">
                 Zebra Slides
              </a>
            </p>
          
  
        </div>
        <div className="event-card-active">
            <img
            src={introToRiskManagement}              
            alt="Intro to Cybersecurity: Risk Management"
            className="event-img"
          />
          <h2>Intro to Cybersecurity: Risk Management</h2>
          <p><strong>Date & Time:</strong> 10/6/25, 5 PM - 6 PM  </p>
          <p><strong>Location:</strong> EIB 124</p>
          <p><strong>Details:</strong> Helps students get a grasp of what cybersecurity is and it's importance of risk management with beginner level case studies. </p>
          <p>
            <strong>Slides: </strong>
              <a href="#/WiCySWebsite/slides/WiCyS-Network-Security-Lab-2025.pdf" target="_blank">
                 Network Security Lab
              </a>
            </p>
          
  
        </div>
        <div className="event-card-active">
            <img
            src={wicysXcoldstone}             
            alt="WiCys X Coldstone Event "
            className="event-img"
          />
          <h2>WiCys X Coldstone Event </h2>
          <p><strong>Date & Time:</strong> 10/9/25, 4 PM - 6 PM </p>
          <p><strong>Location:</strong> MRH Coldstone </p>
          <p><strong>Details:</strong> From 11am - 9pm Students can go to Coldstone and donate to us buy purchasing Ice cream! They also have a chance to interact with some of the board from 4-6. In order for the donation to be successful,you must tell the cashier that a part of your purchase will go to WiCys! </p>
          
          

        </div>
        <div className="event-card-passed">
            <img
            src={johnTheRipper}             
            alt="Intro to John the Ripper"
            className="event-img"
          />
          <h2>Intro to John the Ripper</h2>
          <p><strong>Date & Time:</strong> 10/13/25, 5 PM - 6 PM </p>
          <p><strong>Location:</strong> EIB 124 </p>
          <p><strong>Details:</strong> An introduction to John the Ripper. Which is a well known free password cracking software tool! </p>
          <p>
            <strong>Slides: </strong>
              <a href="#/WiCySWebsite/slides/John-the-Ripper-Presentation.pdf" target="_blank">
                 John the Ripper Slides
              </a>
            </p>
          
  
        </div>
        <div className="event-card-passed">
            <img
            src={morningstar}             
            alt="Morningstar"
            className="event-img"
          />
          <h2>Morningstar Guest Speaker</h2>
          <p><strong>Date & Time:</strong> 10/22/25, 5 PM - 6 PM </p>
          <p><strong>Location:</strong> EIB 124 </p>
          <p><strong>Details:</strong> Casual chat about career navigation within cybersecurity, what certifications to get, how IT experience helps, where to apply for interships. Oriented around people who aren't CS majors or people who aren't sure what career path to take.  </p>
          <p>
            <strong>Slides: </strong>
              <a href="#/WiCySWebsite/slides/Morningstar.pdf" target="_blank">
                 Morningstar Guest Speaker Slides
              </a>
            </p>
          
  
        </div>
         <div className="event-card-passed">
            <img
            src={wicysXrasoi}             
            alt="Diwali WiCys x Rasoi Pop up"
            className="event-img"
          />
          <h2>Diwali WiCys x Rasoi Pop up</h2>
          <p><strong>Date & Time:</strong> 10/28/25, 12 PM - 3 PM </p>
          <p><strong>Location:</strong> UIC Quad </p>
          <p><strong>Details:</strong> We're selling diwali/south asian snacks! Come support WiCyS! </p>
          
  
        
        </div>
         <div className="event-card-passed">
            <img
            src={sidley}             
            alt="WiCySxSidley"
            className="event-img"
          />
          <h2>WiCySxSidley</h2>
          <p><strong>Date & Time:</strong> 10/28/25, 5 PM - 6 PM </p>
          <p><strong>Location:</strong> EIB 124 </p>
          <p><strong>Details:</strong> What cyber security is like in the field, a day in the life of Incident Response, and walk through an investigation. </p>
          <p>
            <strong>Slides: </strong>
              <a href="#/WiCySWebsite/slides/Sidley.pdf" target="_blank">
                 Sidley Guest Speaker Slides
              </a>
            </p>
          
        </div>
        <div className="event-card-passed">
            <img
            src={hackoween}             
            alt="Hack-o-ween"
            className="event-img"
          />
          <h2> Hack-o-ween</h2>
          <p><strong>Date & Time:</strong> 10/29/25, 5:30 PM - 7 PM </p>
          <p><strong>Location:</strong> ARC 242 </p>
          <p><strong>Details:</strong> Navigate a simple website with 3-5 different prompts, if you input incorrect answer a jumpscare pops up, otherwise proceed to next prompt. Lets see who wins? Muhaha </p>
          <p>
            <strong>Slides: </strong>
              <a href="#/WiCySWebsite/slides/Wicys-Hackoween.pdf" target="_blank">
                 Hackoween CTF Slides
              </a>
            </p>
          
        </div>

        </div>
        

      </section>
    </main>
  );
}
