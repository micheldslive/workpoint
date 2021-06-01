import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const col = {};

export const FooterContainer = styled.footer`
  position: absolute;
  right: 0;
  left: 0;
  padding: 3em 0;
  background-color: var(--dark-blue);
  color: white;
`;

export const Section = styled.section``;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Column = styled.div`
  width: calc(16.66666667% - 1em);
  margin: 0.5em 0.5em;

  @media (max-width: 599px){
    width: 100%;
    margin: 1em 1em;
  }
  ${(props) => props.col &&
  `
  width: calc(33.33333333% - 1em);

  @media (max-width: 599px){
    width: 100%;
    margin: 1em 1em;
  }

  }
  `
  }
`;

export const Title = styled.h4`
  position: relative;
  margin-bottom: 20px;
  padding-bottom: 20px;

  &:after {
    position: absolute;
    content: "";
    height: 4px;
    background-color: #21b3ff;
    width: 48px;
    bottom: 0;
    left: 0;
  }
`;

export const Link = styled(NavLink)`
  font-size: 14px;
  font-weight: 300;
  color: white;
  margin-bottom: 20px;
  display: block;
  transition: 0.1s;

  &:hover {
    color: #21b3ff;
    transition: 0.3;
  }
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 300;
  padding-bottom: 20px;
`;
