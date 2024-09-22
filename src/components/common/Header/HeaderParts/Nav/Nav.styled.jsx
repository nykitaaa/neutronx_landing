import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { mq } from 'utils';

export const StyledNav = styled.nav`
  @media screen and (max-width: 1439px) {
    margin: 20px 0;
  }

  ${mq.desktop} {
    display: flex;
  }
`;

export const StyledList = styled.ul`
  ${mq.desktop} {
    display: flex;
    padding: 21px 7px 22.5px 7px;

    background: var(--background-secondary-color);
    border-radius: 99px;
  }
`;

export const StyledItem = styled.li`
  text-align: center;
`;

export const StyledLink = styled(NavLink)`
  color: var(--text-primary-color);
  font-size: 16px;
  font-weight: 600;
  display: block;

  padding: 15px 0;
  border-radius: 18px;

  &.active {
    color: var(--text-primary-color);
    background: var(--background-secondary-color);
  }

  ${mq.desktop} {
    display: inline;
    padding: 16px 20px 17.5px;

    font-size: 14px;
    font-weight: 600;

    border-radius: 99px;

    background: transparent;

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      background 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &.active {
      color: #0c0716;
      background: #ffffff;
    }
  }
`;
