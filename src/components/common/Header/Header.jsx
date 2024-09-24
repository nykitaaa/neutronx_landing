import { useState, useEffect } from "react";
import { PiSquaresFourThin } from "react-icons/pi";
import { IoCloseOutline } from "react-icons/io5";
import { useApp } from "hooks";
import { Container } from "components/common";
import { Logo, Nav, LanguageSelector, ThemeSwitcher } from "./HeaderParts";
import {
  StyledHeader,
  StyledMobileMenu,
  StyledMenuButton,
} from "./Header.styled";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState();

  const { screenWidth } = useApp();

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((currentState) => !currentState);
  };

  useEffect(() => {
    if (screenWidth < 1440) {
      setIsMobileMenuOpen(false);
      return;
    }

    setIsMobileMenuOpen(true);
  }, [screenWidth]);
  return (
    <Container>
      <StyledHeader>
        <Logo />

        <StyledMobileMenu
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            zIndex: isMobileMenuOpen ? 3 : -1,
          }}
          transition={{ duration: 0.25 }}
        >
          <LanguageSelector />

          <Nav />

          <ThemeSwitcher />
        </StyledMobileMenu>

        <StyledMenuButton onClick={handleMobileMenuToggle}>
          {isMobileMenuOpen ? (
            <IoCloseOutline size={"34"} color="#333333" />
          ) : (
            <PiSquaresFourThin size={"34"} color="#333333" />
          )}
        </StyledMenuButton>
      </StyledHeader>
    </Container>
  );
};

export default Header;
