import TitleBar from "../../components/TitleBar.jsx";
import folderImg from "../../assets/picsEvents/folder.svg";
import "./Feb.css"; 

export default function Feb() {
  return (
    <main className="feb-page">
      <TitleBar title="Febuary Events" />

      <section className="feb-content">
        <h2>Welcome to Febuary 🎉</h2>
        <p>Here are all the events happening this month:</p>

        <div className="event-grid">
        <div className="event-card-passed">
            <img
            src={folderImg}              
            alt="WiCyS General Board Meeting GBM"
            className="event-img"
          />
          <h2>WiCyS General Board Meeting GBM</h2>
          <p><strong>Date & Time:</strong> 2/2/26, 4-5 PM </p>
          <p><strong>Location:</strong> CDRLC 1407 </p>
          <p><strong>Details:</strong> Introduction to wicys! </p>
          
  
        </div>
        <div className="event-card-passed">
            <img
            src={folderImg}              
            alt="Digital Forensics Using Autopsy"  
            className="event-img"
          />
          <h2>Digital Forensics Using Autopsy </h2>
          <p><strong>Date & Time:</strong> 2/3/26, 4 - 5:30 PM </p>
          <p><strong>Location:</strong> EIB 224 </p>
          <p><strong>Details:</strong> Technical Event in which the students will be taught how to use autopsy(a forensic imaging tool) A guide will be given before the event in order to help students download the proper tool. Students with Mac's will have to create a virtual machine (tutorial will be given before event in guide) and all students will have to download Autopsy. There will be help with creating the VM during the event but it is preferred that the student has started this process on their own. </p>
          
  
        </div>
        <div className="event-card-passed">
            <img
            src={folderImg}             
            alt="Caught the lovebug, Valentines day CTF"
            className="event-img"
          />
          <h2>Caught the lovebug, Valentines day CTF</h2>
          <p><strong>Date & Time:</strong> 2/11/26, 5-7 PM</p>
          <p><strong>Location:</strong> ARC 240 </p>
          <p><strong>Details:</strong> Valentines Day Themed CTF, Food: Jimmy John's --- Dress Code for team: Something Red or Pink </p>
          
  
        </div>
        <div className="event-card-passed">
            <img
            src={folderImg}             
            alt="WiCys x Overlay Valentines Day bake sale"
            className="event-img"
          />
          <h2>WiCys x Overlay Valentines Day bake sale</h2>
          <p><strong>Date & Time:</strong> 2/12/26 </p>
          <p><strong>Location:</strong> pick up at CDRLC 2439, 11 AM - 5 PM </p>
          <p><strong>Details:</strong> WiCys is partnering with Overlay Cafe (near Taco Bell on Taylor) to sell Valentine’s Day-themed croffles. Croffles will be sold online only for pickup at the WiCys room, so there’s no need to walk in the cold. Each croffle costs $6 and 2 for $11 and is available in Oreo, Biscoff, or Strawberry flavors. Every croffle purchase includes an exclusive cute sticker.  Pipe cleaner flowers will also be sold for $3 each or 2 for $5 and will be available for pickup! Pickup will take place from 11:00 AM to 5:00 PM </p>
          
  
        </div>
        <div className="event-card-passed">
            <img
            src={folderImg}             
            alt="Burp Suite Tutorial"
            className="event-img"
          />
          <h2>Burp Suite Tutorial</h2>
          <p><strong>Date & Time:</strong> 2/16/26, 4-5 PM</p>
          <p><strong>Location:</strong> EIB 224 </p>
          <p><strong>Details:</strong> Technical event where students learn to use the community version of Burp Suite. The students will be given a demo where we provide them with a basic understanding of how to use the tool/how to download. We then set them off to try out a lab, anyone who finishes gets free stickers made by us.  </p>
          
  
        </div>
        <div className="event-card-passed">
            <img
            src={folderImg}             
            alt="Ignite the Flame"
            className="event-img"
          />
          <h2> Ignite the Flame</h2>
          <p><strong>Date & Time:</strong> 2/19/26, 5-7 PM</p>
          <p><strong>Location:</strong> ARC 240 </p>
          <p><strong>Details:</strong> CTF!! </p>
          
  
        </div>
        <div className="event-card-passed">
            <img
            src={folderImg}             
            alt="Into the Flame"
            className="event-img"
          />
          <h2> Into the Flame</h2>
          <p><strong>Date & Time:</strong> 2/25/26, 5-7 PM</p>
          <p><strong>Location:</strong> ARC 240 </p>
          <p><strong>Details:</strong> CTF!!! </p>
          
  
        </div>
        </div>

      </section>
    </main>
  );
}
