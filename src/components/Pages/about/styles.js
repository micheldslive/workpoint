import styled from "styled-components";
import AboutImage from "assets/images/about-image.png";

export const AboutUs = styled.div`
  display: block;
  position: relative;
`;

export const Image = styled.div`
  background: url(${AboutImage}) no-repeat;
  background-size: 900px;
  background-position-x: right;

  @media (max-width: 1180px) {
    background: none;
  }
`;

export const Background = styled.div`
  padding: 0 0 60px;
  background: ${(props) => props.theme.main};
`;

Background.defaultProps = {
  theme: {
    main: "transparent",
  },
};

export const theme = {
  main: "var(--dark-blue)",
};

export const Section = styled.section`
  padding-top: 50px !important;
`;

export const Content = styled.div`
  max-width: 500px;

  @media (max-width: 1180px) {
    max-width: 700px;
    margin: auto;
    text-align: center;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 880px) {
    display: block;
  }
`;

export const Column = styled.div`
  text-align: center;
  width: calc(50% - 1em);
  margin: 0.5em 0.5em;

  @media (min-width: 500px) and (max-width: 880px) {
    width: calc(70% - 1em);
    margin: 0.5em auto;
  }
  @media (max-width: 499px) {
    width: calc(100% - 1em);
    margin: 0.5em 0.5em;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.cor.main};
  font-size: 40px;
`;

Title.defaultProps = {
  cor: {
    main: "white",
  },
};

export const cor = {
  main: "var(--dark-blue)",
};

export const Paragraph = styled.p`
  font-size: 16px;
  letter-spacing: 0.02em;
  text-align: left;
  line-height: 40px;
`;

export const Description = styled.p`
  margin: 20px auto;
  max-width: 550px;
  color: white !important;
  font-size: 20px !important;
  line-height: 1.85em !important;
  font-weight: 200;
`;
