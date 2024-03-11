import fullstack from "../assets/fullstack.png";
import nu from "../assets/nu.png";
import gitsearch from "../assets/gitsearch.png";
import crud from "../assets/crud.png";

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
    deploy: "hhttps://fullstack-one-inky.vercel.app/",
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
    name: "Crud",
    description: "NodeJs, PostgreSQL | Construção de API, create, read, update, delete",
    photo: crud,
    repository: 0,
    repositoryBack:
      "https://github.com/Kenzie-Academy-Brasil-Developers/crud_jaq442",
    deploy: "#",
  },
];

export default data;
