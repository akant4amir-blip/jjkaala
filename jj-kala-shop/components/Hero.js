function Hero() {
  try {
    return (
      <div className="bg-gradient-to-r from-[var(--primary-color)] to-pink-500 text-white" data-name="hero" data-file="components/Hero.js">
        <div className="container py-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">خرید آسان و سریع</h2>
            <p className="text-lg mb-6 opacity-90">بهترین محصولات را با قیمت مناسب از جی جی کالا بخرید</p>
            <button className="bg-white text-[var(--primary-color)] px-8 py-3 rounded-lg font-bold hover:shadow-lg transition">مشاهده محصولات</button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}