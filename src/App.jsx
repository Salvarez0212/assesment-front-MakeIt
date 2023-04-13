import { Routes, Route, Navigate } from 'react-router-dom';
import { Products } from './pages/products/Products.pages';
import { About } from './pages/about/About.pages';
import { Layout } from './components/layout/Layout.componets';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="/home/*" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
