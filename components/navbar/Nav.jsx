import style from './Nav.module.css';

function Nav() {
  return (
    <nav className={style.container}>
      <a href="/" className={style.link}>
        <span className={style.firstName}>MATIAS </span>{' '}
        <span className={style.lastName}> PETENATTI</span>
      </a>
    </nav>
  );
}

export default Nav;
