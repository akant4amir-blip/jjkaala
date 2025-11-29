function AdminLogin({ onLogin }) {
  try {
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    
    const ADMIN_PASSWORD = 'JjKala@2025!Admin#Secure$123';

    const handleSubmit = (e) => {
      e.preventDefault();
      if (password === ADMIN_PASSWORD) {
        onLogin(true);
        setError('');
      } else {
        setError('رمز عبور اشتباه است');
      }
    };

    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4" data-name="admin-login" data-file="components/AdminLogin.js">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[var(--primary-color)] mb-2">جی جی کالا</h1>
            <p className="text-[var(--text-secondary)]">پنل مدیریت</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">رمز عبور</label>
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg outline-none focus:border-[var(--primary-color)]"
                placeholder="رمز عبور را وارد کنید"
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
            <button type="submit" className="w-full bg-[var(--primary-color)] text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition">
              ورود
            </button>
          </form>
        </div>
      </div>
    );
  } catch (error) {
    console.error('AdminLogin component error:', error);
    return null;
  }
}