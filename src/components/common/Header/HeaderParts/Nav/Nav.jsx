import { useTranslation } from 'react-i18next';
import { StyledNav, StyledList, StyledItem, StyledLink } from './Nav.styled';

const Nav = () => {
  const { t } = useTranslation();

  return (
    <StyledNav>
      <StyledList>
        <StyledItem>
          <StyledLink to="/">{t('header.nav.home')}</StyledLink>
        </StyledItem>

        <StyledItem>
          <StyledLink to="/rules">{t('header.nav.rules')}</StyledLink>
        </StyledItem>

        <StyledItem>
          <StyledLink to="/contacts">{t('header.nav.contacts')}</StyledLink>
        </StyledItem>
      </StyledList>
    </StyledNav>
  );
};

export default Nav;
