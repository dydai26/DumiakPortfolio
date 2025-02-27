function Skills() {
    try {
        const skills = [
            "Logo",
            "Layout Design",
            "Branding",
            "UI/UX Design",
            "Print Production",
            "Packaging",
            "Typography"
        ];

        const software = [
            "Illustrator",
            "Photoshop",
            "inDesing",
            "Figma",
            "3Ds Max",
            "AI Desing Tools",
            "And more..."
        ];

        return (
            <div className="mt-12" data-name="skills-section">
                <h2 className="section-title skills">SKILLS</h2>
                <div className="flex flex-wrap gap-3 mb-8">
                    {skills.map((skill, index) => (
                        <span key={index} className="px-4 py-2 rounded-full border border-gray-300">
                            {skill}
                        </span>
                    ))}
                </div>
                
                <h2 className="section-title skills mb-4">SOFTWARE</h2>
                <div className="flex flex-wrap gap-3">
                    {software.map((sw, index) => (
                        <span key={index} className="px-4 py-2 rounded-full border border-gray-300">
                            {sw}
                        </span>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
