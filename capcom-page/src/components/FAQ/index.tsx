const FAQ = () => {
   return (
      <div className="pt-24 lg:mb-36" id="FAQ">
         <section className="">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
               <h2 className="mb-4 lg:mb-12 text-4xl leadi text-center sm:text-5xl font-thin">FAQ</h2>
               <div className="divide-y dark:divide-gray-700">
                  <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                     <h3 className="font-semibold md:col-span-5">Posso me inscrever em mais de um minicurso por dia?</h3>
                     <p className="md:pl-0 md:col-span-7">Não, os minicursos são todos ministrados no mesmo horário em diferentes laboratórios espalhados pelo LCC.</p>
                  </div>
                  <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                     <h3 className="font-semibold md:col-span-5">Preciso me inscrever no evento na página do SIGAA antes de me inscrever nos minicursos?</h3>
                     <p className="md:pl-0 md:col-span-7">Sim, é necessário se inscrever no evento, esperar aprovação e em sequencia se inscrever no minicurso</p>
                  </div>
                  <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                     <h3 className="font-semibold md:col-span-5">Posso ver algum minicurso sem saber os pré-requesitos necessários?</h3>
                     <p className="md:pl-0 md:col-span-7">Sim, por sua conta e risco :&#41;</p>
                  </div>
                  <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                     <h3 className="font-semibold md:col-span-5">Não estudo na UFERSA ou não sou do curso de computação, posso me inscrever no evento?</h3>
                     <p className="md:pl-0 md:col-span-7">Com certeza! Só é necessária uma conta no <span className="font-serif">gov</span>. Um dos objetivos do evento é capacitar alunos que desconhecem da área da computação.</p>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default FAQ;