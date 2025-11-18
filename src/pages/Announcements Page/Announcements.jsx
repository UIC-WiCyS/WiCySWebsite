import React from 'react';
import "./Announcements.css"
import { announcements } from './Announcements.js';
import TitleBar from "../../components/TitleBar.jsx";
export default function Announcements(){ 
    const [featured, ...older] = announcements;

    return (
        <main>
            <TitleBar title="Announcements" />
            <div className="announcements">
                <aside className="directory-card">
                    <ul>
                        {announcements.map((a, index) => (
                            <li key={a.id}>
                                {index === 0 && <span className="tag-new"></span>}
                                <a href={`#${a.id}`}>{a.summary}</a>
                            </li>
                        ))}
                    </ul>
                </aside>
                
                {/* for newest blog post to always be featured on top of page */}
                <section id={featured.id} className="announcement-card featured-card">
                        <header>
                            <h3>{featured.date} {featured.title}</h3>
                            <p className="announcement-meta">By {featured.author}</p>
                        </header>
                        <p className="announcement-body">
                            {featured.body}
                        </p>
                </section>

                {older.map(a => (
                    <article id = {a.id} key = {a.id} className="announcement-card wide-card">
                        <header>
                            <h3>{a.date} {a.title}</h3>
                            <p className="announcement-meta">By {a.author}</p>
                        </header>
                        <p className="announcement-body">
                            {a.body}
                        </p>
                    </article>
                ))}
            </div>
        </main>
    )
}