import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MainError = styled.div`
  background-color: #d9e9f3;
  width: 100%;
  position: relative;
  padding-bottom: 20px;
`;

export const Error = styled.div`
  color: var(--dark-blue);
  font-size: 11rem;
  position: relative;
  text-align: center;
  font-weight: 700;
  top: 8%;
`;

export const ErrorMsg = styled.div`
  text-align: center;
  font-size: 1.6rem;
  margin: auto;
  width: 50%;
  color: var(--dark-blue);
  text-transform: uppercase;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: var(--red);

  &:hover {
    text-decoration: underline;
  }
`;