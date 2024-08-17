import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <LogoWrapper>
        <span>AAR</span>
        <span>DEV</span>
      </LogoWrapper>
      <nav>
        <List>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </List>
      </nav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 75rem;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const LogoWrapper = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  line-height: 1.875rem;
  font-size: 2rem;
  font-weight: bold;

  span:first-child {
    color: #f96d00;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;

  li {
    margin-right: 0.625rem;
    font-size: 1.125rem;
  }

  a {
    text-decoration: none;
  }
`;

export default Header;
