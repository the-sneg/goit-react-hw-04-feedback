import s from './FeedbackOptions.module.css';
import { ButtonHover } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.buttonList}>
      {options.map(name => {
        return (
          <ButtonHover
            key={name}
            name={name}
            onClick={() => onLeaveFeedback(name)}
          >
            {name}
          </ButtonHover>
        );
      })}
    </div>
  );
};
