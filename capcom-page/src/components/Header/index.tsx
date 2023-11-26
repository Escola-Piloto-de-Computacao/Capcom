import capcomminilogo from '../../images/capcom-logo.png';
import { IoMdHome } from "react-icons/io";
import { CiGrid41 } from "react-icons/ci";
import { MdOutlineQuestionMark } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";

interface IconProps {
   iconNumber: number;
}

export const refs = [
   {
      title: "Bem-Vindo",
      href: "#Bemvindo",
      icon: 1
   },
   {
      title: "Minicursos",
      href: "#Minicursos",
      icon: 2
   },
   {
      title: "Inscrições",
      href: "#Inscricoes",
      icon: 3
   },
   {
      title: "FAQ",
      href: "#FAQ",
      icon: 4
   }
];

const Icon: React.FC<IconProps> = ({ iconNumber }) => {
   if (iconNumber === 1) {
      return (
         <div className="lg:hidden cursor-pointer" onClick={() => {
            const element = document.getElementById('Bemvindo');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
         }}
         >
            <IoMdHome size={30} />
         </div>
      );
   } else if (iconNumber === 2) {
      return (
         <div className="lg:hidden cursor-pointer" onClick={() => {
            const element = document.getElementById('Minicursos');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
         }}
         >
            <CiGrid41 size={30} />
         </div>
      );
   } else if (iconNumber === 3) {
      return (
         <div className="lg:hidden cursor-pointer" onClick={() => {
            const element = document.getElementById('Inscricoes');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
         }}>
            <FaClipboardList size={30} />
         </div>
      );
   } else if (iconNumber === 4) {
      return (
         <div className="lg:hidden cursor-pointer" onClick={() => {
            const element = document.getElementById('FAQ');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
         }}>
            <MdOutlineQuestionMark size={30} />
         </div>
      );
   } else {
      return (
         <></>
      );

   }
};

const Header = () => {

   return (
      <header className="lg:flex lg:justify-center">
         <div className="lg:flex items-center justify-between fixed bg-gray-50 w-screen z-20 h-20 border-b border-gray-200" >
            <div className="flex items-center gap-7 ml-10 py-3 w-24">
               <img src={capcomminilogo} alt="Logo da Capcom" className="w-3/4 hidden lg:block" />
            </div>
            <div className="flex gap-24 font-semibold text-xl lg:mr-20 lg:justify-start lg:items-start justify-center items-center">
               {refs.map((ref) => (
                  <>
                     <a href={ref.href} className="hover:text-gray-500 hidden lg:block">
                        {ref.title}
                     </a>
                     <Icon iconNumber={ref.icon} />
                  </>
               ))}
            </div>
         </div>
      </header>
   );
}

export default Header;