function Education() {
    try {
        const educationItems = [
            {
                period: "2015-2020",
                title: "Art School",
                description: "Applied Arts & Design, honour degree."
            },
            {
                period: "2019-2022",
                title: "IT Step Academy",
                description: "Graphic, 3D & Web Design"
            },
            {
                period: "2020-2025",
                title: "National Technical University of Oil and Gas",
                description: "Bachelor’s Degree in Interpreting & Translating."
            }
        ];

        return (
            <div className="mt-12" data-name="education-section">
                <h2 className="section-title education">EDUCATION</h2>
                <div className="relative">
                    <div className="timeline-line"></div>
                    <div className="space-y-8 pl-8">
                        {educationItems.map((item, index) => (
                            <div key={index} className="relative" data-name="education-item">
                                <div className="timeline-dot absolute -left-8 top-2"></div>
                                <div className="text-black-500">{item.period}</div>
                                <div className="font-bold">{item.title}</div>
                                <div className="text-gray-600">{item.description}</div>
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

