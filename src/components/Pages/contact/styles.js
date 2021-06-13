import styled from "styled-components";
import Img from "assets/images/contact-image.svg";
export const ContactContainer = styled.div`
  display: block;
  background-color: white;
  position: relative;
  height: 800px;
  bottom: -1px;

  &:after {
    background: var(--dark-blue);
    height: 100%;
    z-index: 2;
    -webkit-clip-path: polygon(
      0% 92%,
      50% 92%,
      100% 30%,
      100% 100%,
      65% 100%,
      31% 100%,
      0 100%,
      0 10%
    );
    clip-path: polygon(
      0% 92%,
      50% 92%,
      100% 30%,
      100% 100%,
      65% 100%,
      31% 100%,
      0 100%,
      0 10%
    );
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }

  @media (max-width: 1180px) {
    &:after {
      background: transparent;
    }
  }
  @media (min-width: 880px) and (max-width: 1180px) {
    height: 1200px;
  }
  @media (min-width: 680px) and (max-width: 879px) {
    height: 1100px;
  }
  @media (max-width: 679px) {
    height: 1000px;
  }
`;

export const Section = styled.section``;

export const ImageContainer = styled.div`
  display: block;
  width: 40%;
  position: absolute;
  bottom: 40px;
  z-index: 3;

  @media (max-width: 1180px) {
    bottom: -35px;
    left: 0;
    right: 0;
    width: 80%;
    margin: auto;
  }
`;

export const Image = styled.img``;

export { Img };

export const ContactForm = styled.div`
  background: white;
  float: right;
  position: relative;
  width: 600px;
  height: 660px;
  box-shadow: 2px 8px 11px rgb(0 0 0 / 20%);
  z-index: 5;
  bottom: -110px;

  @media (max-width: 1180px) {
    height: 100%;
    width: 100%;
  }
`;

export const Form = styled.form`
  padding: 1em 4em;
`;

export const Title = styled.h2`
  padding: 30px 0;
  text-align: center;
`;

export const Group = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

export const TextArea = styled.textarea`
  border-image: initial;
  border-radius: 0px;
  border-bottom: 1px solid;
  width: 100%;
  max-height: 100px;
  height: 100px !important;
  max-width: 800px;
  padding-top: 15px;
  display: block;
  font-size: 1em;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  box-shadow: none;
  background: none;
  border-style: none none solid;
  padding: 10px 0;

  &:focus {
    outline: none;
  }
`;

export const Input = styled.input`
  border-image: initial;
  border-radius: 0px;
  border-bottom: 1px solid;
  width: 100%;
  display: block;
  font-size: 1em;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  box-shadow: none;
  background: none;
  border-style: none none solid;
  padding: 10px 0;

  &:focus {
    outline: none;
  }
`;

export const Label = styled.label`
  position: absolute;
  pointer-events: none;
  top: -5px;
  transition: 0.2s ease all;

  ${Input}:focus ~ &, ${TextArea}:focus ~ & {
    top: -10px;
    left: 0;
    font-size: 1em;
    opacity: 1;
    color: var(--gray3);
  }
`;

export const Paragraph = styled.p`
  font-size: 10px;
  padding-left: 35px;
`;

export const Checkbox = styled.input`
  cursor: pointer;
  position: absolute;
  top: 3px;
  left: 0;
  height: 25px;
  width: 25px;
  border-radius: 50%;
`;

export const Button = styled.button`
  font-size: 18px;
  padding: 20px 40px;
  border-radius: 50px;
  color: white;
  background-color: var(--dark-blue);
  cursor: pointer;
  font-family: "Mulish", sans-serif;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    color: white;
    background-color: var(--red);
  }
`;