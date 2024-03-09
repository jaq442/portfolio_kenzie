import { React } from "react";
import styles from "./styles.module.scss";
import data from "../../../data/data.jsx";

export const Projects = () => {
  return (
    <section id="projects-section" className="background-light">
      <div className={`container-height container`}>
        <div className="right">
          <h2 className=" title right extra-big dark-color">PROJETOS</h2>
        </div>

        <ul className={styles.containerProjects}>
          {data.map((project) => (
            <li className={styles.projectCard} key={project.id}>
              <a href={project.deploy}>
                <img className={styles.icon} src={project.photo} />
              </a>
              <h3 className="paragraph big">{project.name}</h3>
              <p className="paragraph small dark-color">
                {project.description}
              </p>
              {project.repository === 0 ?  <a className="hidden">
                
                </a> : (<a href={project.repository}>
                <p className="paragraph link small dark-color">Repositório Front-End</p>
              </a> ) }
              {project.repositoryBack === 0 ? (
                <a className="hidden">
                
                </a>
              ) : (
                <a href={project.repositoryBack}>
                  <p className="paragraph link small dark-color">
                    Repositório Back-End
                  </p>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
