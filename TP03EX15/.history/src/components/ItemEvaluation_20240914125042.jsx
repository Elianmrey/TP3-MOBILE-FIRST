import PropTypes from "prop-types";

export default function ItemEvaluation({ item, onEvaluate }) {
    return (
        <div>
            <h2>{`Você gosta de ${item.title}?`}</h2>
            <button onClick={() => onEvaluate(item.id, 'like')}>Gosto</button>
            <button className="deslike-button" onClick={() => onEvaluate(item.id, 'dislike')}>Não Gosto</button>
        </div>
    );
}

ItemEvaluation.propTypes = {
    item: PropTypes.object.isRequired,
    onEvaluate: PropTypes.func.isRequired
}