function Experience() {
    try {
        const experiences = [
            {
                period: "2019 - Present",
                title: "Freelance Graphic Designer, SMM",
                company: "I have worked on diverse projects across various industries, both within the EU and internationally. I have created hundreds of designs, specializing in logo design, branding, and print production. My work involves developing visually compelling content for businesses, ensuring strong brand identity and effective marketing materials. Additionally, I have managed social media strategies, enhancing online presence and engagement for clients."
            },
            {
                period: "2022 - 2023",
                title: "Graphic designer & Social media Co-ordinator at Green Dental & Aesthetics",
                company: "As a Social Media Coordinator at Green Dental, I was responsible for creating engaging video and photo content, content planning, and scheduling social media posts. I also conducted competitor analysis to optimize our digital strategy. In addition to video and photo editing, I worked on graphic design projects to enhance the brand’s online presence. A key challenge was redesigning the website to seamlessly integrate both the aesthetic and dental clinic into a single, cohesive web page, ensuring a user-friendly and visually appealing experience."
            },
            {
                period: "2021 - 2022",
                title: "Senior Graphic Designer - Solutions & Technologies",
                company: ""
            },
            {
                period: "2020 - 2021",
                title: "Art Director - Food Guru Restaurant Chain",
                company: ""
            }
        ];

        return (
            <div className="mt-12" data-name="experience-section">
                <h2 className="section-title experience">EXPERIENCE</h2>
                <div className="relative">
                    <div className="timeline-line"></div>
                    <div className="space-y-8 pl-8">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative" data-name="experience-item">
                                <div className="timeline-dot absolute -left-8 top-2"></div>
                                <div className="text-black-500">{exp.period}</div>
                                <div className="font-bold">{exp.title}</div>
                                <div className="text-gray-600">{exp.company}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
