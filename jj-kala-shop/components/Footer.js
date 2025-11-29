function Footer() {
  try {
    return (
      <footer className="bg-white border-t mt-12" data-name="footer" data-file="components/Footer.js">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            <div>
              <h3 className="font-bold text-lg mb-4">درباره جی جی کالا</h3>
              <p className="text-[var(--text-secondary)] text-sm">فروشگاه اینترنتی جی جی کالا با ارائه بهترین محصولات و خدمات در خدمت شماست.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">دسترسی سریع</h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li><a href="#" className="hover:text-[var(--primary-color)]">محصولات</a></li>
                <li><a href="#" className="hover:text-[var(--primary-color)]">پیگیری سفارش</a></li>
                <li><a href="#" className="hover:text-[var(--primary-color)]">تماس با ما</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">تماس با ما</h3>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <div className="flex items-center gap-2">
                  <div className="icon-phone text-base"></div>
                  <span>09197074940</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="icon-map-pin text-base"></div>
                  <span>مازندران، لاویج، رییس کلا</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t pt-6 text-center text-sm text-[var(--text-secondary)]">
            <p>© 2025 جی جی کالا. تمامی حقوق محفوظ است.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}