function Header() {
  try {
    return (
      <header className="bg-white shadow-sm sticky top-0 z-50" data-name="header" data-file="components/Header.js">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-[var(--primary-color)]">جی جی کالا</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2 flex-1 max-w-md">
                <div className="icon-search text-lg text-gray-400"></div>
                <input type="text" placeholder="جستجو..." className="bg-transparent outline-none w-full" />
              </div>
              <a href="admin.html" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
                <div className="icon-lock text-xl"></div>
                <span className="hidden md:inline">پنل مدیریت</span>
              </a>
              <button className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--primary-color)]">
                <div className="icon-shopping-cart text-xl"></div>
                <span className="hidden md:inline">سبد خرید</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}