import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { RiMovie2Line } from 'react-icons/ri';
import Loader from 'components/Loader';
import { Header, Nav, StyledNavLink } from './SharedLayout.styled';
import { Container } from 'components/App/App.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <StyledNavLink to="/">
              Home
              <IoHomeOutline />
            </StyledNavLink>
            <StyledNavLink to="/movies">
              Movies
              <RiMovie2Line />
            </StyledNavLink>
          </Nav>
        </Container>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
