function Welcome() {
    return (
        <section id="welcome" className="section flex items-center justify-centerk pt-10 bg-checkered">
            <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 neon-text-blue">
                        Olá, eu sou <span className="neon-text-pink">Dev Neon</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl mb-6 neon-text-purple">Desenvolvedor Full Stack</h2>
                    <p className="text-lg mb-8 text-gray-300 max-w-lg">
                        Criando experiências digitais impressionantes com tecnologias de ponta e designs inovadores.
                    </p>
                    <div className="flex space-x-4 justify-center md:justify-start">
                        <a href="#projects" className="px-6 py-3 bg-transparent neon-border-blue text-white rounded-lg neon-btn hover:bg-blue-900 hover:bg-opacity-30">Meus Projetos</a>
                        <a href="#about" className="px-6 py-3 bg-transparent neon-border-pink text-white rounded-lg neon-btn hover:bg-pink-900 hover:bg-opacity-30">Sobre Mim</a>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-[var(--neon-blue)] blur-xl opacity-30 animate-pulse"></div>
                        <img src="Coding.gif" alt="Profile" className=" w-100 h-100 rounded-full object-cover relative transition-transform duration-300 hover:rotate-3 hover:scale-110" />
                    </div>
                </div>
            </div>
            <hr className="h-50"></hr>
        </section>
    );
}

export default Welcome;