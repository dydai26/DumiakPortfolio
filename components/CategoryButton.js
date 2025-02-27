// CategoryButton.js
function CategoryButton({ label, icon }) {
    return (
        <div className="category-button flex items-center gap-2 px-7 py-3 border rounded-full shadow-lg">
    <i className={`fa ${icon}`}></i> {/* Додаємо префікс fa до іконки */}
    <span>{label}</span>
</div>

    );
}

export default CategoryButton;
