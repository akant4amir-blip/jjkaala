function AdminPanel({ onLogout }) {
  try {
    const [products, setProducts] = React.useState([]);
    const [showForm, setShowForm] = React.useState(false);
    const [editingProduct, setEditingProduct] = React.useState(null);

    React.useEffect(() => {
      loadProducts();
    }, []);

    const loadProducts = async () => {
      try {
        const result = await trickleListObjects('product', 100, true);
        setProducts(result.items);
      } catch (error) {
        console.error('Error loading products:', error);
      }
    };

    const handleDelete = async (id) => {
      if (confirm('آیا از حذف این محصول اطمینان دارید؟')) {
        try {
          await trickleDeleteObject('product', id);
          loadProducts();
        } catch (error) {
          console.error('Error deleting product:', error);
        }
      }
    };

    return (
      <div className="min-h-screen bg-gray-50" data-name="admin-panel" data-file="components/AdminPanel.js">
        <div className="bg-white shadow-sm">
          <div className="container py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-[var(--primary-color)]">پنل مدیریت جی جی کالا</h1>
            <button onClick={onLogout} className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">خروج</button>
          </div>
        </div>
        <div className="container py-8">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-xl font-bold">مدیریت محصولات</h2>
            <button onClick={() => { setShowForm(true); setEditingProduct(null); }} className="px-6 py-2 bg-[var(--primary-color)] text-white rounded-lg hover:bg-opacity-90">افزودن محصول جدید</button>
          </div>
          {showForm && <ProductForm product={editingProduct} onSave={() => { setShowForm(false); loadProducts(); }} onCancel={() => setShowForm(false)} />}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-right text-sm font-bold">نام محصول</th>
                  <th className="px-6 py-3 text-right text-sm font-bold">قیمت</th>
                  <th className="px-6 py-3 text-right text-sm font-bold">دسته‌بندی</th>
                  <th className="px-6 py-3 text-right text-sm font-bold">عملیات</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.objectId} className="border-t">
                    <td className="px-6 py-4">{product.objectData.name}</td>
                    <td className="px-6 py-4">{product.objectData.price?.toLocaleString('fa-IR')} تومان</td>
                    <td className="px-6 py-4">{product.objectData.category}</td>
                    <td className="px-6 py-4">
                      <button onClick={() => { setEditingProduct(product); setShowForm(true); }} className="text-blue-600 ml-4">ویرایش</button>
                      <button onClick={() => handleDelete(product.objectId)} className="text-red-600">حذف</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('AdminPanel component error:', error);
    return null;
  }
}