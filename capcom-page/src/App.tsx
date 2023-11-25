import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Cursos from './components/Cursos';
import Inscricoes from './components/Inscricoes';
import EPC from './components/EPC';
import Footer from './components/Footer';
import paulo from './images/palestrantes/pauloTeoria.jpeg';
import pedro from './images/palestrantes/pedroReact.jpeg';
import artur from './images/palestrantes/ArturPyAuto.png';
import vinicius from './images/palestrantes/ViniciusPyAuto.jpeg';
import joao from './images/palestrantes/JoaoRobotica.jpeg';
import sarah from './images/palestrantes/SarahRobotica.jpeg';
import lucas from './images/palestrantes/LucasR.jpg';
import joas from './images/palestrantes/JoasR.jpg';
import clara from './images/palestrantes/ClaraPandas.jpg';
import caio from './images/palestrantes/caioPHP.jpg';
import rafael from './images/palestrantes/RafaelPHP.jpg';
import william from './images/palestrantes/WilliamFigma.jpeg';
import joaog from './images/palestrantes/JoaoSpring.jpeg';
import edson from './images/palestrantes/EdsonAPI.jpeg';
import victor from './images/palestrantes/VictorRedes.jpeg';
import ryllari from './images/palestrantes/RyllariWebS.jpeg';
import thiago from './images/palestrantes/ThiagoSpring.jpeg';
import patrick from './images/palestrantes/PatrickPBI.jpeg';
import wender from './images/palestrantes/wenderReact.jpeg';
import { useMediaQuery } from 'react-responsive';

type Course = {
   title: string;
   alternativeTitle: string;
   longerTitle?: string;
   details: string;
   prerequisites: string;
   shadowBackgroundColor: string;
   dia: string;
   data: string;
   courseImage: string;
   publicoGeral: boolean;
   id: number;
   palestrante1: {
      nome: string;
      frase: string;
      foto: string;
      instagram: string;
      linkedin: string;
      github: string;
   };
   palestrante2?: {
      nome: string;
      frase: string;
      foto: string;
      instagram: string;
      linkedin: string;
      github: string;
   };
};

let courses = [
   {
      title: 'Robótica',
      alternativeTitle: 'Introdução à robótica com LEGO EV3',
      details: `Serão mostrados alguns dos conceitos fundamentais da robótica, ao mesmo tempo que
        interagem ativamente com o kit de peças EV3, que foi construído para ser de fácil
        entendimento e montagem.
        Ao final do curso, os alunos construirão um robô capaz de se locomover automaticamente,
        com o auxílio de sensores.`,
      prerequisites: 'Não há pré-requisitos',
      shadowBackgroundColor: '#00ff37',
      dia: 'Quarta',
      data: "29/11",
      courseImage: '',
      publicoGeral: true,
      id: 1,
      palestrante1: {
         nome: "João Lucas",
         frase: "Robótica educacional. Desenvolvimento em Java, C++ e Lego Scratch",
         foto: joao,
         instagram: "",
         linkedin: "",
         github: "https://github.com/G4ldin0"
      },
      palestrante2: {
         nome: "Sarah Tomaz",
         frase: "Professora de robótica educacional, apaixonada por machine learning",
         foto: sarah,
         instagram: "",
         linkedin: "",
         github: "https://github.com/SarahTomaz"
      }
   },
   {
      title: 'Github',
      alternativeTitle: 'Git e Github – Noções e boas práticas',
      longerTitle: 'Git e Github',
      details: `Ensinar a teoria, as aplicacões e boas práticas para a
        ferramenta padrão do mercado, quando se fala em versionamento e controle de código.`,
      prerequisites: 'Não há pré-requisitos',
      shadowBackgroundColor: '#ff0000',
      dia: 'Quinta',
      data: "30/11",
      courseImage: '',
      publicoGeral: false,
      id: 2,
      palestrante1: {
         nome: "",
         frase: "",
         foto: "",
         instagram: "",
         linkedin: "",
         github: ""
      },
      palestrante2: {
         nome: "",
         frase: "",
         foto: "",
         instagram: "",
         linkedin: "",
         github: ""
      }
   }, //falta info de github ambos
   {
      title: 'Python Pyautogui',
      alternativeTitle: 'Introdução a automação com Python em Pyautogui',
      details: "Desperte o potencial visual do seu computador com nosso curso envolvente de PyAutoGUI em Python! Em um mergulho fascinante pela visão computacional, você aprenderá a dotar seu sistema com 'olhos' através da poderosa biblioteca PyAutoGUI. Desbrave as fronteiras da automação, desvendando segredos que transformarão sua experiência digital. Junte-se a nós e liberte o poder visual do seu Python!",
      prerequisites: 'Introdução a Lógica e Introdução a Programação',
      shadowBackgroundColor: '#ff00ff',
      dia: 'Sexta',
      data: "01/12",
      courseImage: '',
      publicoGeral: false,
      id: 3,
      palestrante1: {
         nome: "Artur Segantini",
         frase: "Entusiasta de worldbuilding e amante de programação orientada a objetos",
         foto: artur,
         instagram: "@artur_sals",
         linkedin: "",
         github: "https://github.com/ARTSALT"
      },
      palestrante2: {
         nome: "Vinicius Gabriel",
         frase: "Sou estudante de ciência da computação do 4° período",
         foto: vinicius,
         instagram: "",
         linkedin: "",
         github: "https://github.com/FolkBlues7"
      }
   },
   {
      title: 'R',
      alternativeTitle: 'Introdução à linguagem R',
      details: `O Minicurso de Introdução à Linguagem R é uma oportunidade
        empolgante de mergulhar no mundo da análise de dados e estatísticas usando uma das
        linguagens de programação mais poderosas e populares para ciência de dados. Este curso
        introdutório foi projetado para atender tanto a iniciantes quanto a pessoas com alguma
        experiência em programação.
        Durante o minicurso, os participantes irão aprender os fundamentos da linguagem R,
        incluindo estruturas de dados, operações básicas, manipulação de dados e visualização.
        Além disso, serão introduzidos aos pacotes e bibliotecas mais úteis para análise de dados,
        como o ggplot2 para visualização e o dplyr para manipulação de dados.`,
      prerequisites: 'Não há pré-requisitos, porém alguma familiaridade com conceitos de estatísticas e programação pode ser útil',
      shadowBackgroundColor: '#0000ff',
      dia: 'Quarta',
      data: "29/11",
      courseImage: '',
      publicoGeral: true,
      id: 4,
      palestrante1: {
         nome: "Lucas Silva",
         frase: "Técnico em Informática pelo IFRN,  aluno do 2° período de Ciência da Computação UFERSA",
         foto: lucas,
         instagram: "",
         linkedin: "",
         github: "https://github.com/Lucassilv7"
      },
      palestrante2: {
         nome: "Joas Gabriel",
         frase: "Estudante de ciência da computação, segundo período, e membro da Escola Piloto de Computação",
         foto: joas,
         instagram: "https://www.instagram.com/joasgabriel/",
         linkedin: "https://www.linkedin.com/in/jo%C3%A1s-barros-907990172/",
         github: "https://github.com/joas-barros"
      }
   },
   {
      title: 'Python Pandas',
      alternativeTitle: 'Introdução a mineração de dados com Pandas',
      details: `Uma introdução prática e abrangente à linguagem Python e à biblioteca Pandas,
        projetado para fornecer uma base em mineração e análise de dados. O Pandas é
        uma ferramenta poderosa que simplifica a manipulação, a limpeza e a exploração
        de dados, tornando-o essencial em projetos de dados. Neste curso, você aprenderá
        a utilizar o Pandas para realizar tarefas essenciais, como importar dados, realizar
        operações de filtragem e agregação, visualizar informações estatísticas e muito
        mais.`,
      prerequisites: 'Cadeiras \'Introdução a Lógica\' e \'Introdução a Programação\'',
      shadowBackgroundColor: '#ffff00',
      dia: 'Quinta',
      data: "30/11",
      courseImage: '',
      publicoGeral: true,
      id: 5,
      palestrante1: {
         nome: "Clara Letícia",
         frase: "Apaixonada por gatos e aspirante a cientista de dados",
         foto: clara,
         instagram: "",
         linkedin: "",
         github: "github.com/ClaraLeticia"
      },
   },
   {
      title: 'PowerBI',
      alternativeTitle: 'Introdução ao PowerBI',
      details: `Aprender a utilizar a ferramenta Power BI de forma a extrair,
        transformar e carregar dados (Processo de ETL (Extract, Transform, Load)). Aprenderemos,
        também, a criar Dashboards para a visualização de dados.`,
      prerequisites: 'Não há pré-requisitos',
      shadowBackgroundColor: '#00ffff',
      dia: 'Sexta',
      data: "01/12",
      courseImage: '',
      publicoGeral: true,
      id: 6,
      palestrante1: {
         nome: "Patrick Freitas",
         frase: "Aluno do 6º período de computação",
         foto: patrick,
         instagram: "",
         linkedin: "",
         github: ""
      },
      palestrante2: {
         nome: "Lucas Silva",
         frase: "Técnico em Informática pelo IFRN,  aluno do 2° período de Ciência da Computação UFERSA",
         foto: lucas,
         instagram: "",
         linkedin: "",
         github: "https://github.com/Lucassilv7"
      }
   }, //falta sociais de patrick
   {
      title: 'PHP',
      alternativeTitle: 'Laravel: Framework PHP Para desenvolvimento WEB',
      details: `Nesse minicurso você aprenderá o básico de PhP e a utilizar o
        framework Laravel para criar aplicações web.`,
      prerequisites: 'Não há pré-requisitos',
      shadowBackgroundColor: '#ff7f00',
      dia: 'Quarta',
      data: "29/11",
      courseImage: '',
      publicoGeral: false,
      id: 7,
      palestrante1: {
         nome: "Caio Anderson",
         frase: "Estudante de Ciência da Computação e Técnico de Informática. Apaixonado por explorar o mundo da computação, ansioso para aprender, e contribuir com a tecnologia",
         foto: caio,
         instagram: "https://www.instagram.com/caioamm/",
         linkedin: "https://www.linkedin.com/in/caio-anderson-martins-1aab821a5/",
         github: "https://github.com/CaioAndersonMM"
      },
      palestrante2: {
         nome: "Rafael Lucas",
         frase: "Estudante de ciência da computação, sempre tentando aprender um pouco de tudo e melhorar as minhas habilidades",
         foto: rafael,
         instagram: "",
         linkedin: "",
         github: "https://github.com/Rafaellucasaz"
      }
   },
   {
      title: 'Figma',
      alternativeTitle: 'Figma para desenvolvimento web',
      details: `No minicurso, os alunos vão aprender a usar a ferramenta
        Figma para fins de designer web, ademais de conceitos básicos sobre web designer.`,
      prerequisites: 'Não há pré-requisitos',
      shadowBackgroundColor: '#ff00ff',
      dia: 'Quinta',
      data: "30/11",
      courseImage: '',
      publicoGeral: true,
      id: 8,
      palestrante1: {
         nome: "William Diniz",
         frase: "Prazer, sou entusiasta do mundo tecnológico visual",
         foto: william,
         instagram: "",
         linkedin: "https://www.linkedin.com/in/william-diniz-praxedes-sales-a79147240/",
         github: ""
      },
   }, //aumentar descrição
   {
      title: 'React',
      alternativeTitle: 'Desenvolvimento Web com React Typescript e TailwindCSS',
      longerTitle: 'Framework ReactTSX e Biblioteca TailwindCSS',
      details: `Domine a simplicidade elegante da criação de interfaces web
        com Tailwind CSS e React! Este curso prático e envolvente é a sua porta de entrada para
        aprender a integrar o poder do Tailwind CSS e React, criando interfaces responsivas,
        componentes reutilizáveis e adicionando interatividade com animações suaves. Inscreva-se
        agora e transforme suas ideias em interfaces incríveis!`,
      prerequisites: 'HTML, CSS e JavaScript',
      shadowBackgroundColor: '#00ff00',
      dia: 'Sexta',
      data: "01/12",
      courseImage: '',
      publicoGeral: false,
      id: 9,
      palestrante1: {
         nome: "Wender Enzo",
         frase: "Graduando em Ciência da Computação na UFERSA - Mossoró, Focado no desenvolvimento web React e back-end em Django e nodejs",
         foto: wender,
         instagram: "",
         linkedin: "",
         github: "https://github.com/wenderenzo123"
      },
      palestrante2: {
         nome: "Pedro Figueira",
         frase: "Amante de tecnologia e programação. A tecnologia é uma ferramenta poderosa para mudar o mundo",
         foto: pedro,
         instagram: "https://www.instagram.com/pedro_fbv/",
         linkedin: "",
         github: "https://github.com/PepeuFBV"
      }
   }, //falta info de wender
   {
      title: 'Python Web Scraping',
      alternativeTitle: 'Encontrando vagas no Linkedin através de raspagem de dados',
      details: `Este minicurso é ideal para quem está cansado de passar horas
        pesquisando por informações em websites e quer aprender a automatizar isso, deixando o
        computador cuidar de tudo sozinho enquanto maratona aquela série da Netflix. Usando o
        exemplo da busca de vagas no linkedin, iremos aprender o que é web scraping, como
        páginas da web são estruturadas e como podemos criar robôs para realizar raspagem de
        dados delas de maneira fácil, prática e útil (afinal, ter um emprego é sempre bom, né?).`,
      prerequisites: 'Python básico (definições de variáveis, tipos, condicionais e lista). Ter noções de HTML e CSS é interessante, mas não necessário',
      shadowBackgroundColor: '#0000ff',
      dia: 'Quarta',
      data: "29/11",
      courseImage: '',
      publicoGeral: false,
      id: 10,
      palestrante1: {
         nome: "Ryllari Costa",
         frase: "Membro do GruPy-RN e PyLadies Brasil, atua como Software Engineer na Jusbrasil. Formada em Engenharia de Computação pelo IFCE-Fortaleza e mestranda em Ciência da Computação pelo PPgCC-UERN/UFERSA",
         foto: ryllari,
         instagram: "https://www.instagram.com/ryllaric/",
         linkedin: "https://www.linkedin.com/in/ryllari",
         github: "https://github.com/ryllari"
      }
   },
   {
      title: 'Java SpringBoot',
      alternativeTitle: 'Introdução a programação web com Spring Boot',
      details: `Neste Minicurso será introduzido ao aluno os conceitos básicos para a construção de uma
        API REST utilizando a linguagem Java com o framework Spring Boot, além de apresentar
        ao aluno os conceito inciais do framework spring boot, o minicurso contará com uma prática
        onde o aluno irá construir uma API REST junto com os instrutores.`,
      prerequisites: 'Programação de Computadores e conhecimento básico em Java. É aconselhável as cadeiras de POO, BD e Redes',
      shadowBackgroundColor: '#ff0000',
      dia: 'Quarta',
      data: "29/11",
      courseImage: '',
      publicoGeral: false,
      id: 11,
      palestrante1: {
         nome: "João Gonçalo",
         frase: "Show me the code",
         foto: joaog,
         instagram: "",
         linkedin: "https://www.linkedin.com/in/jngoncalo?trk=contact-info",
         github: "https://github.com/J0NGS"
      },
      palestrante2: {
         nome: "Thiago Henrique",
         frase: "",
         foto: thiago,
         instagram: "",
         linkedin: "",
         github: ""
      }
   }, //falta info de thiago
   {
      title: 'API Rest',
      alternativeTitle: 'Conexão e consumo de API Rest',
      details: 'Aprenda a criar uma conexão com uma API Rest e como estruturar um service para consumir as informações e exibi-las em uma página web.',
      prerequisites: 'Lógica de Programação, HTML, CSS e JavaScript',
      shadowBackgroundColor: '#ff00ff',
      dia: 'Sexta',
      data: "01/12",
      courseImage: '',
      publicoGeral: false,
      id: 12,
      palestrante1: {
         nome: "Edson Cesar",
         frase: "Pesquisador e especialista Front-End no laboratório de inovação tecnologica em saúde, Co Fundador e CEO da Godev Company, Startup voltada para idealização, maturação e desenvolvimento de software",
         foto: edson,
         instagram: "https://www.instagram.com/edsonalencarc/",
         linkedin: "https://www.linkedin.com/in/edson-allencar/",
         github: "https://github.com/Edsonalencar"
      }
   }, //aumentar descrição
   {
      title: 'Teoria dos Números',
      alternativeTitle: 'Teoria dos Números: Como se introduzir na matemática computacional',
      details: "No minicurso de Teoria dos Números será apresentada umas das áreas mais puras da matemática. Na aula, as operações e características básicas dos números inteiros serão construídas com axiomas e provas formais, demonstrando os fundamentos que constroem as exatas. Além disso, será feita uma contextualização do conteúdo com a matemática computacional em tópicos como bases numéricas, operações aritméticas e mais.",
      prerequisites: 'Não há pré-requisitos',
      shadowBackgroundColor: '#00ffff',
      dia: 'Quinta',
      data: "30/11",
      courseImage: '',
      publicoGeral: true,
      id: 13,
      palestrante1: {
         nome: "Paulo Andrade",
         frase: "Estudante de computação que adora fazer códigos, cálculos e aviões",
         foto: paulo,
         instagram: "",
         linkedin: "https://www.linkedin.com/in/andrade-paulo/",
         github: "https://github.com/andrade-paulo"
      },
   },
   {
      title: 'Unity',
      alternativeTitle: 'Introdução ao motor de jogos Unity',
      longerTitle: 'Motor de jogos Unity',
      details: `Este é um minicurso que busca apresentar os rudimentos do motor de jogos Unity. Para isto,
        toma-se como plano de fundo o desenvolvimento de um jogo 3D em particular para abordar
        os seguintes aspectos: modelo geral de construção de um jogo (gameobjects em cenas);
        gameobjects como containers de componentes; construção de gameobjects a partir de
        formas geométricas primitivas; aplicação de materiais; desenvolvimento de scripts em C#
        que, vinculados a um gameobject, permitem a ele se movimentar, interagir com os demais
        objetos e emitir sons; projeto e construção de um HUD (Head-Up Display) para o jogo;
        instalação do jogo em uma determinada plataforma.`,
      prerequisites: 'Cadeira \'Programação de Computadores\'. Recomenda-se fortemente conhecimento em POO (Programação Orientada a Objetos)',
      shadowBackgroundColor: '#0000ff',
      dia: 'Quinta',
      data: "30/11",
      courseImage: '',
      publicoGeral: false,
      id: 14,
      palestrante1: {
         nome: "",
         frase: "",
         foto: "",
         instagram: "",
         linkedin: "",
         github: ""
      }
   }, //pedir a danielle
   {
      title: "Redes Neurais",
      alternativeTitle: "Sua primeira rede neural sem uma linha de código",
      details: `O curso aborda o desenvolvimento from scratch de uma rede
      neural classificatória. Para tal, utilizaremos uma aplicação web chamada Edge Impulse.
      Aprenderemos sobre criação de database, divisão entre teste/treino/validação, como utilizar
      o celular para fomentar o database, como é a arquitetura de uma NN (Neural Network), e
      muito mais! Tudo isso, sem a necessidade de uma linha de código.`,
      prerequisites: "Não há pré-requisitos",
      shadowBackgroundColor: '',
      dia: 'Sexta',
      data: "01/12",
      courseImage: '',
      publicoGeral: true,
      id: 15,
      palestrante1: {
         nome: "Victor Benoiston",
         frase: "Mestrando em Engenharia da Computação, com ênfase em web semântica e ontology-driven development. Também atuo como desenvolvedor Full-Stack, com tecnologias como Python, JS (React), Ruby, etc",
         foto: victor,
         instagram: "",
         linkedin: "",
         github: "https://github.com/VictorBenoiston"
      },
   }
];

let scrollViewImages = [
   {
      src: '/ex1.jpg',
      alt: 'foto 1'
   },
   {
      src: '/ex2.jpg',
      alt: 'foto 2'
   },
   {
      src: '/ex3.jpg',
      alt: 'foto 3'
   },
];

function addCourses(quarta: Course[] = [], quinta: Course[] = [], sexta: Course[] = []) {

   for (let course of courses)
      if (course.dia === 'Quarta') {
         quarta.push(course);
      } else if (course.dia === 'Quinta') {
         quinta.push(course);
      } else if (course.dia === 'Sexta') {
         sexta.push(course);
      }
}

function App() {
   const isDesktopOrLaptop = useMediaQuery({
      query: '(min-device-width: 768px)'
   });

   const Quarta: Course[] = [];
   const Quinta: Course[] = [];
   const Sexta: Course[] = [];

   addCourses(Quarta, Quinta, Sexta);


   return (
      <div className="App overflow-x-hidden">
         {isDesktopOrLaptop ? (
            <>
               <Header />
               <Welcome images={scrollViewImages} />
               <Cursos quarta={Quarta} quinta={Quinta} sexta={Sexta} />
               <Inscricoes />
               <EPC />
               <Footer />
            </>
         ) : (
            <section className="flex items-center h-screen sm:p-16 dark:bg-gray-900 dark:text-gray-100">
               <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-40 h-40 dark:text-gray-600">
                     <path fill="currentColor" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                     <rect width="176" height="32" x="168" y="320" fill="currentColor"></rect>
                     <polygon fill="currentColor" points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"></polygon>
                     <polygon fill="currentColor" points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"></polygon>
                  </svg>
                  <p className="text-3xl">Site apenas disponível para computadores por enquanto!</p>
                  <a
                     rel="noopener noreferrer"
                     onClick={() => window.open('http://escolapilotodecomputacao.com.br', '_blank')}
                     className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
                  >
                     Voltar
                  </a>
               </div>
            </section>
         )}
      </div>
   );
}

export default App;
