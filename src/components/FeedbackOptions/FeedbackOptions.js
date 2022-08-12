import s from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onClick }) => {
  return (
    <ul className={s.buttonList}>
      <li className={s.item}>
        <button
          type="button"
          name="good"
          className={s.buttonGood}
          onClick={onClick}
        >
          Good
        </button>
      </li>
      <li className={s.item}>
        <button
          type="button"
          name="neutral"
          className={s.buttonNeutral}
          onClick={onClick}
        >
          Neutral
        </button>
      </li>
      <li className={s.item}>
        <button
          type="button"
          name="bad"
          className={s.buttonBad}
          onClick={onClick}
        >
          Bad
        </button>
      </li>
    </ul>
  );
};
