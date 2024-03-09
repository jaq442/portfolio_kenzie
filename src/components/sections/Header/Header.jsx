import React from "react";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <>
      <header className="background-black">
        <div className={`container-height container ${styles.containerHeader}`}>
          <div className={`${styles.containerName}`}>
            <div className={styles.line}></div>
            <h2 className="paragraph white medium">JAQUELINE HIROSE</h2>
            <p className="paragraph white small">
              Web Developer | Sistemas para Internet
            </p>

            <p className="paragraph white small">
              Meu compromisso com a tecnologia é trazer soluções de forma
              inovadora e eficiente para facilitar a vida das pessoas.
            </p>
          </div>

            <nav className={styles.containerNav}>
              <ul class={styles.ul}>
                <li className="grow">
                  <a
                    className="title extra-big light-color grow"
                    href="#about-section"
                  >
                    SOBRE
                  </a>
                </li>
                <li className="grow-project">
                  <a
                    className="title extra-big light-color"
                    href="#projects-section"
                  >
                    PROJETOS
                  </a>
                </li>
                <li className="grow">
                  <a
                    className="title extra-big light-color grow"
                    href="#contact-section"
                  >
                    CONTATO
                  </a>
                </li>
              </ul>
            </nav>
      
        </div>
      </header>
    </>
  );
};
