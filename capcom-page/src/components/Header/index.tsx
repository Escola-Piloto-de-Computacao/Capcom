const Header = () => {
    return (
        <header className="flex flex-col justify-center mt-10">
            <h1 className="text-4xl">CAPCOM</h1>
            <nav className="flex justify-center gap-32 my-8 text-lg">
                <a href="#Cursos" className="">Cursos</a>
                <a href="#Inscrições" className="">Inscrições</a>
                <a href="#AboutUs">Sobre nós</a>
            </nav>
        </header>
    );
};
export default Header;