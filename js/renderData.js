const closeModalAction = document.querySelector('.modal .ri-close-line')
const modal = document.querySelector('.modal')
const modalTitle = modal.querySelector('.title h2')
const modalDescription = modal.querySelector('.info p')
const modalDate = modal.querySelector('span')
const modalLinkProject = modal.querySelector('.links a.link-project')
const modalLinkRepository = modal.querySelector('.links a.link-repository')
const modalLinkLinkedin = modal.querySelector('.links a.link-linkedin')
const iframe = modal.querySelector('.video iframe')
const highlightsProjectsContainer = document.querySelector('.highlights .cards-projects');
const allProjectsContainer = document.querySelector('.allprojects .cards-projects');
const HIGHTLIGHT_TYPE = 2;
const ALL_TYPE = 1;

const getProjectsByTypeOrAll = (typeId) => {
  const dataProjects = [
    {
      id: 1,
      type: 2,
      title: 'Kenzie Hub',
      date: '17 de Março de 2022',
      languages: ['react', 'typescript', 'styledcomponents', 'materialui', 'figma'],
      description: `O projeto KenzieHub é um projeto onde o usuário pode realiza o cadastro a edição e exclusão de Tecnologias. Foi um projeto feito usando as tecnologias HTML ,CSS JAVASCRIPT, React , React-hook-form , React-router-dom, Yup, Context API e Typescript `,
      imgSrc: 'assets/projects/kenziehub.png',
      linkedin: 'pra quando tiver post no linkendin',
      repository: 'https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-formulario-de-cadastro-lucassadeck26',
      site: 'https://react-entrega-s2-formulario-de-cadastro-lucassadeck26.vercel.app/login'
    },
  
    {
      id: 3,
      type: 2,
      title: 'Nu Kenzie',
      date: '28 de Outubro de 2021',
      languages: ['html', 'sass', 'javascript', 'figma'],
      description: `o Nu Kenzie, uma aplicação para gerenciamento de gastos, cadastrando entradas e saídas. Essa aplicação utiliza as tecnologias HTML,CSS, React, React Styled-components.
        `,
      imgSrc: 'assets/projects/nu_kenzie.gif',
      videoSrc: 'https://streamable.com/e/usgia6',
      linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:6862799471626059776/',
      repository: 'https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-nu-kenzie-lucassadeck26',
      site: 'https://react-entrega-s1-nu-kenzie-lucassadeck26.vercel.app/'

    },
    {
      id: 4,
      type: 2,
      title: 'Hamburgueria Kenzie',
      date: '14 de Outubro de 2023',
      languages: ['html', 'sass', 'javascript', 'figma'],
      description: `É um projeto que é um E-commerce de hambúrgueres, onde o usuário pode adicionar no
      carrinho e comprar os produtos que desejar. Além de ser um projeto implementado como
      Mobile First. As tecnologias utilizadas foram HTML, CSS, Javascript, React, React-router dom,
      Context API, Typescript, axios, styled-components, Material-UI, Git, Github,`,
      imgSrc: 'assets/projects/hamburgueria_kenzie.gif',
      videoSrc: 'https://streamable.com/e/65khi6',
      linkedin: 'https://www.linkedin.com/posts/rhuanbello_clone-windows-calculator-activity-6854500487987904512-kwzK',
      repository: 'https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-hamburgueria-da-kenzie-lucassadeck26',
      site: 'https://react-entrega-s1-hamburgueria-da-kenzie-lucassadeck26.vercel.app/'
    },
    {
      id: 5,
      type: 2,
      title: 'Criação de usuários',
      date: '30 de Abril de 2024',
      languages: ['html', 'sass', 'typescript', 'javascript'],
      description: `Crud de Usuários é um projeto de gestão de usuários e de sua usabilidade.Chega de sistemas antigos e sem usabilidade, 
      agora com o Crud de Usuários seu trabalho fica até 3x mais rápido e simplificado.As tecnologias utilizadas foram o Framework Angular Versão 17,HTML, SCSS, Typescript,Bootstrap. Este projeto é Full Stack e sua versão back-end 
      também consta neste portifólio.
      `,
      imgSrc: 'assets/projects/crud_usuario.png',
      videoSrc: 'https://streamable.com/e/65khi6',
      linkedin: 'https://www.linkedin.com/posts/rhuanbello_clone-windows-calculator-activity-6854500487987904512-kwzK',
      repository: 'https://github.com/lucassadeck26/crud',
      site: 'https://crud-puce-iota.vercel.app/login'
    },

    {
      id: 6,
      type: 1,
      title: 'BandKamp Generic View ',
      date: '28 de Setembro de 2023',
      languages: ['html', 'sass', 'javascript', 'figma'],
      description: "Um projeto feito de uma API feita em Python e Django para que seja realizado o consumo de dados",
      imgSrc: 'assets/projects/deathcat.jpg',
      videoSrc: 'https://streamable.com/e/tlz8yr',
      linkedin: '',
      repository: 'https://github.com/Kenzie-Academy-Brasil-Developers/m5-bandkamp-generic-view-lucassadeck',
      site: ''
    },

   
  ];

  return typeId ? dataProjects.filter(({ type }) => type === typeId) : dataProjects;
}

const allProjects = getProjectsByTypeOrAll(ALL_TYPE);
const hightLightProjects = getProjectsByTypeOrAll(HIGHTLIGHT_TYPE);

const renderProjects = (container, data) => {
  container.innerHTML = data.map(({ id, title, imgSrc, date, languages }) => {
    return `
        <div class="box" id="${id}">
          <div class="cover">
            <img src=${imgSrc} alt="dowhile 2021">
            <div class="details">
              <p>${title}</p>
              <div class="mini-languages">
                ${languages.map((language) => `<img src="assets/mini-languages/${language}.svg" alt="${language}">`)}
              </div>
            </div>
          </div>
          <div class="description">
            <p>${date}</p>
            <a>Ver mais</a>
          </div>
        </div>
      `
  }).join('');
}

const renderSkillsSection = () => {
  const cardsContainer = document.querySelector('.cards');

  const skills = [
    {
      name: 'HTML5',
      src: 'html'
    },
    {
      name: 'CSS3',
      src: 'css'
    },
    {
      name: 'JavaScript',
      src: 'javascript'
    },
    {
      name: 'TypeScript',
      src: 'typescript'
    },
    {
      name: 'React.js',
      src: 'react'
    },

    {
        name: 'python',
        src: 'python'
      },
    
  
    {
      name: 'Figma',
      src: 'figma'
    }
  ]

  cardsContainer.innerHTML = skills.map(({ name, src }, index) => `
    <div class="box" key="${index}">
      <p>${name}</p>
      <img src="assets/languages/${src}.svg" alt="html">
    </div>
  `).join('')
}

const addData = ({ title, description, date, site, repository, linkedin, videoSrc }) => {
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  document.body.classList.add('transparent')
  modalTitle.innerHTML = title
  modalDescription.innerHTML = description
  modalDate.innerHTML = date
  modalLinkProject.setAttribute('href', site)
  modalLinkRepository.setAttribute('href', repository)
  modalLinkLinkedin.setAttribute('href', linkedin)
  iframe.setAttribute('src', videoSrc + '?autoplay=1&amp;loop=0')

}

const insertProjectAction = () => {
  projectsBox.forEach((project) => {
    const id = Number(project.getAttribute('id'));

    project.addEventListener('click', () => {
      const allProjects = getProjectsByTypeOrAll();
      const foundProject = allProjects.find((project) => project.id === id);
      addData(foundProject);
    })
  });
}

const closeModal = () => {
  modal.classList.add('hidden')
  document.body.style.overflow = 'visible';
  document.body.classList.remove('transparent')
  iframe.setAttribute('src', '')

}

const detectCloseModal = () => {
  closeModalAction.addEventListener('click', closeModal)
  document.addEventListener('keydown', ({ key }) => key === "Escape" && closeModal());
}

renderSkillsSection();
renderProjects(highlightsProjectsContainer, hightLightProjects);
renderProjects(allProjectsContainer, allProjects);
const projectsBox = document.querySelectorAll('.box');
detectCloseModal();
insertProjectAction();