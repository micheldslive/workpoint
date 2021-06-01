import styled from "styled-components";
import Image from "../../../assets/images/home-image.svg";

export const HomeContainer = styled.div`
  color: white;
  min-height: 890px;
  position: relative;
  background-size: cover;
  background: url(${Image}) no-repeat bottom;
  bottom: -1px;

 @media (max-width:880px){
    min-height: 590px;
 }
`;

export const Section = styled.section`
  position: relative;
`;

export const Content = styled.div`
  padding: 50px 20px;
  max-width: 500px;
`;

export const Title = styled.h2``;

export const Subtitle = styled.p`
  color: #a4f9ff;
  padding: 40px 0;
  line-height: 40px;
`;

export const Link = styled.button`
  font-size: 18px;
  padding: 15px 35px;
  border-radius: 50px;
  color: var(--dark-blue);
  background-color: white;
  cursor: pointer;
  font-family: "Mulish", sans-serif;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    color: white;
    background-color: var(--red);
  }
`;

export const Background = styled.div`
  background: var(--dark-blue);
  margin-bottom: -10px;
`;
