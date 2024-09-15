import PropTypes from 'prop-types'

export default function Result({ score, total }) {
   return (
        <div className="result-container">
            <h2>Quiz Concluído!</h2>
            <p>
                Você acertou {score} de {total} questões.
            </p>
        </div>
    );
}

Result.propTypes = {
    score: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
      
};
