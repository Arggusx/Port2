const Footer = () => {
    return (
        <footer className=" bg-opacity-90 py-5 border-t bg-checkered border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold neon-text-blue mb-4">&lt;DevNeon/&gt;</h2>
                        <p className="text-gray-400 max-w-md">
                            Criando experiências digitais impressionantes com paixão por tecnologia e design inovador.
                        </p>
                    </div>

                    <div className="mb-6 md:mb-0">
                        <h3 className="text-xl font-bold neon-text-pink mb-4">Navegação</h3>
                        <ul className="space-y-2">
                            <li><a href="#welcome" className="text-gray-400 hover:text-neon-blue transition">Home</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-neon-pink transition">Sobre</a></li>
                            <li><a href="#projects" className="text-gray-400 hover:text-neon-purple transition">Projetos</a></li>
                            <li><a href="#tools" className="text-gray-400 hover:text-neon-blue transition">Ferramentas</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold neon-text-purple mb-4">Contato</h3>
                        <div className="flex space-x-4 mb-4">
                            {['linkedin', 'github', 'twitter', 'instagram'].map((icon, i) => (
                                <a key={i} href="#" className={`text-2xl text-gray-400 hover:text-neon-${['blue', 'pink', 'purple', 'blue'][i]} transition neon-glow-hover`}>
                                    <i className={`fab fa-${icon}`}></i>
                                </a>
                            ))}
                        </div>
                        <p className="text-gray-400">
                            <i className="fas fa-envelope mr-2"></i> contato@devneon.com
                        </p>
                        <p className="text-gray-400 mt-2">
                            <i className="fas fa-phone mr-2"></i> +55 (11) 98765-4321
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
                    <p>&copy; 2023 DevNeon. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;