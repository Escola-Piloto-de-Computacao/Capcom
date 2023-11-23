import { MdHome } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa6";
import { MdEvent } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import Hamburger from "../Hamburger";
import capcomminilogo from '../../images/capcom-logo.png'

export const refs = [
   /*{
      title: "Home",
      href: "#Home",
      Icon: MdHome,
   },*/
   {
      title: "Bem-Vindo",
      href: "#Bemvindo",
      Icon: IoPeopleSharp,
   },
   {
      title: "Minicursos",
      href: "#Minicursos",
      Icon: FaLightbulb,
   },
   {
      title: "Inscrições",
      href: "#Inscricoes",
      Icon: MdEvent,
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