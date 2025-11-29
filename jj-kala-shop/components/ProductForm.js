function ProductForm({ product, onSave, onCancel }) {
  try {
    const [formData, setFormData] = React.useState({
      name: product?.objectData?.name || '',
      price: product?.objectData?.price || '',
      category: product?.objectData?.category || '',
      description: product?.objectData?.description || '',
      image: product?.objectData?.image || ''
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        if (product) {
          await trickleUpdateObject('product', product.objectId, formData);
        } else {
          await trickleCreateObject('product', formData);
        }
        onSave();
      } catch (error) {
        console.error('Error saving product:', error);
      }
    };

    return (
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6" data-name="product-form" data-file="components/ProductForm.js">
        <h3 className="text-lg font-bold mb-4">{product ? 'ویرایش محصول' : 'افزودن محصول جدید'}</h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold mb-2">نام محصول</label>
              <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2 border rounded-lg outline-none focus:border-[var(--primary-color)]" required />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">قیمت (تومان)</label>
              <input type="number" value={formData.price} onChange={(e) => setFormData({...formData, price: Number(e.target.value)})} className="w-full px-4 py-2 border rounded-lg outline-none focus:border-[var(--primary-color)]" required />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">دسته‌بندی</label>
              <input type="text" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} className="w-full px-4 py-2 border rounded-lg outline-none focus:border-[var(--primary-color)]" required />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">آدرس تصویر</label>
              <input type="text" value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} className="w-full px-4 py-2 border rounded-lg outline-none focus:border-[var(--primary-color)]" placeholder="https://..." />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-bold mb-2">توضیحات</label>
            <textarea value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full px-4 py-2 border rounded-lg outline-none focus:border-[var(--primary-color)]" rows="3"></textarea>
          </div>
          <div className="flex gap-4 mt-6">
            <button type="submit" className="px-6 py-2 bg-[var(--primary-color)] text-white rounded-lg hover:bg-opacity-90">ذخیره</button>
            <button type="button" onClick={onCancel} className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">انصراف</button>
          </div>
        </form>
      </div>
    );
  } catch (error) {
    console.error('ProductForm component error:', error);
    return null;
  }
}