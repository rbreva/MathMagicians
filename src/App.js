import React from 'react';
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Header>
            <Title>Math Magicians</Title>
            <Menu>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/calculator">Calculator</NavLink>
              <NavLink to="/quote">Quote</NavLink>
            </Menu>
          </Header>
          <Main>
            <Routes>
              <Route
                path="/"
                element={
                  <Home />
                   }
              />
              <Route
                path="/calculator"
                element={
                  <Calculator />
              }
              />
              <Route
                path="/quote"
                element={
                  <Quote />
              }
              />
            </Routes>
          </Main>
        </Container>
      </BrowserRouter>
    );
  }
}

const Container = styled.div`
  padding: 6rem 3rem;
  width: 100%;
  max-width: 70rem;
`;

const Header = styled.header`
  padding: 2rem;
  color: var(--white);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 2rem;
`;
const Menu = styled.nav`
  a {
    text-decoration: none;
    color: var(--greyline);
    margin: 0 1rem;
  }

  a:hover {
    color: var(--white);
  }

  a.active {
    border-bottom: 1px solid var(--white);
  }
`;

const Main = styled.main`
  background: var(--white);
  padding: 1rem;
  border-radius: 1rem;
`;

export default App;
