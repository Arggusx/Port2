import { useState } from "react";

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-90 z-50 shadow-lg">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold neon-text-blue">&lt;DevNeon/&gt;</div>

                    <nav className="hidden md:flex space-x-8">
                        <a href="#welcome" className="nav-link text-white hover:text-[var(--neon-blue)] transition duration-300">Home</a>
                        <a href="#about" className="nav-link text-white hover:text-[var(--neon-pink)] transition duration-300">Sobre</a>
                        <a href="#projects" className="nav-link text-white hover:text-[var(--neon-purple)] transition duration-300">Projetos</a>
                        <a href="#tools" className="nav-link text-white hover:text-[var(--neon-blue)] transition duration-300">Ferramentas</a>
                    </nav>

                    <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white focus:outline-none">
                        <i className="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-black bg-opacity-95 py-4">
                    <div className="container mx-auto px-4 flex flex-col space-y-4">
                        <a href="#welcome" className="nav-link text-white hover:text-[var(--neon-blue)] transition duration-300">Home</a>
                        <a href="#about" className="nav-link text-white hover:text-[var(--neon-pink)] transition duration-300">Sobre</a>
                        <a href="#projects" className="nav-link text-white hover:text-[var(--neon-purple)] transition duration-300">Projetos</a>
                        <a href="#tools" className="nav-link text-white hover:text-[var(--neon-blue)] transition duration-300">Ferramentas</a>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;