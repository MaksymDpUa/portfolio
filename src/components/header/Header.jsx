import css from './Header.module.css';

export default function Header() {
  return (
    <section className={css.header}>
      <div className={css.container}>
        <nav>
          <ul className={css.navList}>
            <li>
              <a href="#about-me" className={css.navListItem}>
                <p>About me</p>
              </a>
            </li>
            <li>
              <a href="#projects" className={css.navListItem}>
                <p>Projects</p>
              </a>
            </li>
            <li>
              <a href="#contacts" className={css.navListItem}>
                <p>Contacts</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
