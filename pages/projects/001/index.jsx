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

function Gmail() {
  return (
    <svg
      width="46"
      height="46"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21.431 10.197c.117.671.175 1.352.174 2.033 0 3.042-1.088 5.615-2.98 7.356h.003C16.973 21.115 14.698 22 12 22a10 10 0 1 1 0-20 9.611 9.611 0 0 1 6.69 2.602l-2.855 2.855A5.434 5.434 0 0 0 12 5.957c-2.609 0-4.825 1.76-5.615 4.13a5.99 5.99 0 0 0 0 3.829h.004c.793 2.366 3.006 4.126 5.615 4.126 1.347 0 2.505-.345 3.402-.955h-.004a4.628 4.628 0 0 0 2-3.038H12v-3.85h9.431v-.002Z"></path>
    </svg>
  );
}

function Facebook() {
  return (
    <svg
      width="46"
      height="46"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.08 12.539c0-5.335-4.298-9.66-9.6-9.66-5.304.001-9.602 4.325-9.602 9.661 0 4.82 3.511 8.817 8.1 9.541v-6.75H8.542v-2.79h2.438v-2.13c0-2.421 1.434-3.758 3.627-3.758 1.05 0 2.149.188 2.149.188v2.376h-1.21c-1.192 0-1.564.745-1.564 1.51v1.812h2.661l-.425 2.791H13.98v6.75c4.59-.725 8.1-4.72 8.1-9.541Z"></path>
    </svg>
  );
}

export default index;
