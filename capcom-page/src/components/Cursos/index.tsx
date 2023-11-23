import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Palestrantes from './Palestrantes';

type Course = {
   title: string;
   alternativeTitle: string;
   longerTitle?: string;
   details: string;
   prerequisites: string;
   shadowBackgroundColor: string;
   dia: string;
   data: string;
   id: number;
   palestrante1: {
      nome: string;
      frase: string;
      foto: string;
      instagram: string;
      linkedin: string;
      github: string;
   };
   palestrante2?: {
      nome: string;
      frase: string;
      foto: string;
      instagram: string;
      linkedin: string;
      github: string;
   };
};

type CourseComponentProps = {
   quarta: Course[];
   quinta: Course[];
   sexta: Course[];
};

const MiniCourse = ({ course }: { course: Course }) => {
   const [isHovered, setIsHovered] = useState(false);
   const [modalOpen, setModalOpen] = useState(false);

   return (
      <div
         className="p-3 border rounded-md mx-16 my-4 cursor-pointer"
         style={{
            boxShadow: isHovered ? '0 0 10px #11cdf7' : '0 0 3px #959596',
         }}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
         onClick={() => setModalOpen(!modalOpen)}
      >
         <div className="flex justify-center relative">
            <p className="absolute left-0 text-xs font-thin font-mono">{course.data}</p>
            <h1 className="text-2xl font-extralight pt-2">{course.title}</h1>
         </div>
         <h2 className="text-sm font-mono mt-3">{course.alternativeTitle}</h2>
         <Modal
            title={
               <div>
                  <h2 className="text-3xl">{course.title}</h2>
               </div>
            }
            centered
            open={modalOpen}
            onOk={() => setModalOpen(false)}
            onCancel={() => setModalOpen(false)}
            okButtonProps={{ style: { display: 'none' } }}
            cancelButtonProps={{ style: { display: 'none' } }}
         >
            <div className="grid grid-cols-2 pt-8">
               <p className="text-justify">{course.details}</p>
               <Palestrantes palestrante1={course.palestrante1} palestrante2={course.palestrante2} />
            </div>
         </Modal>
      </div>
   );
};

const MiniCoursesView = ({ quarta, quinta, sexta }: CourseComponentProps) => {
   const [selectedLink, setSelectedLink] = useState<string>('Todos');

   const handleClick = (day: string) => {
      setSelectedLink(day);
   };

   let coursesToShow = [] as Course[];
   switch (selectedLink) {
      case 'Quarta':
         coursesToShow = quarta;
         break;
      case 'Quinta':
         coursesToShow = quinta;
         break;
      case 'Sexta':
         coursesToShow = sexta;
         break;
      case 'Todos':
         coursesToShow = [...quarta, ...quinta, ...sexta];
         break;
      default:
         coursesToShow = [...quarta, ...quinta, ...sexta];
         break;
   }

   return (
      <div className="flex flex-col justify-center my-24 pb-24 pt-24" id="Minicursos">
         <h1 className="text-4xl mt-14"><code>minicursos ofertados</code></h1>
         <p className="mb-2"><code>14:00 às 18:00 ----- 29/11 até 01/12</code></p>
         <div className="flex items-center -mx-4 space-x-20 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap mb-6">
            <a onClick={() => handleClick('Quarta')} className={`flex items-center flex-shrink-0 px-5 py-2 border-b-4 cursor-pointer font-medium ${selectedLink === 'Quarta' ? 'border-y-sky-300' : 'border-gray-800'}`}>quarta</a>
            <a onClick={() => handleClick('Quinta')} className={`flex items-center flex-shrink-0 px-5 py-2 border-b-4 cursor-pointer font-medium ${selectedLink === 'Quinta' ? 'border-y-sky-300' : 'border-gray-800'}`}>quinta</a>
            <a onClick={() => handleClick('Sexta')} className={`flex items-center flex-shrink-0 px-5 py-2 border-b-4 cursor-pointer font-medium ${selectedLink === 'Sexta' ? 'border-y-sky-300' : 'border-gray-800'}`}>sexta</a>
            <a onClick={() => handleClick('Todos')} className={`flex items-center flex-shrink-0 px-5 py-2 border-b-4 cursor-pointer font-medium ${selectedLink === 'Todos' ? 'border-y-sky-300' : 'border-gray-800'}`}>todos</a>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-24 mt-6">
            {coursesToShow.map((course) => (
               <div>
                  <MiniCourse key={course.id} course={course} />
               </div>
            ))}
         </div>
      </div>
   );
};

export default MiniCoursesView;
