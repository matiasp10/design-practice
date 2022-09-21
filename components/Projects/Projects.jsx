import style from './Projects.module.css';
import { projects } from '../../data/projects';
function Projects() {
  return (
    <div className={style.container}>
      <div className={style.projects}>
        {projects.map((e) => {
          return (
            <div className={style.project}>
              <div className={style.info}>
                <h2 className={style.title}>{e.name}</h2>
                <p className={style.description}>{e.description}</p>
              </div>
              <div className={style.buttons}>
                <a className={style.github}>Github</a>
                <a className={style.demo} href={e.link}>
                  Demo Live
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
