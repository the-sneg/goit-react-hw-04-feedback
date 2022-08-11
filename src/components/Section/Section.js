import s from './Section.module.css';
export const Section = ({ title, children }) => {
  return (
    <section className={s.feedback}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};
