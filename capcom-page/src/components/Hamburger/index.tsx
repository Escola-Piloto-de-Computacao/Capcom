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
            <div className="fixed inset-0 bg-black opacity-75"></div>
         )}

         <div className={`absolute py-8 ${isNavOpen ? "flex flex-col col-span-1 h-screen w-screen" : "hidden"}`}>
            <svg
               className="h-12 w-12 text-white cursor-pointer absolute top-2 left-8"
               viewBox="0 0 24 24"
               fill="none"
               stroke="white"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
               onClick={() => setIsNavOpen(false)}
            >
               <line x1="18" y1="6" x2="6" y2="18" />
               <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <div className="flex justify-center items-center h-[40rem]">
               <ul className="text-center min-h-[350px] mt-36 uppercase text-xl font-bold">
                  <li className="my-14 cursor-pointer">
                     <a href="#Home" onClick={() => setIsNavOpen(false)} className="text-white">Home</a>
                  </li>
                  <li className="my-14 cursor-pointer">
                     <a href="#AboutUs" onClick={() => setIsNavOpen(false)} className="text-white">Sobre nós</a>
                  </li>
                  <li className="my-14 cursor-pointer">
                     <a href="#Events" onClick={() => setIsNavOpen(false)} className="text-white">Eventos</a>
                  </li>
                  <li className="my-14 cursor-pointer">
                     <a href="#Members" onClick={() => setIsNavOpen(false)} className="text-white">Membros</a>
                  </li>
               </ul>
            </div>
         </div>
      </section>
   );
};

export default Hamburger;