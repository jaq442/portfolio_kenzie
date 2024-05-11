import fullstack from "../assets/fullstack.png";
import nu from "../assets/nu.png";
import gitsearch from "../assets/gitsearch.png";
import crud from "../assets/crud.png";
import cowork from "../assets/cowork.png";
import ceramica from "../assets/ceramica.png";
import francisco from "../assets/francisco.png";

const data = [
  {
    id: 1,
    name: "Agenda de Contatos",
    description:
      "Projeto Final Kenzie Academy Fullstack | NodeJs, React, PostgreSQL",
    photo: fullstack,
    repository:
      "https://github.com/Kenzie-Academy-Brasil-Developers/fullstack-react-jaqueline/tree/main/my-react-app",
    repositoryBack:
      "https://github.com/Kenzie-Academy-Brasil-Developers/fullstack-nodejs-jaqueline",
    deploy: "https://fullstack-one-inky.vercel.app/",
  },
  {
    id: 2,
    name: "Resumo Financeiro",
    description: "React | Vite, useState, components, renderização de cards ",
    photo: nu,
    repository: "https://github.com/jaq442/m3-finance-jaq",
    repositoryBack: 0,
    deploy: "https://finance-jaq.vercel.app/",
  },
  {
    id: 3,
    name: "Git Search",
    description: "Javascript | Consumo de API, promises, responsiveness ",
    photo: gitsearch,
    repository: "https://github.com/jaq442/m2-git-search",
    repositoryBack: 0,
    deploy:
      "https://kenzie-academy-brasil-developers.github.io/Kenzie-Academy-Brasil-Developers-gitSearchBase-jaq442/",
  },
  {
    id: 4,
    name: "Crud API",
    description:
      "NodeJs, PostgreSQL | Construção de API, create, read, update, delete",
    photo: crud,
    repository: 0,
    repositoryBack:
      "https://github.com/Kenzie-Academy-Brasil-Developers/crud_jaq442",
    deploy: "https://github.com/Kenzie-Academy-Brasil-Developers/crud_jaq442",
  },
  {
    id: 5,
    name: "E-commerce",
    description:
      "Wordpress, Elementor | Freelance e-commerce para loja virtual de joias de cerâmica",
    photo: ceramica,
    repository: 0,
    repositoryBack: 0,
    deploy: "https://dilemmajoias.com",
  },
  {
    id: 6,
    name: "One Page",
    description:
      "Wordpress, Elementor | Projeto de estudo de site one page para empresa de cowork",
    photo: cowork,
    repository: 0,
    repositoryBack: 0,
    deploy: "https://projeto-coworx.jaquelinehirosedev.com/",
  },
  {
    id: 7,
    name: "Gestão de tanques",
    description:
      "React | Freelance de sistema de gestão de tanques de água para empresa Mart Plore",
    photo: francisco,
    repository: 0,
    repositoryBack: 0,
    deploy: 0,
  },
  {
    id: 8,
    name: "Site Institucional",
    description:
      "Wordpress, Elementor | Freelance de site institucional para Clínica Drago",
    photo: drago,
    repository: 0,
    repositoryBack: 0,
    deploy: "https://clinicadrago.com.br/",
  },
];

export default data;
