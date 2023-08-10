import {
  NavbarContainer,
  FlexContainer,
  LogoContainer,
  LogoImage,
  LinksContainer,
  LogoText,
  Link
} from "../styles/Navbar";

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <FlexContainer>
        <LogoContainer>
          <LogoImage src="/favicon.ico" alt="" />
          <LogoText>Supply Chain</LogoText>
        </LogoContainer>
        <LinksContainer>
          <Link
            href="https://www.linkedin.com/in/hillary-kipngetich-54162b157/"
            target="_blank"
          >
            Linkedin
          </Link>
          <Link href="https://github.com/ronkips" target="_blank">
            GitHub
          </Link>
        </LinksContainer>
      </FlexContainer>
    </NavbarContainer>
  );
};

export default Navbar;
