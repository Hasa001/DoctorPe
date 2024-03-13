import './FacilityCard.css'
import { useNavigate } from "react-router-dom"

export const FacilityCard = ({ image, background, title, sub, onClick }) => {
    const navigate = useNavigate()
    return <div onClick={() => navigate("/searchDoctor")} className="facility-card-box hover:shadow-2xl hover:shadow-sky-300">
        <div className="facility-card-image-container " style={{ backgroundColor: `${background}` }}>
            <img src={image} alt={title} />
        </div>
        <div className="facility-card-info">
            <p>{title}</p>
            <p>{sub}</p>
        </div>
    </div>
}