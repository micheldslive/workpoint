import styled from "styled-components";

export const sign = {};
export const center = {};
export const flex = {};
export const SignIn = {};
export const SignUp = {};
export const RadioLabel = {};


export const LoginForm = styled.div`
  background-color: var(--dark-blue);
  color: #aaa;
`;

export const LoginWrapper = styled.div`
  width: 100%;
  margin: auto;
  max-width: 525px;
  min-height: 600px;
  position: relative;
  padding-top: 80px;
`;

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 90px 0;
`;

export const Form = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  transition: all 0.4s linear;
  transform: rotateY(0deg);

  @media (max-width: 880px) {
    padding: 0 30px;
  }

  ${(props) => props.SignIn &&
    `
    transform:rotateX(270deg);
    backface-visibility:hidden;
    `
  }

  ${(props) => props.SignUp &&
    `
    transform:rotateX(270deg);
    backface-visibility:hidden;
    `
  }
`;

export const Group = styled.div`
  margin-bottom: 15px;

  ${(props) => props.center &&
    `
    text-align: center;
    `
  }

  ${(props) => props.flex &&
    `
    display: flex;
    align-items: center;
    `
  }
`;

export const Label = styled.label`
  color: #aaa;
  font-size: 12px;
  width: 100%;
  display: block;
  text-transform: uppercase;
`;

export const Input = styled.input`
  border: none;
  padding: 15px 20px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
  max-width: -webkit-fill-available;
  width: 100%;
  color: #fff;
  display: block;

  ${(props) => props.sign &&
    `
    background: var(--blue);
    display: block;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.2s linear;
    
    &:hover {
      background: var(--red);
      color: white;
    }
    `
  }
`;

export const HR = styled.div`
  height: 2px;
  margin: 60px 0 50px 0;
  background: rgba(255, 255, 255, 0.2);
`;

export const LabelCheck = styled.label`
  border-radius: 2px;
  position: relative;
  display: inline-block;
  cursor: pointer;
  padding-left: 10px;

  ${(props) => props.RadioLabel &&
    `
    padding-left: 0;
    padding-right: 20px;
    font-size: 20px;
    `
  }
`;

export const Checkbox = styled.input`
  -webkit-appearance: checkbox;
  cursor: pointer;
  left: 0;
  height: 20px;
  width: 20px;

  &:checked + ${LabelCheck} {
    color: #fff;
    text-decoration: underline;
  }
`;

export const Radio = styled.input`
  display: none;

  &:checked + ${LabelCheck} {
    color: #fff;
    text-decoration: underline;
  }
`;

export const Link = styled.a`
  transition: 0.2s linear;
  color: #aaa;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;
