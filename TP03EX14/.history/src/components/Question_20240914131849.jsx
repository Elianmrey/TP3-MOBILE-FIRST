import PropTypes from 'prop-types'

const Question = ({ data, handleOptionClick }) => (
    <div className="question-container">
        <h2>{data.question}</h2>
        <div className="options">
            {data.options.map((option, index) => (
                <button
                    key={index}
                    onClick={() => handleOptionClick(index)}
                    className="option-button">
                    {option}
                </button>
            ))}
        </div>
    </div>
);

export default Question;

Question.propTypes = {
    data: PropTypes.object.isRequired,
    handleOptionClick: PropTypes.func.isRequired
};
