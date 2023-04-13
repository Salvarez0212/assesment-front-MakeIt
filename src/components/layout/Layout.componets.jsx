import { Outlet, Link } from 'react-router-dom';
import './layout.components.scss';

export const Layout = () => {
  return (
    <>
      <header className="header__container">
        <section className="title__container">
          <h1>Assesment Frontend</h1>
        </section>

        <nav className="navbar__container">
          <Link to="/home">
            <p>Home</p>
          </Link>
          <Link to="/about">
            <p>About</p>
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
