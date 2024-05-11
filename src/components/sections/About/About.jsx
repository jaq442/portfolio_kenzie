import { React } from "react";
import styles from "./styles.module.scss";
import Javascript from "../../../assets/javascript.png";
import ReactIcon from "../../../assets/react.png";
import NodeJsIcon from "../../../assets/nodejs.png";
import PostgresSQL from "../../../assets/postgres.png";
import eu from "../../../assets/eus.png";

export const About = () => {
  return (
    <>
      <section id="about-section" className="background-light">
        <div className="container-height container">
          <div className={styles.containerAbout}>
            <div className={styles.text}>
              <div>
                <div className="square background-black">
                  <h2 className="light-color title big">Olá,</h2>
                </div>
                <div className="square background-black">
                  <h2 className="light-color title medium">
                    eu sou a Jaqueline!
                  </h2>
                </div>
              </div>

              <p
                className={`paragraph light-black-color small ${styles.paragraphAbout}`}
              >
                Estudo Sistemas para Internet na Universidade Anhembi Morumbi e
                participei do bootcamp Kenzie Academy Fullstack, com projetos em
                Javascript, React, NodeJs, PostgreSQL e Wordpress. Tenho interesse nas
                áreas de programação front-end. Por minha
                afinidade com área de humanas cursei Relações Públicas,
                trabalhando na área e também como comissária de voo. Trajetória
                que me fez aprender muito sobre como lidar com situações
                inesperadas criando soluções mais criativas possíveis, trabalho
                em equipe e como o respeito e comunicação são peças fundamentais
                para nos relacionarmos com a pluralidade que é o ser humano.
                
              </p>
              <div className={styles.img}>
                <img className={styles.icon} src={Javascript} alt="Javascript"></img>
                <img className={styles.icon} src={ReactIcon} alt="React"></img>
                <img className={styles.icon} src={NodeJsIcon} alt="NodeJS"></img>
                <img className={styles.icon} src={PostgresSQL} alt="PostgreSQL"></img>
              </div>
            </div>
            <img className={styles.eus} src={eu} alt="Foto Jaqueline"></img>
          </div>
        </div>
      </section>
    </>
  );
};
