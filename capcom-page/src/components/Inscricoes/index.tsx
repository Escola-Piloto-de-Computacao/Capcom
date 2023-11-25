import tela1 from '../../images/Tela1.png';
import tela2 from '../../images/Tela2.png';
import tela3 from '../../images/Tela3.png';
import tela4 from '../../images/Tela4.png';
import tela5 from '../../images/Tela5.png';
import tela6 from '../../images/Tela6.png';

const Inscricoes = () => {
   return (
      <div className="mt-32 pb-56" id="Inscricoes">
         <h2 className="py-4 text-4xl font-thin text-center mb-4">Como me inscrevo?</h2>
         <section className="bg-gray-200 text-gray-800 rounded-lg w-4/5 mx-auto">
            <div className="container mx-auto flex flex-col p-6">
               <div className="divide-y divide-gray-300">
                  <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                     <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                        <span className="text-xs tracki uppercase text-sky-600">Passo 1</span>
                        <span className="text-xl font-bold md:text-2xl">Entre no link e na sua conta gov.br</span>
                        <span className="pt-2 text-lg text-blue-700 underline"><a className="cursor-pointer" onClick={() => window.open('https://sigaa.ufersa.edu.br/sigaa/public/servicos_digitais/', '_blank')}>Clique aqui</a></span>
                        <span className="mt-4 text-gray-700 mb-4">Entre nesse link para o Portal de Serviços Digitais e clique em '<span className="italic font-bold">Realizar Inscrição em Cursos e Eventos de Extensão</span>'. Em seguida faça login na sua conta gov.br!</span>
                        <span className="pb-1">&gt; Realizar Inscrição em Cursos e Eventos de Extensão &gt; Entrar com gov.br</span>
                        <img src={tela1} className="" />
                     </div>
                  </div>
                  <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                     <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                        <span className="text-xs tracki uppercase text-sky-600">Passo 2</span>
                        <span className="text-xl font-bold md:text-2xl">Se inscreva no evento</span>
                        <span className="mt-4 text-gray-700 mb-2">Clique em '<span className="italic font-bold">Inscrições abertas</span>'.</span>
                        <span className="pb-1">&gt; Inscrições abertas</span>
                        <img src={tela2} className="" />
                        <span className="mt-8 mb-2 text-gray-700">Clique em '<span className="italic font-bold">Inscrever-se</span>', no icone de pessoa.</span>
                        <span className="pb-1">&gt; Inscrever-se</span>
                        <img src={tela3} className="" />
                     </div>
                  </div>
                  <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                     <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                        <span className="text-xs tracki uppercase text-sky-600">Passo 3</span>
                        <span className="text-xl font-bold md:text-2xl">Faça sua inscrição no evento</span>
                        <span className="mt-4 text-gray-700 mb-4">Desça a página e insira em '<span className="italic">Instituição</span>' a instituição a qual está vinculado e clique em '<span className="italic font-bold">Confirmar Inscrição</span>'.</span>
                        <span className="pb-1">&gt; Confirmar Inscrição</span>
                        <img src={tela4} className="" />
                     </div>
                  </div>
                  <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                     <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                        <span className="text-xs tracki uppercase text-sky-600">Passo 4</span>
                        <span className="text-xl font-bold md:text-2xl">Faça sua inscrição no minicurso</span>
                        <span className="mt-4 text-gray-700 mb-4">Volte a página inicial, volte a tela de '<span className="italic font-bold">Inscrições abertas</span>'. Em seguida, clique em '<span className="italic font-bold">Visualizar as mini atividades</span>'.</span>
                        <span className="pb-1">&gt; Página inicial &gt; Inscrições abertas &gt; Visualizar as mini atividades</span>
                        <img src={tela5} className="" />
                        <span className="mt-8 mb-2 text-gray-700">Escolha seu minicurso e clique em '<span className="italic font-bold">Inscrever-se</span>'.</span>
                        <span className="pb-1">&gt; Inscrever-se</span>
                        <img src={tela6} className="" />
                        <span className="mt-8 mb-2 text-gray-700">Desça a página e insira em '<span className="italic">Instituição</span>' a instituição a qual está vinculado e clique em '<span className="italic font-bold">Confirmar Inscrição</span>'.</span>
                        <span className="pb-1">&gt; Confirmar Inscrição</span>
                        <img src={tela4} className="" />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Inscricoes;