class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">مشکلی پیش آمده</h1>
            <button onClick={() => window.location.reload()} className="px-6 py-2 bg-[var(--primary-color)] text-white rounded-lg">بارگذاری مجدد</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function AdminApp() {
  try {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    React.useEffect(() => {
      const auth = sessionStorage.getItem('jjkala_admin_auth');
      if (auth === 'authenticated') {
        setIsAuthenticated(true);
      }
    }, []);

    const handleLogin = (success) => {
      setIsAuthenticated(success);
      if (success) {
        sessionStorage.setItem('jjkala_admin_auth', 'authenticated');
      }
    };

    const handleLogout = () => {
      setIsAuthenticated(false);
      sessionStorage.removeItem('jjkala_admin_auth');
    };

    return (
      <div data-name="admin-app" data-file="admin-app.js">
        {isAuthenticated ? (
          <AdminPanel onLogout={handleLogout} />
        ) : (
          <AdminLogin onLogin={handleLogin} />
        )}
      </div>
    );
  } catch (error) {
    console.error('AdminApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('admin-root'));
root.render(
  <ErrorBoundary>
    <AdminApp />
  </ErrorBoundary>
);