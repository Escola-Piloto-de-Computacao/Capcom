import ScrollView from "../ScrollView";

import welcomepic from "../../images/welcomepic.svg";

type Image = {
   src: string;
   alt: string;
};

const Welcome = ({ images }: { images: Image[] }) => {

   const scrollIntoWelcome = () => {
      const element = document.getElementById('Bemvindo');
      if (element) {
         element.scrollIntoView();
      }
   };

   return (
      <div className="pt-28" id="Home">
         <ScrollView images={images} />
         <div className="pt-28" id="Bemvindo">
            <p className="text-lg pt-2 font-light">Começe hoje a sua jornada para o próximo nível</p>
            <h1 className="text-5xl mt-3 font-thin">CAPCOM</h1>
            <div className="grid grid-cols-6 mt-16 px-24 gap-32">
               <div className="col-span-3">
                  <img src={welcomepic} alt="" className=""></img>
               </div>
               <div className="col-span-3 flex items-center text-lg text-justify">
                  <p>A computação é uma área em constante evolução, que demanda o aprendizado de novas tecnologias e ferramentas para acompanhar as mudanças e os desafios do mercado. Pensando nisso, a Escola Piloto de Computação, um projeto de ensino que organiza atividades complementares à formação dos alunos do curso de Ciência da Computação e áreas correlatas, traz para você uma série de cursos de extensão sobre diversos temas relevantes para a área. Você vai aprender sobre desenvolvimento web, jogos, robótica, mineração de dados, automação, entre outros, com alunos ativos do curso que vão compartilhar seus conhecimentos e experiências. Os cursos são gratuitos e limitados, e têm como objetivo ampliar e aprofundar o seu conhecimento na área da computação, além de proporcionar uma oportunidade de interação e troca de ideias com outros estudantes e profissionais. Não perca essa chance de se atualizar e se capacitar na área da computação.</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Welcome;
