import "./Events.css"
import { eventsData } from "./eventsData";
import TitleBar from "../../components/TitleBar.jsx";

export default function Events() {
	return (
		<main>
			<div className = "TitleBar">
				<TitleBar title= "Upcoming Events"/>
			</div>

			<div className="events-main">
				{Array.from(eventsData).map((semester, i) => (
					<section className="events-section" key={i}>
						<h1 className="events-title">{semester.name}</h1>
						<div className="flyers-container">
							{/* no events */}
							{(semester.events == [] || semester.events.length == 0) && 
								<p>No events for now. Come back later!</p>
							}

							{Array.from(semester.events).map((item)=>
								<div key={item.img}>
									{/* <img src={new URL(`../../assets/eventFlyers/${item.img}`, import.meta.url).href} alt={item.alt} />  */}
									<img className="flyer" src={`eventFlyers/${item.img}`} alt={item.alt} /> 
								</div>
							)}
						</div>
					</section>
				))}
			</div>
			
		</main>
	)
}
