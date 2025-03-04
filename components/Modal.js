function Modal({ isOpen, onClose, children }) {
    try {
        const [isActive, setIsActive] = React.useState(false);
        const modalRoot = document.getElementById('modal-root');

        React.useEffect(() => {
            if (isOpen) {
                // Вимикаємо прокручування сторінки
                document.body.style.overflow = 'hidden';
                setIsActive(true);
            } else {
                // Після закриття модального вікна дозволяємо прокручування
                document.body.style.overflow = ''; // Встановлюється значення за замовчуванням для прокручування
                setIsActive(false);
            }

            // Повертаємо прокручування при перевстановленні стану компоненту
            return () => {
                document.body.style.overflow = '';
            };
        }, [isOpen]);

        if (!isOpen) return null; // Якщо модальне вікно не відкрите, не рендеримо його

        return ReactDOM.createPortal(
            <div 
                className={`modal-overlay ${isActive ? 'active' : ''}`} // Виправлено: шаблонний рядок
                onClick={onClose} // Клік на фон закриває модальне вікно
                data-name="modal-overlay"
            >
                <div 
                    className={`modal-container ${isActive ? 'active' : ''}`} // Виправлено: шаблонний рядок
                    onClick={e => e.stopPropagation()} // Зупиняємо події на самому вікні
                    data-name="modal-container"
                >
                    <button 
                        className="modal-close-button"
                        onClick={onClose}
                        data-name="modal-close-button"
                    >
                        <i className="fas fa-times"></i> {/* Іконка для закриття */}
                    </button>
                    {children} {/* Вміст модального вікна */}
                </div>
            </div>,
            modalRoot // Рендеримо в порталі
        );
    } catch (error) {
        console.error(error); // Замінив reportError на console.error
        return null; // Якщо виникла помилка, не рендеримо нічого
    }
}
