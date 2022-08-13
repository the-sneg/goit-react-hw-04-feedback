import s from './FeedbackOptions.module.css';
import { StatisicItem } from './Statistic.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.buttonList}>
      {options.map(name => {
        return (
          <StatisicItem
            key={name}
            name={name}
            onClick={() => onLeaveFeedback(name)}
          >
            {name}
          </StatisicItem>
        );
      })}
    </div>
  );
};
