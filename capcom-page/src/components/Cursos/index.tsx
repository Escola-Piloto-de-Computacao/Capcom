import React, { useEffect, useState } from 'react';
import { Modal, Switch } from 'antd';
import Palestrantes from './Palestrantes';
import { Events, scroller } from 'react-scroll';
import Mapa from './Mapa';
import Tags from './Tags';

type Course = {
   title: string;
   alternativeTitle: string;
   details: string;
   lab: string;
   prerequisites: string;
   etiqueta?: string[];
   shadowBackgroundColor: string;
   dia: string;
   data: string;
   publicoGeral: boolean;
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
         className="p-3 border rounded-md mx-16 my-4 transform group-hover:scale-110 cursor-pointer"
         style={{
            boxShadow: isHovered ? `0 0 16px ${course.shadowBackgroundColor}` : '0 0 4px #1fcbff',
         }}
         onClick={() => setModalOpen(!modalOpen)}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
      >
         <div className="flex justify-center relative space-y-2">
            <p className="absolute left-0 text-xs font-thin font-mono">{course.data} --- {course.lab}</p>
            <h1 className="text-2xl font-extralight pt-4">{course.title}</h1>
            <div className="absolute right-0 bottom-9 flex gap-2">
               {course.etiqueta?.map((tag, index) => (
                  <Tags key={index} tag={tag} color={course.shadowBackgroundColor} />
               ))}
            </div>
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
            className="modal-width"
         >
            <div className="flex flex-col lg:flex-row lg:gap-12 gap-0">
               <div>
                  <h1 className="text-lg font-light">{course.alternativeTitle}</h1>
                  <p className="text-justify text-base md:text-base lg:text-lg font-normal flex-grow pt-8" style={{ flexBasis: '0', flexGrow: '2.5' }}>{course.details}</p>
                  <h2 className="pt-6 text-lg font-semibold">Pré-Requisitos:</h2>
                  <p className="pt-1">{course.prerequisites}</p>
                  <div className="flex items-center justify-center lg:block">
                     <button
                        type="button"
                        className="px-8 py-3 mt-7 lg:ml-5 font-semibold rounded bg-sky-400 text-black"
                        onClick={() => {
                           Events.scrollEvent.register('end', () => {
                              setModalOpen(false);
                              Events.scrollEvent.remove('end');
                           });

                           scroller.scrollTo('Inscricoes', {
                              duration: 1500,
                              smooth: true,
                           });
                        }}
                     >
                        Inscrever-se!
                     </button>
                  </div>
               </div>
               <div style={{ flexBasis: '0', flexGrow: '1' }} className="mt-12 lg:mt-0">
                  <Palestrantes palestrante1={course.palestrante1} palestrante2={course.palestrante2} />
               </div>
            </div>

         </Modal>
      </div>
   );
};

const MiniCoursesView = ({ quarta, quinta, sexta }: CourseComponentProps) => {

   const [selectedLink, setSelectedLink] = useState<string>('Todos');
   const [coursesToShow, setCoursesToShow] = useState<Course[]>([]);
   const [isSwitchActivated, setIsSwitchActivated] = useState<boolean>(false);

   function filterCourses(courses: Course[]): Course[] {
      return courses.filter(course => course.publicoGeral);
   }

   const handleClick = (day: string) => {
      setSelectedLink(day);
   };

   useEffect(() => {
      let selectedCourses: Course[] = [];

      switch (selectedLink) {
         case 'Quarta':
            selectedCourses = quarta;
            break;
         case 'Quinta':
            selectedCourses = quinta;
            break;
         case 'Sexta':
            selectedCourses = sexta;
            break;
         case 'Todos':
            selectedCourses = [...quarta, ...quinta, ...sexta];
            break;
         default:
            selectedCourses = [];
      }

      if (isSwitchActivated) {
         selectedCourses = filterCourses(selectedCourses);
      }

      setCoursesToShow(selectedCourses);
   }, [selectedLink, quarta, quinta, sexta, isSwitchActivated]);

   function randomizeCourses(courses: Course[]) {
      return courses.sort(() => Math.random() - 0.5);
   }

   return (
      <div className="flex flex-col justify-center my-24 mt-0 pb-0 pt-10 lg:pt-24" id="Minicursos">
         <h1 className="text-4xl mt-14"><code>minicursos ofertados</code></h1>
         <p className="mb-2 text-sm lg:text-base">
            <code>
               14:00 às 18:00 ----- 29/11 até 01/12 -----
            </code>
            <Mapa />
         </p>
         <div className="flex items-center justify-center -mx-4 space-x-[0.5rem] lg:space-x-20 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap mb-6">
            <a onClick={() => handleClick('Quarta')} className={`flex items-center flex-shrink-0 px-5 py-2 border-b-4 cursor-pointer font-medium ${selectedLink === 'Quarta' ? 'border-y-sky-300' : 'border-gray-800'}`}>quarta</a>
            <a onClick={() => handleClick('Quinta')} className={`flex items-center flex-shrink-0 px-5 py-2 border-b-4 cursor-pointer font-medium ${selectedLink === 'Quinta' ? 'border-y-sky-300' : 'border-gray-800'}`}>quinta</a>
            <a onClick={() => handleClick('Sexta')} className={`flex items-center flex-shrink-0 px-5 py-2 border-b-4 cursor-pointer font-medium ${selectedLink === 'Sexta' ? 'border-y-sky-300' : 'border-gray-800'}`}>sexta</a>
            <a onClick={() => handleClick('Todos')} className={`flex items-center flex-shrink-0 px-5 py-2 border-b-4 cursor-pointer font-medium ${selectedLink === 'Todos' ? 'border-y-sky-300' : 'border-gray-800'}`}>todos</a>
         </div>
         <div className="text-start lg:grid lg:grid-cols-12" >
            <div className="flex items-center p-2 rounded-md lg:col-start-3 lg:col-span-3 justify-center lg:justify-normal">
               <Switch
                  className='custom-switch'
                  onChange={(checked) => setIsSwitchActivated(checked)
                  }
               />
               <p className="pl-2">Sou aluno de outro curso!</p>
            </div>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-24 mt-6">
            {randomizeCourses(coursesToShow).map((course) => (
               <div className="group transition-transform">
                  <MiniCourse key={course.id} course={course} />
               </div>
            ))}
         </div>
      </div>
   );
};

export default MiniCoursesView;
