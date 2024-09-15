import { useState } from "react";
import PropTypes from "prop-types";

export default function TouristSpotDetails({ spot, onAddSpot }) {
    const [people, setPeople] = useState(1);

    const handleAddSpot = () => {
        onAddSpot({ ...spot, people, totalPrice: spot.price * people });
    };

    return (
        <div className="spot-details">
            <h2>{spot.name}</h2>
            <p>{spot.info}</p>
            <p>Transporte: {spot.transport}</p>
            <p>Preço por pessoa: R$ {spot.price}</p>
            <div>
                <label>Número de pessoas: </label>
                <input type="number" value={people} onChange={(e) => setPeople(e.target.value)} min="1" />
            </div>
            <button onClick={handleAddSpot}>Adicionar à lista</button>
        </div>
    );
}

TouristSpotDetails.propTypes = {
    spot: PropTypes.object.isRequired,
    onAddSpot: PropTypes.func.isRequired,
    
};
