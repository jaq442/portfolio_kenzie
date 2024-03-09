import { React } from "react";

export const Contact = () => {
  return (
    <section id="contact-section" className="background-black">
      <div className="container-height container ">
        <h2 className="title extra-big light-color" href="#contact-section">
          CONTATO
        </h2>
        <p className="paragraph big light-color">
          Gostou dos projetos? Entre em contato.
        </p>

        <div>
          <div>
            <span className="inline">
              <p className="paragraph  medium light-color">Email:</p>
              <a href="" className="paragraph medium light-color underline">
                jaquelinejhirose@gmail.com
              </a>
            </span>
            <span className="inline">
              <p className="paragraph  medium light-color">Whatsapp:</p>
              <a
                href="https://wa.me/5511943067173"
                className="paragraph medium light-color underline"
              >
                (11) 94306-7173
              </a>
            </span>
          </div>

          <span className="inline">
            <p className="paragraph medium light-color">Social media:</p>
            <a href="https://www.linkedin.com/in/jaquelineoli/">
              <p className="paragraph  medium light-color underline">
                Linkedin
              </p>
            </a>
            <a href="https://github.com/jaq442">
              <p className="paragraph medium light-color underline">GitHub</p>
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};
