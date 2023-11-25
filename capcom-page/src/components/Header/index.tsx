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
         <div className="hidden lg:flex items-center justify-between fixed bg-gray-50 w-screen z-20 h-20 border-b border-gray-200" >
            <div className="flex items-center gap-7 ml-10 py-3 w-24">
               <img src={capcomminilogo} alt="Logo da Capcom" className="w-3/4"/>
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