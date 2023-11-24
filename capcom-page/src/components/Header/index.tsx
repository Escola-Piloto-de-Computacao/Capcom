import Hamburger from "../Hamburger";
import capcomminilogo from '../../images/capcom-logo.png'

export const refs = [
   {
      title: "Bem-Vindo",
      href: "#Bemvindo",
   },
   {
      title: "Minicursos",
      href: "#Minicursos",
   },
   {
      title: "Inscrições",
      href: "#Inscricoes",
   }
];

const Header = () => {
   return (
      <header className="lg:flex lg:justify-center">
         <Hamburger />
         {/*<div className="lg:hidden flex justify-end mt-4 px-6">    
            <img src="" alt="Logo da EPC" className="w-11 mr-2 " />
         </div>*/}
         <div className="hidden lg:flex items-center justify-between fixed bg-gray-200 w-screen z-20 h-28">
            <div className="flex items-center gap-7 ml-10 py-3 w-24">
               <img src={capcomminilogo} alt="Logo da Capcom"/>
            </div>
            <div className="flex gap-32 font-semibold text-xl mr-20">
               {refs.map((ref) => (
                  <a href={ref.href} className="hover:text-gray-500">
                     {ref.title}
                  </a>
               ))}
            </div>
         </div>
      </header>
   );
}

export default Header;