function ProductCard({ product }) {
  try {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition" data-name="product-card" data-file="components/ProductCard.js">
        <div className="aspect-square bg-gray-100 flex items-center justify-center">
          {product.image ? (
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          ) : (
            <div className="icon-package text-4xl text-gray-300"></div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-bold text-[var(--text-primary)] mb-2 line-clamp-2">{product.name}</h3>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-[var(--primary-color)]">{product.price?.toLocaleString('fa-IR')} تومان</span>
            <button className="w-8 h-8 rounded-lg bg-[var(--primary-color)] flex items-center justify-center hover:bg-opacity-90 transition">
              <div className="icon-plus text-base text-white"></div>
            </button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ProductCard component error:', error);
    return null;
  }
}