import ScrollView from "../ScrollView";

type Image = {
    src: string;
    alt: string;
};

const Welcome = ({ images }: { images: Image[] }) => {
    return (
        <div>
            <ScrollView images={images} />
            <div>
                <h1 className="text-3xl mt-8 mb-4">Bem-vindo</h1>
                <p>Começe hoje a sua jornada para o próximo nível! etc etc</p>
                <div className="flex flex-row my-20">
                    <div>
                        
                    </div>
                    <div>
                        <h2></h2>
                        <p>A computação é uma área em constante evolução, que demanda o aprendizado de novas tecnologias e ferramentas para acompanhar as mudanças e os desafios do mercado. Pensando nisso, a Escola Piloto de Computação, um projeto de ensino que organiza atividades complementares à formação dos alunos do curso de Ciência da Computação e áreas correlatas, traz para você uma série de cursos de extensão sobre diversos temas relevantes para a área. Você vai aprender sobre desenvolvimento web, jogos, robótica, mineração de dados, automação, entre outros, com alunos ativos do curso que vão compartilhar seus conhecimentos e experiências. Os cursos são gratuitos e limitados, e têm como objetivo ampliar e aprofundar o seu conhecimento na área da computação, além de proporcionar uma oportunidade de interação e troca de ideias com outros estudantes e profissionais. Não perca essa chance de se atualizar e se capacitar na área da computação. Acesse o site do evento e faça já a sua inscrição!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
