function CategoryList() {
    try {
        const categories = [
            { label: "Branding", icon: "fa-pen" },  // Приклад для Branding
            { label: "Print production", icon: "fa-print" },  // Іконка для принтера
            { label: "Packaging", icon: "fa-box" },  // Іконка для упаковки
            { label: "Illustration", icon: "fa-paint-brush" },  // Іконка для ілюстрації
            { label: "Social Media", icon: "fa-comments" },  // Іконка для соцмереж
            { label: "UA|IX", icon: "fa fa-laptop-code" },  // Іконка для UA|IX
            { label: "Layout", icon: "fa-th-large" },  // Іконка для макету
        ];

        return (
            <div className="flex flex-wrap gap-2 mt-8" data-name="category-list">
                {categories.map((category, index) => (
                    <CategoryButton 
                        key={index} 
                        label={category.label} 
                        icon={category.icon}
                    />
                ))}
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}


