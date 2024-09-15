import PropTypes from "prop-types";

export default function SelectedSpots({ spots }) {
    const total = spots.reduce((sum, spot) => sum + spot.totalPrice, 0);

    return (
        <div className="selected-spots">
            <h2>Pontos Selecionados</h2>
            {spots.length > 0 ? (
                <ul>
                    {spots.map((spot, index) => (
                        <li key={index}>
                            {spot.name} - R$ {spot.totalPrice} (Pessoas: {spot.people})
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nenhum ponto turístico selecionado.</p>
            )}
            <h3>Total: R$ {total}</h3>
        </div>
    );
}

SelectedSpots.propTypes = {
    spots: PropTypes.arrayOf(PropTypes.shape({}))
}
    ;
