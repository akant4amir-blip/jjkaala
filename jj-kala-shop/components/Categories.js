function Categories() {
  try {
    const categories = [
      { name: 'لوازم الکترونیکی', icon: 'smartphone' },
      { name: 'پوشاک', icon: 'shirt' },
      { name: 'کتاب', icon: 'book' },
      { name: 'لوازم خانگی', icon: 'home' },
      { name: 'ورزشی', icon: 'dumbbell' },
      { name: 'زیبایی', icon: 'sparkles' }
    ];

    return (
      <div className="bg-white py-6 border-b" data-name="categories" data-file="components/Categories.js">
        <div className="container">
          <div className="flex gap-6 overflow-x-auto">
            {categories.map((cat, index) => (
              <button key={index} className="flex flex-col items-center gap-2 min-w-fit hover:text-[var(--primary-color)] transition">
                <div className="w-14 h-14 rounded-full bg-[var(--secondary-color)] flex items-center justify-center">
                  <div className={`icon-${cat.icon} text-2xl text-[var(--primary-color)]`}></div>
                </div>
                <span className="text-sm whitespace-nowrap">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Categories component error:', error);
    return null;
  }
}