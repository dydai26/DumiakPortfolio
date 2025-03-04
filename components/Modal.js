function Modal({ isOpen, onClose, children }) {
    try {
        const [isActive, setIsActive] = React.useState(false);
        const modalRoot = document.getElementById('modal-root');

        React.useEffect(() => {
            if (isOpen) {
                document.body.style.overflow = 'hidden';
                setTimeout(() => setIsActive(true), 10);
            } else {
                document.body.style.overflow = ''; // Відновлення прокрутки
                setIsActive(false);
            }

            return () => {
                document.body.style.overflow = ''; // Відновлення при розмонтуванні
            };
        }, [isOpen]);

        if (!isOpen) return null;

        return ReactDOM.createPortal(
            <div 
                className={`modal-overlay ${isActive ? 'active' : ''}`} // Виправлено синтаксис
                onClick={onClose}
                data-name="modal-overlay"
            >
                <div 
                    className={`modal-container ${isActive ? 'active' : ''}`} // Виправлено синтаксис
                    onClick={e => e.stopPropagation()}
                    data-name="modal-container"
                >
                    <button 
                        className="modal-close-button"
                        onClick={onClose}
                        data-name="modal-close-button"
                    >
                        <i className="fas fa-times"></i>
                    </button>

                    

                    {children}
                </div>
            </div>,
            modalRoot
        );
    } catch (error) {
        console.error(error); // Замінено reportError на console.error
        return null;
    }
}
