import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Cursos from './components/Cursos';
import Inscricoes from './components/Inscricoes';
import Footer from './components/Footer';

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
        id: 1
    },
    {
        title: 'Github',
        alternativeTitle: 'Git e Github – Noções e boas práticas',
        details: `Ensinar a teoria, as aplicacões e boas práticas para a
        ferramenta padrão do mercado, quando se fala em versionamento e controle de código.`,
        prerequisites: 'Não há pré-requisitos',
        id: 2
    },
    {
        title: 'Python Pyautogui',
        alternativeTitle: 'Introdução a automação com Python em Pyautogui',
        details: `Uma introdução automação na linguagem python utilizando
        artifícios de visão computacional, tratamento de imagens e a biblioteca Pyautogui.`,
        prerequisites: 'Introdução a Lógica e Introdução a Programação.',
        id: 3
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
        prerequisites: 'Não há pré-requisitos, porém alguma familiaridade com conceitos de estatísticas e programação pode ser útil.',
        id: 4
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
        prerequisites: 'Introdução a Lógica e Introdução a Programação.',
        id: 5
    },
    {
        title: 'PowerBI',
        alternativeTitle: 'Introdução ao PowerBI',
        details: `Aprender a utilizar a ferramenta Power BI de forma a extrair,
        transformar e carregar dados(Processo de ETL(Extract, Transform, Load)). Aprenderemos,
        também, a criar Dashboards para a visualização de dados.`,
        prerequisites: 'Não há pré-requisitos',
        id: 6
    },
    {
        title: 'PHP',
        alternativeTitle: 'Laravel: Framework PHP Para desenvolvimento WEB',
        details: `Nesse minicurso você aprenderá o básico de PhP e a utilizar o
        framework Laravel para criar aplicações web`,
        prerequisites: 'Não há pré-requisitos',
        id: 7
    },
    {
        title: 'Figma',
        alternativeTitle: 'Figma para desenvolvimento web',
        details: `No minicurso, os alunos vão aprender a usar a ferramenta
        Figma para fins de designer web, ademais de conceitos básicos sobre web designer.`,
        prerequisites: 'Não há pré-requisitos',
        id: 8
    },
    {
        title: 'React',
        alternativeTitle: 'Desenvolvimento Web com React Typescript e TailwindCSS',
        details: `Domine a simplicidade elegante da criação de interfaces web
        com Tailwind CSS e React! Este curso prático e envolvente é a sua porta de entrada para
        aprender a integrar o poder do Tailwind CSS e React, criando interfaces responsivas,
        componentes reutilizáveis e adicionando interatividade com animações suaves. Inscreva-se
        agora e transforme suas ideias em interfaces incríveis!`,
        prerequisites: 'HTML, CSS e JavaScript',
        id: 9
    },
    {
        title: 'Python Web Scraping',
        alternativeTitle: 'Encontrando vagas no Linkedin através de raspagem de dados',
        details: `Este minicurso é ideal para quem está cansado de passar horas
        pesquisando por informações em websites e quer aprender a automatizar isso, deixando o
        computador cuidar de tudo sozinho enquanto maratona aquela série da Netflix. Usando o
        exemplo da busca de vagas no linkedin, iremos aprender o que é web scraping, como
        páginas da web são estruturadas e como podemos criar robôs para realizar raspagem de
        dados delas de maneira fácil, prática e útil (afinal, ter um emprego é sempre bom, né?).`,
        prerequisites: 'Python básico (definições de variáveis, tipos, condicionais e lista). Ter noções de HTML e CSS é interessante, mas não necessário.',
        id: 10
    },
    {
        title: 'Java SpringBoot',
        alternativeTitle: 'Introdução a programação web com Spring Boot',
        details: `Neste Minicurso será introduzido ao aluno os conceitos básicos para a construção de uma
        API REST utilizando a linguagem Java com o framework Spring Boot, além de apresentar
        ao aluno os conceito inciais do framework spring boot, o minicurso contará com uma prática
        onde o aluno irá construir uma API REST junto com os instrutores.`,
        prerequisites: 'Programação de Computadores e conhecimento básico em Java. É aconselhável as cadeiras de POO, BD e Redes.',
        id: 11
    },
    {
        title: 'API Rest',
        alternativeTitle: 'Conexão e consumo de API Rest',
        details: 'Aprenda a criar uma conexão com uma API Rest e como estruturar um service para consumir as informações e exibi-las em uma página web',
        prerequisites: 'Lógica de Programação, HTML, CSS e JavaScript',
        id: 12
    },
    {
        title: 'Teoria dos Números',
        alternativeTitle: 'Teoria dos Números: Como se introduzir na matemática computacional',
        details: `Apresentação a Teoria dos Números, um campo
        de matemática pura, fundamental para lidar com os problemas da matemática
        computacional. Na aula, veremos os axiomas dos números naturais, suas propriedades e
        como aplica-los aos nossos algoritmos.`,
        prerequisites: 'Não há pré-requisitos',
        id: 13
    },
    {
        title: 'Unity',
        alternativeTitle: 'Introdução ao motor de jogos Unity',
        details: `Este é um minicurso que busca apresentar os rudimentos do motor de jogos Unity. Para isto,
        toma-se como plano de fundo o desenvolvimento de um jogo 3D em particular para abordar
        os seguintes aspectos: modelo geral de construção de um jogo (gameobjects em cenas);
        gameobjects como containers de componentes; construção de gameobjects a partir de
        formas geométricas primitivas; aplicação de materiais; desenvolvimento de scripts em C#
        que, vinculados a um gameobject, permitem a ele se movimentar, interagir com os demais
        objetos e emitir sons; projeto e construção de um HUD (Head-Up Display) para o jogo;
        instalação do jogo em uma determinada plataforma.`,
        prerequisites: 'Programação de Computadores. Recomenda-se fortemente conhecimento em POO',
        id: 14
    }
];

let scrollViewImages = [
    {
        src: '/ex1.jpg',
        alt: ''
    },
    {
        src: '/ex2.jpg',
        alt: ''
    },
    {
        src: '/ex3.jpg',
        alt: ''
    },
];

function App() {
    return (
        <div className="App">
            <Header />
            <Welcome images={scrollViewImages} />
            <Cursos courses={courses} />
            <Inscricoes />
            <Footer />
        </div>
    );
}

export default App;
