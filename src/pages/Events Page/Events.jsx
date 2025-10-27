import TitleBar from "../../components/TitleBar.jsx";
import folderImg from "../../assets/picsEvents/folder.svg";


export default function Events() {
    return (
        <main>
            <TitleBar title="Upcoming Events" />  
        
    
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "2rem",
          justifyItems: "center",
          marginTop: "3rem",
        }}
      >
        {[...Array(6)].map((_, i) => (
          <button
            key={i}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <img
              src={folderImg}
              alt={`Folder ${i + 1}`}
              style={{
                width: "220px",
                transition: "transform 0.2s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </button>
        ))}
      </div>
        </main>     
    )
}
