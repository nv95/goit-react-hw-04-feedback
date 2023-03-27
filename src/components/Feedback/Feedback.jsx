import { FeedbackBut } from './Feedback.styled';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const Feedback = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    return (
      <FeedbackBut
        key={nanoid()}
        onClick={() => {
          onLeaveFeedback(option);
        }}
        type="button"
      >
        {option}
      </FeedbackBut>
    );
  });
};

Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
