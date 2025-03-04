function Contact() {
    const [message, setMessage] = React.useState("");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [messages, setMessages] = React.useState([
        { id: 1, name: "John Doe", message: "Amazing portfolio! Would love to collaborate on a project.", date: "2025-02-15" },
        { id: 2, name: "Sarah Smith", message: "Your design work is truly inspiring. The attention to detail is remarkable.", date: "2025-01-10" },
        { id: 3, name: "Lina Baciu", message: "Thank you for creating packaging and brand identity for my products, It was pleasure to work with you!.", date: "2024-12-10" },
        { id: 4, name: "Cris Dulger", message: "We have been cooperating with Sofiia for many years and I am thankful I met her when started my jewellery business. She created brand identity, logo, all the printed production.", date: "2024-11-20" }
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!message || !name || !email || !phone) return;

        const newMessage = {
            id: messages.length + 1,
            name,
            message,
            date: new Date().toISOString().split('T')[0]
        };

        setMessages([newMessage, ...messages]);
        setMessage("");
        setName("");
        setEmail("");
        setPhone("");
    };

    return (
        <div className="mt-16 mb-16" data-name="contact-section">
    <div className="flex items-center gap-4 mb-8">
        <h2 className="section-title contact">CONTACT</h2>
        <div className="h-[2px] flex-1 bg-gradient-to-r from-gray-200 to-gray-300 "></div>
    </div>
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Message Board */}
        <div className="space-y-6 order-2 md:order-1" data-name="message-board">
            <h3 className="text-xl font-semibold flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-300 text-gray-900">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4z"/>
                    </svg>
                </span>
                Message Board
            </h3>
            <div className="space-y-4">
                {messages.map((msg) => (
                    <div key={msg.id} className="relative group" data-name="message-item">
                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-100 via-violet-100 to-blue-100 rounded-xl blur opacity-0 group-hover:opacity-25 transition duration-500"></div>
                        <div className="relative bg-white/70 backdrop-blur-md p-4 rounded-lg border border-gray-100">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                    <span className="font-medium text-gray-800">{msg.name}</span>
                                </div>
                                <span className="text-sm text-gray-500">{msg.date}</span>
                            </div>
                            <p className="text-gray-600">{msg.message}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Contact Form */}
        <div id="contact-form" className="relative order-1 md:order-1" data-name="contact-form-container">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-pink-100 via-violet-100 to-blue-100 rounded-2xl blur opacity-25"></div>
            <form onSubmit={handleSubmit} className="relative bg-white/70 backdrop-blur-md rounded-xl p-6 space-y-6" data-name="contact-form">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name <span className="text-red-500"> *</span></label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2.5 rounded-lg bg-white/50 border border-gray-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none transition-all" placeholder="Your name" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email <span className="text-red-500"> *</span></label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2.5 rounded-lg bg-white/50 border border-gray-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none transition-all" placeholder="your.email@example.com" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-2.5 rounded-lg bg-white/50 border border-gray-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none transition-all" placeholder="Your phone number" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message <span className="text-red-500"> *</span></label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-4 py-2.5 rounded-lg bg-white/50 border border-gray-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none transition-all h-32 resize-none" placeholder="Write your message here..."></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-[#FB6F6F] to-[#990000] text-white py-3 rounded-lg hover:from-[#8A2D2D] hover:to-[#660000] transition-all shadow-lg shadow-violet-200">Send Message</button>
            </form>
        </div>
    </div>
</div>

    );
}
