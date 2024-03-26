import css from './Hero.module.css';

export default function Hero() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>
          You're looking for a full-stack developer?
        </h2>
        <button type="button" className={css.mainButton}>
          Get in touch with me
        </button>
      </div>
    </section>
  );
}
