function PortfolioCard({ project, onClick }) {
    try {
        return (
            <div 
                className="portfolio-card group cursor-pointer" 
                onClick={() => onClick(project)}
                data-name="portfolio-card"
            >
                <div className="bg-white/70 backdrop-blur-md rounded-xl overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-800 ">
                            {project.title}
                        </h3>
                        <div className="mt-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500"></span>
                            <span className="text-sm text-gray-600">{project.category}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}

function PortfolioModal({ project, onClose }) {
    try {
        if (!project) return null;  // If there's no project, don't render the modal

        return (
            <Modal isOpen={!!project} onClose={onClose}>
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="modal-image"
                    data-name="modal-image"
                />
                <div className="modal-content" data-name="modal-content">
                    <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                    <div className="mb-6">
                        <span className="px-4 py-1 bg-black-100 text-violet-600 rounded-full text-sm">
                            {project.category}
                        </span>
                    </div>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Project Details</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <span className="text-sm text-gray-500">Client</span>
                                <p>{project.client}</p>
                            </div>
                            <div>
                                <span className="text-sm text-gray-500">Duration</span>
                                <p>{project.duration}</p>
                            </div>
                            <div>
                                <span className="text-sm text-gray-500">Role</span>
                                <p>{project.role}</p>
                            </div>
                            <div>
                                <span className="text-sm text-gray-500">Tools Used</span>
                                <p>{project.tools}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}

function Portfolio() {
    try {
        const [selectedProject, setSelectedProject] = React.useState(null);

        const projects = [
            {
                title: "Construction Company Branding",
                category: "Branding & Print production",
                image: "./img/photo-1.png",
                description: "A complete brand identity design for an eco-friendly product line that emphasizes sustainability and environmental consciousness. The project included logo design, packaging, and marketing materials.",
                client: "GreenLife Products",
                duration: "3 months",
                role: "Lead Designer",
                tools: "Adobe Illustrator, Photoshop"
            },
            {
                title: "Landing page for Hair Care Products",
                category: "UI/UX Design",
                image: "./img/photo-2.png",
                description: "Modern and secure mobile banking application interface design with focus on user experience and accessibility. The app features intuitive navigation and clean visual design.",
                client: "FinTech Solutions",
                duration: "6 months",
                role: "UI/UX Designer",
                tools: "Figma, Sketch"
            },
            {
                title: "Eco Hair Care Packaging",
                category: "Packaging",
                image: "./img/photo-3.png",
                description: "Editorial design and layout for high-end fashion magazine, incorporating typography, photography, and modern grid systems to create engaging spreads.",
                client: "Style Monthly",
                duration: "2 months",
                role: "Art Director",
                tools: "Adobe InDesign, Photoshop"
            },
            {
                title: "Aesthetic Clinic Social Media",
                category: "Social Media",
                image: "./img/photo-4.png",
                description: "Series of character illustrations for children's book, featuring whimsical and engaging designs that appeal to young readers while maintaining educational value.",
                client: "Kids Publishing House",
                duration: "4 months",
                role: "Illustrator",
                tools: "Procreate, Adobe Illustrator"
            }
        ];

        return (
            <div className="mt-16" data-name="portfolio-section">
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="section-title portfolio">PORTFOLIO</h2>
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-gray-300 to-gray-300"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {projects.map((project, index) => (
                        <PortfolioCard 
                            key={index} 
                            project={project}
                            onClick={setSelectedProject}
                        />
                    ))}
                </div>
                {selectedProject && (
                    <PortfolioModal 
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
