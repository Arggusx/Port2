
function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 bg-[rgba(99, 102, 241, 0.3)] backdrop-blur z-50">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold neon-text-blue">&lt; Douglas /&gt;</div>

                    <nav className="hidden md:flex space-x-8">
                        <a href="#welcome" className="nav-link text-white hover:text-[var(--neon-blue)] transition duration-300">Home</a>
                        <a href="#about" className="nav-link text-white hover:text-[var(--neon-pink)] transition duration-300">Sobre</a>
                        <a href="#projects" className="nav-link text-white hover:text-[var(--neon-purple)] transition duration-300">Projetos</a>
                        <a href="#tools" className="nav-link text-white hover:text-[var(--neon-blue)] transition duration-300">Ferramentas</a>
                    </nav>
                </div>
            </div>


        </header>
    );
}

export default Header;