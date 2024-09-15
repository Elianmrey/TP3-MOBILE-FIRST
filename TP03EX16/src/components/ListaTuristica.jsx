import PropTypes from "prop-types";

export default function ListaTuristica({ spots, onSelectSpot }) {
    return (
        <div className="spot-list">
            {spots.map((spot) => (
                <div key={spot.id} className="spot-item" onClick={() => onSelectSpot(spot)}>
                    {spot.name}
                </div>
            ))}
        </div>
    );
}

ListaTuristica.propTypes =
{
    spots: PropTypes.arrayOf(PropTypes.shape({})),
    onSelectSpot: PropTypes.func.isRequired
    };
