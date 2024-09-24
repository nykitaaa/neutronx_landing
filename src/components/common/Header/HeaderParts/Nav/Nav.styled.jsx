import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { mq } from "utils";

export const StyledNav = styled.nav`
  margin: 20px 0;

  ${mq.desktop} {
    display: flex;
    margin: 0;
  }
`;

export const StyledList = styled.ul`
  ${mq.desktop} {
    display: flex;
    padding: 22px 6px;

    background: var(--background-secondary-color);
    border-radius: 99px;
  }
`;

export const StyledItem = styled.li`
  text-align: center;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  padding: 16px 0;

  font-size: 16px;
  font-weight: 600;

  color: var(--text-primary-color);
  border-radius: 18px;

  &.active {
    color: var(--text-primary-color);
    background: var(--background-secondary-color);
  }

  ${mq.desktop} {
    display: inline;
    padding: 17px 20px;

    font-size: 14px;
    font-weight: 600;

    background: transparent;
    border-radius: 99px;

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      background 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &.active {
      color: #0c0716;
      background: #ffffff;
    }
  }
`;
