import { Outlet } from 'react-router-dom';
import { Header, Nav, StyledNavLink } from './SharedLayout.styled';
import { Container } from 'components/App/App.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </Nav>
        </Container>
      </Header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
