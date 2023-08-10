import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: white;
  border-bottom: 1px solid #ccc;
  padding: 1rem;
  position: fixed;
  width: 100%;
  z-index: 50;

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  width: 80% @media (min-width: 768px) {
    gap: 2rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LogoImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
  height: 3rem;
  width: 3rem;
`;
export const LogoText = styled.span`
  font-size: 1.5rem;
  color: #3b82f6;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: row;
  @media (min-width: 768px) {
    gap: 2rem;
  }
`;
export const Link = styled.a`
  font-size: 1rem;
  color: #3b82f6;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: gray;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;
