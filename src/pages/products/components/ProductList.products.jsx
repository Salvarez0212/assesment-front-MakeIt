import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ProductCard } from './ProductCard.products';
import { fetchProducts } from '../../../redux/feature/productSlice.feature';
import Loader from '../../../components/loader/Loader';

export const ProductList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [productos, setProductos] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    const products = async () => {
      try {
        const data = await dispatch(fetchProducts());
        return data;
      } catch (err) {
        return setError(err);
      }
    };
    products()
      .then((res) => setProductos(res.payload))
      .finally(() => setIsLoading(false));
  }, [dispatch]);

  if (error) return <p>{error}</p>;

  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className="main__products">
      <h2>Products</h2>
      <section className="products__list">
        {productos.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </section>
    </section>
  );
};
