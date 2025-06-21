import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // ícones do menu

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "Home", href: "#home" },
        { label: "Sobre", href: "#about" },
        { label: "Projetos", href: "#projects" },
        { label: "Ferramentas", href: "#tools" },
    ];

    return (
        <header
            className={`fixed top-0 z-50 left-0 right-10 transition-all ${scrolled
                ? "backdrop-blur-md shadow-md bg-slate-900/50"
                : "bg-transparent backdrop-blur-0 shadow-none"
                }`}
        >
            <div className="container mx-auto">
                <div className="flex justify-between items-center px-10">
                    {/* Logo */}
                    <div className="text-2xl font-bold neon-text-blue">
                        &lt; Douglas /&gt;
                    </div>

                    {/* Ícone do menu (mobile) */}
                    <button
                        className="sm:hidden p-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Abrir Menu"
                    >
                        {menuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
                    </button>

                    {/* Navegação (desktop) */}
                    <nav className="hidden sm:flex gap-8">
                        {navLinks.map(({ label, href }) => (
                            <a
                                key={href}
                                href={href}
                                className="group relative px-1 py-2 text-lg font-bold"
                            >
                                <span className="relative z-10 transition-colors duration-300 text-sky-400 group-hover:text-white">
                                    {label}
                                </span>
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 group-hover:scale-x-100 scale-x-0"></span>
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Menu mobile (dropdown) */}
                {menuOpen && (
                    <div className="sm:hidden mt-4 flex flex-col gap-4 bg-slate-900/80 rounded-xl p-4 backdrop-blur">
                        {navLinks.map(({ label, href }) => (
                            <a
                                key={href}
                                href={href}
                                className="text-lg font-bold text-sky-400 hover:text-white transition-colors pl-5"
                                onClick={() => setMenuOpen(false)} // fecha o menu ao clicar
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
}




{/*<nav className="ml-8 flex items-center space-x-8">
                        <a href="#home" className="group relative px-1 py-2 text-xl font-medium">
                            <span className="relative z-10 transition-colors duration-300 text-[#e2d3fd] group-hover:text-white">Home</span>
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
                        </a>
                        <a href="#about" className="group relative px-1 py-2 text-xl font-medium">
                            <span className="relative z-10 transition-colors duration-300 text-[#e2d3fd] group-hover:text-white">Sobre</span>
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
                        </a>
                        <a href="#projects" className="group relative px-1 py-2 text-xl font-medium">
                            <span className="relative z-10 transition-colors duration-300 text-[#e2d3fd] group-hover:text-white">Projetos</span>
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
                        </a>
                        <a href="#tools" className="group relative px-1 py-2 text-xl font-medium">
                            <span className="relative z-10 transition-colors duration-300 text-[#e2d3fd] group-hover:text-white">Ferramentas</span>
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
                        </a>
                    </nav>*/}
export default Header;