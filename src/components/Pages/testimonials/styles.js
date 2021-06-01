import styled from "styled-components";
import { NavigateNext, NavigateBefore } from "@styled-icons/material";
import NonPassiveTouchTarget from "../../../assets/modules/TouchTarget";
import Client01 from "../../../assets/images/clients/client01.jpg";
import Client02 from "../../../assets/images/clients/client02.jpg";
import Client03 from "../../../assets/images/clients/client03.jpg";

export const Clients = [
  Client01,
  Client02,
  Client03
]

export const ContainerCarousel = styled(NonPassiveTouchTarget)`
  height: 525px;
  max-width: 100%;
  margin: 0 auto;
  overflow: hidden;
  touch-action: pan-y;

  @media (max-width: 880px){
    height: 900px;
  }
`;

export const CarouselTrack = styled(NonPassiveTouchTarget)`
  position: relative;
  display: flex;
  height: 100%;
`;

export const CarouselCard = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  flex: 0 0 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: black;
`;

export const Prev = styled(NavigateBefore)`
  cursor: pointer;
  position: absolute;
  left: 52%;
  z-index: 8;
  bottom: 10%;
  color: var(--dark-blue);
  transition: 0.2s linear;

  &:hover {
    color: var(--red);
  }

  @media (max-width: 880px){
    left: 20%;
    top: 40%;
    color: white;
  }
`;

export const Next = styled(NavigateNext)`
  cursor: pointer;
  position: absolute;
  left: 56%;
  z-index: 8;
  bottom: 10%;
  color: var(--dark-blue);
  transition: 0.2s linear;

  &:hover {
    color: var(--red);
  }

  @media (max-width: 880px){
    right: 20%;
    left: auto;
    top: 40%;
    color: white;
  }
`;

export const CarouselInner = styled.div`
  display: contents;
  width: 100%;
  height: 100%;
  overflow: hidden;
  @media (max-width: 880px){
    display: block;
  }
`;

export const Container = styled.div`
  position: relative;
`;

export const Column = styled.div`
  width: calc(50% - 2em);
  padding: 5em 2em;
  text-align: ${(props) => props.center.main};
  background: ${(props) => props.theme.main};

  @media (max-width: 880px) {
    width: initial;
    padding: 5em 2em;
    text-align: center;
  }
`;

Column.defaultProps = {
  theme: {
    main: "white",
  },
  center: {
    main: "none",
  },
};

export const theme = {
  main: "var(--dark-blue)",
};

export const center = {
  main: "center",
};

export const Content = styled.div`
  margin: 20px;
`;

export const Img = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 100%;
  border: 30px solid var(--red);

  @media (max-width:880px){
    max-width: 220px;
  }
`;

export const Title = styled.h1`
  max-width: 400px;

  @media (max-width:880px){
    font-size: 30px;
    margin: 20px auto;
  }
`;

export const Description = styled.p`
  margin: 20px 0;
  font-size: 14px;
  max-width: 550px;

  @media (max-width:880px){
    margin: 20px auto;
  }
  
`;

export const Name = styled.h3`
  font-weight: 600;
  margin: 10px 0;

  @media (max-width:880px){
    margin: 20px auto;
  }
`;
