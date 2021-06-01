import styled from "styled-components";
import Case01 from "../../../assets/images/cases/Case01.jpg";
import Case02 from "../../../assets/images/cases/Case02.jpg";
import Case03 from "../../../assets/images/cases/Case03.jpg";

export const Cases = [Case01, Case02, Case03];

export const CasesStudies = styled.div`
  display: block;
  background-color: rgba(243, 248, 255, 0.9);
  position: relative;
  padding: 40px 0;
`;

export const Section = styled.section``;

export const Container = styled.div`
  text-align: center;
  padding: 10px;
`;

export const Title = styled.h1`
  margin: 0 0;
  font-size: 32px;
`;

export const Description = styled.p`
  margin: 20px auto;
  font-size: 13px;
  max-width: 550px;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 880px) {
    display: block;
    padding: 20px;
  }
`;

export const Column = styled.div`
  width: calc(33.33333333% - 1em);
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

export const GeneralStudies = styled.div`
  background: var(--gray1);
  margin: 0 auto;
  margin-bottom: 0px;
  margin-bottom: 30px;
  background: white;
  box-shadow: 2px 3px 3px var(--gray2);
  border: 1px solid var(--gray2);
  border-radius: 10px;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const Content = styled.div`
  margin: 20px;
`;

export const CardTitle = styled.h3`
  font-weight: 600;
  margin: 10px 0;
`;

export const CardDescription = styled.p`
  margin: 10px 0;
  font-size: 14px;
`;

export const MoreLink = styled.a`
  margin: 10px 0;
`;

export const Button = styled.button`
  font-size: 18px;
  padding: 20px 60px;
  border-radius: 50px;
  color: var(--dark-blue);
  background: transparent;
  border: solid 1px var(--dark-blue);
  cursor: pointer;
  font-family: "Mulish", sans-serif;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    color: white;
    border-color: var(--red);
    background-color: var(--red);
  }
`;
