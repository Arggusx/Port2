const Projects = () => {
    return (
        <section id="projects" className="section py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center neon-text-purple">
                    <span className="neon-text-blue">&lt;</span> Meus Projetos <span className="neon-text-blue">/&gt;</span>
                </h2>
                <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
                    Alguns dos projetos em que trabalhei, combinando criatividade, tecnologia e performance.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Projeto 1 */}
                    <ProjectCard
                        icon="laptop-code"
                        title="Sistema de Gerenciamento"
                        desc="Plataforma completa para gestão de negócios com dashboard interativo e relatórios em tempo real."
                        techs={["React", "Node.js", "MongoDB"]}
                        color="blue"
                    />

                    {/* Projeto 2 */}
                    <ProjectCard
                        icon="mobile-alt"
                        title="App de Finanças"
                        desc="Aplicativo móvel para controle financeiro pessoal com integração bancária e análise de gastos."
                        techs={["Flutter", "Firebase", "Dart"]}
                        color="pink"
                    />

                    {/* Projeto 3 */}
                    <ProjectCard
                        icon="gamepad"
                        title="Jogo Web"
                        desc="Jogo multiplayer online desenvolvido com tecnologias web modernas e física realista."
                        techs={["Three.js", "WebSockets", "JavaScript"]}
                        color="purple"
                    />
                </div>

                <div className="text-center mt-12">
                    <a href="#" className="inline-block px-6 py-3 bg-transparent neon-border-blue text-white rounded-lg neon-btn hover:bg-blue-900 hover:bg-opacity-30">
                        Ver Todos os Projetos
                    </a>
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ icon, title, desc, techs, color }: { icon: string; title: string; desc: string; techs: string[]; color: string }) => {
    return (
        <div className={`project-card rounded-lg overflow-hidden neon-border-${color}`}>
            <div className={`h-48 bg-gradient-to-r from-${color}-900 to-purple-900 flex items-center justify-center`}>
                <i className={`fas fa-${icon} text-6xl text-neon-${color}`}></i>
            </div>
            <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 neon-text-${color}`}>{title}</h3>
                <p className="text-gray-300 mb-4">{desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {techs.map((tech, idx) => (
                        <span key={idx} className={`px-2 py-1 bg-${color}-900 bg-opacity-50 text-xs rounded`}>{tech}</span>
                    ))}
                </div>
                <a href="#" className={`text-neon-${color} hover:underline neon-glow-hover`}>Ver Projeto →</a>
            </div>
        </div>
    );
};

export default Projects;