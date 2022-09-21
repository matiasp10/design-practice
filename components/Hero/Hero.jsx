import style from './Hero.module.css';

function Hero() {
  return (
    <div className={style.container}>
      <div className={style.hero}>
        <h1 className={style.title}>Todos mis retos de Frontend</h1>
      </div>
    </div>
  );
}

export default Hero;
