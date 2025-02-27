function TypeWriter({ messages }) {
    try {
        const [currentText, setCurrentText] = React.useState("");
        const [currentIndex, setCurrentIndex] = React.useState(0);
        const [isTyping, setIsTyping] = React.useState(true);

        React.useEffect(() => {
            const currentMessage = messages[currentIndex];
            
            if (isTyping) {
                if (currentText.length < currentMessage.length) {
                    const timeoutId = setTimeout(() => {
                        setCurrentText(currentMessage.slice(0, currentText.length + 1));
                    }, 100);
                    return () => clearTimeout(timeoutId);
                } else {
                    const timeoutId = setTimeout(() => {
                        setIsTyping(false);
                    }, 2000);
                    return () => clearTimeout(timeoutId);
                }
            } else {
                if (currentText.length > 0) {
                    const timeoutId = setTimeout(() => {
                        setCurrentText(currentText.slice(0, -1));
                    }, 50);
                    return () => clearTimeout(timeoutId);
                } else {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
                    setIsTyping(true);
                }
            }
        }, [currentText, currentIndex, isTyping, messages]);

        return (
            <div className="typewriter-container" data-name="typewriter">
                {currentText}<span className="animate-blink">|</span>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
