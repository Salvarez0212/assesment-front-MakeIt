import { Routes, Route } from 'react-router';
import { ProductList } from './components/ProductList.products';
import { ProductDetail } from '../productDetail/ProductDetail.pages';
import './product.pages.scss';

export const Products = () => {
  return (
    <main className="main__container">
      <Routes>
        <Route index element={<ProductList />} />
        <Route path="detail/:id" element={<ProductDetail />} />
      </Routes>
    </main>
  );
};
