import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map((option, index) => {
        return (
          <li key={index}>
            <button type="button" onClick={onLeaveFeedback}>
              {makeFirstLetterToUperCase(option)}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FeedbackOptions;

function makeFirstLetterToUperCase(word) {
  const arrayFromWord = word.split('');
  const bigLetter = arrayFromWord[0].toUpperCase();
  arrayFromWord.splice(0, 1, bigLetter).join('');
  return arrayFromWord;
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
