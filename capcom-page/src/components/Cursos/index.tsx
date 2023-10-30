import React, { useState } from 'react';

type Course = {
    title: string;
    day: string;
    details: string;
    id: number;
};

const MiniCourse = ({ course }: { course: Course}) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="p-4 border rounded-md shadow-md">
            <h2 className="text-xl font-bold">{course.title}</h2>
            <p className="text-sm text-gray-500">Dia: {course.day}</p>
            <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={() => setShowDetails(!showDetails)}
            >
                {showDetails ? 'Esconder Detalhes' : 'Ver Detalhes'}
            </button>
            {showDetails && (
                <div className="mt-4 p-4 bg-gray-100 rounded-md">
                    <h3 className="font-bold">Detalhes do Minicurso:</h3>
                    <p>{course.details}</p>
                </div>
            )}
        </div>
    );
};

const MiniCoursesView = ({ courses }: { courses: Course[] }) => {
    return (
        <div className="flex flex-col justify-center my-12" id="Cursos">
            <h1 className=" text-2xl my-4">Minicursos</h1>
            <div className="flex flex-row justify-evenly gap-4 text-lg">
                <h2>29/11</h2>
                <h2>30/11</h2>
                <h2>01/12</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map((course) => (
                    <MiniCourse key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default MiniCoursesView;
