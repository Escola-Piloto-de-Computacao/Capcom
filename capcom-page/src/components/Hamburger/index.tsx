import { useState } from "react";

const Hamburger = () => {

   const [isNavOpen, setIsNavOpen] = useState(false);

   return (
      <section className="fixed flex lg:hidden mt-5">
         <div
            className="space-y-2 pl-8"
            onClick={() => setIsNavOpen((prev) => !prev)}
         >
            <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
         </div>

         {isNavOpen && (
            <div className="fixed inset-0 bg-gray-400 opacity-75 z-20"></div>
         )}

         <div className={`absolute py-8 z-20 ${isNavOpen ? "flex flex-col col-span-1 h-screen w-screen" : "hidden"}`}>
            <div className="flex justify-center">
               <svg
                  className="h-12 w-12 text-gray-600 cursor-pointer"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  onClick={() => setIsNavOpen(false)}
               >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
               </svg>
            </div>
            <ul className="text-center min-h-[350px] mt-24 uppercase text-xl font-bold"> {/* change */}
               <li className="my-14 cursor-pointer">
                  <a href="#Home" onClick={() => setIsNavOpen(false)}>Home</a>
               </li>
               <li className="my-14 cursor-pointer">
                  <a href="#AboutUs" onClick={() => setIsNavOpen(false)}>Sobre nós</a>
               </li>
               <li className="my-14 cursor-pointer">
                  <a href="#Events" onClick={() => setIsNavOpen(false)}>Eventos</a>
               </li>
               <li className="my-14 cursor-pointer">
                  <a href="#Members" onClick={() => setIsNavOpen(false)}>Membros</a>
               </li>
            </ul>
            <div className="flex justify-center pt-12">
               <img className="w-3/12" src="epc-semfundo.png" alt=""/>
            </div>
         </div>
      </section>
   );
};

export default Hamburger;