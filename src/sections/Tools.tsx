

const toolsData = [
    { name: 'React', icon: 'react', color: 'blue' },
    { name: 'JavaScript', icon: 'js', color: 'blue' },
    { name: 'HTML5', icon: 'html5', color: 'blue' },
    { name: 'CSS3', icon: 'css3-alt', color: 'blue' },
    { name: 'Node.js', icon: 'node', color: 'pink' },
    { name: 'MongoDB', icon: 'database', color: 'pink' },
    { name: 'Python', icon: 'python', color: 'pink' },
    { name: 'Express', icon: 'server', color: 'pink' },
    { name: 'MySQL', icon: 'database', color: 'pink' },
    { name: 'Git', icon: 'git-alt', color: 'purple' },
];

const Tools = () => {
    return (
        <section id="tools" className="tools section py-20 bg-checkered bg-opacity-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center neon-text-blue">
                    <span className="neon-text-pink">&lt;</span> Ferramentas & Tecnologias <span className="neon-text-pink">/&gt;</span>
                </h2>
                <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
                    Tecnologias que domino e utilizo regularmente para criar soluções incríveis.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {toolsData.map((tool, idx) => (
                        <div
                            key={idx}
                            className={`text-center p-4 neon-border-${tool.color} rounded-lg transition-transform duration-300 hover:scale-110`}
                        >
                            <i className={`fab fa-${tool.icon} text-5xl mb-3 text-neon-${tool.color} tech-icon`}></i>
                            <h3 className={`font-bold neon-text-${tool.color}`}>{tool.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tools;