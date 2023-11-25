const EPC = () => {
   return (
      <div className="pb-64">
         <h1 className="text-4xl font-thin pb-10">Conheça a Escola Piloto de Computação</h1>
         <button 
            type="button" 
            onClick={() => window.open('http://escolapilotodecomputacao.com.br', '_blank')} 
            className="relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded bg-sky-500 text-gray-50"
         >
            Visite o site da EPC!
         </button>
      </div>
   );
};

export default EPC;