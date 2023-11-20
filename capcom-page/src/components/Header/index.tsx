const Header = () => {
    return (
        <header className="flex flex-col justify-center mt-10">
            <h1 className="text-4xl">CAPCOM</h1>
          <nav className="flex justify-center gap-32 my-8 text-lg">
             <a href="#Home">Home</a>
                <a href="#Cursos">Minicursos</a>
                <a href="#Inscricoes">Inscrições</a>
            </nav>
        </header>
    );
};
export default Header;