import { useNavigate } from "react-router-dom";
import "./BackButton.css";

export default function BackButton({ to = "/events", label = "← Back to Events" }) {
  const navigate = useNavigate();

  return (
    <div className="back-button-wrapper">
      <button
        className="back-button"
        onClick={() => navigate(to)}
      >
        {label}
      </button>
    </div>
  );
}