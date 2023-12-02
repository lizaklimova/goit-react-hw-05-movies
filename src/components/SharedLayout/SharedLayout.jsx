import { NavLink, Outlet } from 'react-router-dom';
// import { Header, Nav } from './SharedLayout.styled';
// import { Container } from 'components/App/App.styled';

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
