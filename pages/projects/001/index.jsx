import Nav from '../../../components/navbar/Nav';
import style from './Reto.module.css';
import Image from 'next/image';
import nature from './nature.jpg';
function index() {
  return (
    <div>
      <Nav />
      <div className={style.retoContainer}>
        <Reto />
      </div>
    </div>
  );
}

function Reto() {
  return (
    <div className={style.container}>
      <div className={style.box1}>
        <h2 className={style.title}>Create account</h2>
        <form className={style.form}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
          <label htmlFor="email">Email address:</label>
          <input type="email" id="email" />
          <label htmlFor="pass">Password:</label>
          <input type="password" id="pass" />
          <button type="submit">Register</button>
        </form>
      </div>
      <div className={style.box2}>
        <Image
          src={nature}
          layout="fill"
          width={700}
          height={475}
          style={{ borderRadius: '0 20px 20px 0' }}
        />
      </div>
    </div>
  );
}

export default index;
