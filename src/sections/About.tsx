function About() {
    return (
        <section id="about" className="section py-20 bg-opacity-50 bg-checkered">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center neon-text-pink">
                    <span className="neon-text-blue">&lt;</span> Sobre Mim <span className="neon-text-blue">/&gt;</span>
                </h2>

                <div className="flex flex-col md:flex-row items-center">


                    <div className="md:w-2/3 md:pl-12">
                        <h3 className="text-2xl font-bold mb-4 neon-text-purple">Quem sou eu?</h3>
                        <p className="text-gray-300 mb-6 pr-100 leading-relaxed">
                            Sou um desenvolvedor apaixonado por tecnologia com mais de 5 anos de experiência criando soluções digitais inovadoras. Minha jornada começou quando eu era adolescente, mexendo com scripts e modificando jogos, e desde então nunca parei de aprender e evoluir.
                        </p>

                        <h3 className="text-2xl font-bold mb-4 neon-text-blue">Minha Filosofia</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed pr-100">
                            Acredito que o código não é apenas funcionalidade, mas sim uma forma de arte. Cada linha deve ser escrita com propósito, elegância e eficiência. Meu objetivo é criar experiências que não apenas funcionem perfeitamente, mas que também encantem os usuários.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="p-4 neon-border-blue rounded-lg">
                                <h4 className="font-bold mb-2 neon-text-blue">Educação</h4>
                                <p className="text-gray-300">Ciência da Computação - Universidade Tech</p>
                            </div>
                            <div className="p-4 neon-border-pink rounded-lg">
                                <h4 className="font-bold mb-2 neon-text-pink">Experiência</h4>
                                <p className="text-gray-300">5+ anos desenvolvendo soluções web</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/3 mb-10 md:mb-0 flex justify-center">
                        <img src="minha-foto.jpg" alt="About Me" className="profile-img rounded-full w-70 h-70 object-cover transition-transform duration-300 hover:opacity-80 hover:scale-110" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;