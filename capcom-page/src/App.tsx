import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Cursos from './components/Cursos';
import Footer from './components/Footer';

let courses = [
    {
        title: 'Introdução ao React',
        day: 'Sexta-feira',
        details: 'Aprenda a criar aplicações web com React!',
        id: 1,
    },
    {
        title: 'Introdução ao JavaScript',
        day: 'Sábado',
        details: 'Aprenda a criar aplicações web com JavaScript!',
        id: 2,
    },
    {
        title: 'Introdução ao TypeScript',
        day: 'Domingo',
        details: 'Aprenda a criar aplicações web com TypeScript!',
        id: 3,
    },
    {
        title: 'Introdução ao Node.js',
        day: 'Segunda-feira',
        details: 'Aprenda a criar aplicações web com Node.js!',
        id: 4,
    }
];

function App() {
    return (
        <div className="App">
            <Header />
            <Welcome numImages={4}/> {/* passar número de imagens para o slider aqui */}
            <Cursos courses={courses} />
            <Footer />
        </div>
    );
}

export default App;
