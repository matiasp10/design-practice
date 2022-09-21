import Hero from '../components/Hero/Hero';
import Nav from '../components/navbar/Nav';
import Projects from '../components/Projects/Projects';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav />
      <Hero />
      <Projects />
    </div>
  );
}
