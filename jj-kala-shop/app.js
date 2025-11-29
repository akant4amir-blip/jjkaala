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

function App() {
  try {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      loadProducts();
    }, []);

    const loadProducts = async () => {
      try {
        const result = await trickleListObjects('product', 50, true);
        setProducts(result.items);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="min-h-screen bg-gray-50" data-name="app" data-file="app.js">
        <Header />
        <Hero />
        <Categories />
        <div className="container py-8">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">محصولات</h2>
          {loading ? (
            <div className="text-center py-12">در حال بارگذاری...</div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map(product => (
                <ProductCard key={product.objectId} product={product.objectData} />
              ))}
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);