function Profile() {
    try {
        return (
            <div className="flex gap-8 mt-12 pb-12 items-start mb-18 border-b-2 border-gray-300 flex-col md:flex-row" data-name="profile-section">
                {/* Image Container */}
                <div className="profile-image-container w-300px md:w-1/8 h-144 overflow-hidden" data-name="profile-image">
                    <img 
                        src="./img/photo_tittle.png"
                        alt="Sofia Dumiak"
                        className="w-full h-auto object-contain md:object-cover"
                    />
                </div>
                
                {/* Text and Icons Container */}
                <div className="flex-1 flex flex-col items-start gap-4 mt-7" data-name="profile-info">
                    <div className="flex flex-col md:flex-row gap-8 w-full" data-name="profile-text-and-icons">
                        {/* Text Container */}
                        <div className="flex-1" data-name="profile-text">
                            <p className="text-xl leading-relaxed mb-8 text-gray-800" data-name="introduction">
                                Creative and attentive to details Graphic, UI/UX designer & Social Media Specialist with 5+ years of experience in branding, logo design, concept development and print production. Proficient in Adobe Creative Suite Software, Figma and other design tools. Passionate about crafting visually compelling designs that elevate brand identity.
                            </p>
                        </div>

                        {/* Icons Container */}
                        <div className="flex flex-col items-start gap-4" data-name="contact-info">
                            <div className="flex items-center gap-3 group cursor-pointer" data-name="behance-link">
                                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-900 text-white font-semibold text-sm transition-colors group-hover:bg-gray-800 border-2 border-white">
                                    Be
                                </span>
                                <a href="https://behance.net/charlotteharris" className="text-gray-600 hover:text-gray-900 transition-colors">Behance portfolio</a>
                            </div>
                            <div className="flex items-center gap-3 group cursor-pointer" data-name="phone-number">
                                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-900 text-white transition-colors group-hover:bg-gray-800 border-2 border-white">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                    </svg>
                                </span>
                                <span className="text-gray-600">+353 89 444 5373</span>
                            </div>
                            <div className="flex items-center gap-3 group cursor-pointer" data-name="email">
                                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-900 text-white transition-colors group-hover:bg-gray-800 border-2 border-white">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                </span>
                                <a href="mailto:Sofia.Dumiak@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">dumiak@outlook.com</a>
                            </div>
                            {/* LinkedIn Container */}
                            <div className="flex items-center gap-3 group cursor-pointer" data-name="linkedin-link">
                                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-900 text-white font-semibold text-sm transition-colors group-hover:bg-gray-800 border-2 border-white">
                                    in
                                </span>
                                <a href="https://www.linkedin.com/in/sofia-dumiak" className="text-gray-600 hover:text-gray-900 transition-colors">LinkedIn Profile</a>
                            </div>
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
