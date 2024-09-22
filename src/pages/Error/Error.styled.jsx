import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledPageWrp = styled.div`
  display: flex;
`;

export const StyledPageWrpHalf = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100vh;

  outline: 1px solid tomato;
`;

export const StyledValue = styled.p`
  font-size: 202px;
  font-weight: 400;

  color: #000;
`;

export const StyledTextPrimary = styled.p`
  margin-bottom: ${({ mg_b }) => `${mg_b}px`};

  font-size: 46px;
  font-weight: 400;
  line-height: normal;

  color: #000;
`;

export const StyledTextSecondary = styled.p`
  width: 380px;
  margin-bottom: ${({ mg_b }) => `${mg_b}px`};

  font-size: 21px;
  font-weight: 400;
  text-align: center;

  color: #b0b0b0;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 16px 28px;

  color: #ffffff;
  background: #000;
  border-radius: 8px;
`;
