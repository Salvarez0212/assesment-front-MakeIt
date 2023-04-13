import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import Loader from '../../components/loader/Loader';
import { fetchProducts } from '../../redux/feature/productSlice.feature';
import './productDetail.scss';

export const ProductDetail = () => {
  const [productos, setProductos] = useState([]);

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await dispatch(fetchProducts());
        return data;
      } catch (error) {
        return error;
      }
    };
    getProducts().then((res) => setProductos(res.payload));
  }, [dispatch]);

  const productFilter = (_id) => {
    return productos.find((pro) => pro.id == _id);
  };
  const product = productFilter(id);

  return product === undefined ? (
    <Loader />
  ) : (
    <div className="main__details">
      <section className="product__container">
        <article className="product__description-container">
          <picture className="image_container">
            <img src={product.image} alt="Product" />
          </picture>
          <div className="product__title-detail">
            <p>{product.title}</p>
          </div>
          <div className="product__price">
            <h4>Price: </h4>
            <p>${product.price}</p>
          </div>
        </article>
        <div className="product__description">
          <h4>Description</h4>
          <p>{product.description}</p>
        </div>
      </section>
    </div>
  );
};
