function PortfolioCard({ project, onClick }) {
    try {
        return (
            <div 
                className="portfolio-card group cursor-pointer border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden" 
                onClick={() => onClick(project)}
                data-name="portfolio-card"
            >
                <div className="bg-white/70 backdrop-blur-md rounded-xl overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                        <img 
                            src={project.images[0]} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-black-600 transition-colors">
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

function ImageCarousel({ images, title }) {
    try {
        const [currentIndex, setCurrentIndex] = React.useState(0);

        const goToPrevious = () => {
            setCurrentIndex((prevIndex) => 
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
        };

        const goToNext = () => {
            setCurrentIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        };

        React.useEffect(() => {
            const handleKeyDown = (e) => {
                if (e.key === 'ArrowLeft') goToPrevious();
                if (e.key === 'ArrowRight') goToNext();
            };

            window.addEventListener('keydown', handleKeyDown);
            return () => window.removeEventListener('keydown', handleKeyDown);
        }, []);

        return (
            <div className="carousel-container" data-name="image-carousel">
                <img 
                    src={images[currentIndex]} 
                    alt={`${title} - Image ${currentIndex + 1}`}
                    className="modal-image"
                />
                
                <button 
                    onClick={goToPrevious}
                    className="carousel-arrow left"
                    aria-label="Previous image"
                    data-name="prev-button"
                >
                    <i className="fas fa-chevron-left"></i>
                </button>
                
                <button 
                    onClick={goToNext}
                    className="carousel-arrow right"
                    aria-label="Next image"
                    data-name="next-button"
                >
                    <i className="fas fa-chevron-right"></i>
                </button>

                <div className="carousel-dots" data-name="carousel-dots">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
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
        return (
            <Modal isOpen={!!project} onClose={onClose}>
                <ImageCarousel images={project.images} title={project.title} />
                <div className="modal-content" data-name="modal-content">
                    <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                    <div className="mb-6">
                        <span className="px-0 py-1 bg-black-100 text-red-600 rounded-full text-sm">
                            {project.category}
                        </span>
                    </div>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    <div className="space-y-4">
                       
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <span className="text-sm text-gray-500">Overview</span>
                                <p>{project.client}</p>
                            </div>
                            <div>
                                <span className="text-sm text-gray-500">Challenge</span>
                                <p>{project.duration}</p>
                            </div>
                            <div>
                                <span className="text-sm text-gray-500">Solution</span>
                                <p>{project.role}</p>
                            </div>
                            <div>
                            <span className="text-sm text-gray-500">Impact</span>
                            <p>{project.impact}</p>
                            </div>
                            <div>
                                <span className="text-sm text-gray-500">Tools Used</span>
                                <p>{project.tools}</p>
                            </div>
                        </div>
                       {/* CTA Кнопка */}
                        <button
                            className="mt-6 w-full bg-gradient-to-r from-[#FB6F6F] to-[#990000] text-white py-3 rounded-lg text-lg font-semibold hover:from-[#8A2D2D] hover:to-[#660000] transition-all shadow-lg shadow-violet-200"
                            onClick={() => {
                            onClose(); // Закриває модальне вікно
                            document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' }); // Прокручує до форми
                        }}
                        >
                         Contact for More Information
                        </button>
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
                images: [
                    "./img/foto1.png",
                    "./img/case1_2.png",
                    "./img/case1_3.png"
                ],
                description: "",
                client: "A strong brand is the foundation of a company’s success — especially in the competitive construction industry. My goal for this project was to create a bold, professional, and trustworthy identity that reflects the company’s expertise and reliability.",
                duration: "The client needed a modern yet timeless brand that would differentiate them in the market while maintaining a professional and approachable feel. They wanted a visual identity that would work seamlessly across various mediums, from business cards to construction site signage.",
                role: "The new branding helped the company establish a strong market presence, making them instantly recognizable and more appealing to potential clients and partners. The cohesive identity elevated their brand perception, leading to increased trust and business opportunities.",
                tools: "Adobe Illustrator, Photoshop"
            },
            {
                title: "Landing page for Hair Care Products",
                category: "UI/UX Design",
                images: [
                    "/img/macbook-16.png",
                    "./img/case2_2.png",
                    
                ],
                description: "",
                client: "A strong online presence is essential for modern brands, especially in the competitive beauty industry. For this project, I designed and developed a landing page (shop) to help sell eco-friendly hair care products online. The goal was to create a visually appealing, user-friendly, and high-converting shopping experience that aligns with the brand’s values.",
                duration: "The client needed an intuitive and aesthetically pleasing e-commerce landing page that would highlight the brand’s commitment to sustainability while making it easy for customers to browse and purchase products. The challenge was to balance functionality with design, ensuring a smooth shopping journey that enhances user engagement and trust.",
                impact: "I crafted a clean, modern, and conversion-focused landing page that reflects the brand’s eco-conscious identity. Using strategic UX/UI design, compelling product visuals, and persuasive copywriting, I ensured the page effectively communicated the brand story while driving sales. The layout, color scheme, and imagery were carefully curated to create a premium yet natural feel, reinforcing the brand’s positioning in the market.",
                role: "The new landing page streamlined the customer journey, increased engagement, and boosted online sales. With an optimized structure and clear calls-to-action, the brand saw improved conversion rates and a stronger online presence. The seamless design and functionality made it easier for customers to explore, trust, and purchase the products, helping the brand grow in the competitive eco-beauty space.",
                tools: "Figma, Sketch"
            },
            {
                title: "Eco Hair Care Packaging",
                category: "Packaging",
                images: [
                    "./img/photo-3.png",
                    "./img/case3_2.png",
                    "./img/case3_3.png",
                    
                ],
                description: "",
                client: "A strong brand identity is essential in the beauty industry, where packaging plays a vital role in attracting consumers and conveying a brand’s values. My goal for this project was to design a premium, eco-conscious, and visually appealing packaging solution for a high-quality hair care line.",
                duration: "The client wanted a sleek and sustainable packaging design that reflects the brand’s commitment to natural ingredients and professional-grade hair care. The challenge was to balance aesthetics with functionality while ensuring the design stood out on retail shelves.",
                impact: "The final design successfully positioned the brand as a premium, eco-friendly hair care line. The cohesive branding helped attract environmentally conscious consumers while reinforcing the product’s professional quality. The packaging not only enhances the user experience but also strengthens the brand’s presence in a competitive market.",
                role: "I created a sophisticated yet minimalistic packaging design that embodies elegance and sustainability. The combination of earthy tones, clean typography, and eco-friendly materials enhances the product’s natural appeal. Every detail, from the engraved bamboo lid to the refined label typography, was carefully curated to elevate the brand’s identity.",
                tools: "Adobe InDesign, Photoshop"
            },
            {
                title: "Aesthetic Clinic Social Media",
                category: "Social Media",
                images: [
                    "./img/App-Screens-Showcase-Presentation copy.png",
                    "./img/case4_2.png",
                    "./img/case4_3.png"
                ],
                description: "",
                client: "A powerful brand identity goes beyond just visuals—it creates trust, recognition, and engagement. For this project, I developed a cohesive and compelling digital presence for an aesthetic and dental clinic line. Through strategic content creation and visual storytelling, I helped elevate the brand’s appeal and connect with its target audience.",
                duration: "The client needed a strong online presence that would reflect their professionalism, expertise, and modern approach to aesthetics and dental care. The challenge was to create visually engaging content that not only showcased their services but also resonated with their audience across multiple social media platforms.",
                impact: "The refined branding and content strategy helped the clinic stand out in a competitive industry, increasing engagement, brand awareness, and customer trust. The cohesive visual identity and strategic marketing approach led to improved social media performance and a stronger connection with their audience.",
                role: "Using a combination of marketing strategy, design, photography, and videography, I crafted high-quality content tailored to different social media channels. From clean and elegant imagery to informative yet engaging videos, I ensured the brand’s messaging remained consistent, professional, and visually appealing. Each piece of content was designed to build credibility, attract potential clients, and reinforce the clinic’s reputation for excellence.",
                tools: "Procreate, Adobe Illustrator"
            }
        ];

        return (
            <div className="mt-16" data-name="portfolio-section">
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="section-title portfolio">PORTFOLIO</h2>
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-gray-300 to-transparent"></div>
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
