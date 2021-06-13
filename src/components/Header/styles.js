import styled from "styled-components";
import Logo from "assets/images/Logo.png";

export { Logo };

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledMenu = styled.nav`
  display: none;

  @media (max-width: 1180px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #effffa;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    height: 100vh;
    text-align: left;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;

    a {
      font-size: 2rem;
      text-transform: uppercase;
      padding: 2rem 0;
      font-weight: bold;
      letter-spacing: 0.5rem;
      color: #0d0c1d;
      text-decoration: none;
      transition: color 0.3s linear;

      @media (max-width: 576px) {
        font-size: 1.5rem;
        text-align: center;
      }

      &:hover {
        color: #343078;
      }
    }
  }
`;

export const StyledBurger = styled.button`
  @media (max-width: 1180px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
      outline: none;
    }

    span {
      width: 2rem;
      height: 0.25rem;
      background: ${({ open }) => (open ? "#0D0C1D" : "#EFFFFA")};
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      :nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
        transform: ${({ open }) =>
          open ? "translateX(20px)" : "translateX(0)"};
      }

      :nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;
export const Bullets = styled.span``;

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 900;
  transition: 0.3s;
  background-color: var(--dark-blue);
  transition: 0.3s all;
`;
export const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => (props.sticky ? "60px" : "130px")};
  transition: 0.3s ease-in-out;
`;

export const Navigation = styled.nav`
  @media (max-width: 1180px) {
    display: none;
  }
`;

export const UnList = styled.ul`
  list-style: none;

  @media (max-width: 1180x) {
    vertical-align: middle;
    margin: 0 3px;
    padding: 12px;
    font-size: 15px;
    text-decoration: none;
    white-space: normal;
    color: var(--dark-blue);
    transition: 0.3s;
  }
`;

export const List = styled.li`
  @media (max-width: 1180px) {
    a {
      margin: 0 3px;
      padding: 6px 12px;
      font-size: 25px;
      line-height: 50px;
      color: var(--dark-blue);
      transition: 0.3s;
    }

    .active,
    a:hover {
      background-color: var(--red);
      color: white;
      border-radius: 5px;
    }
  }

  @media (min-width: 1181px) {
    float: left;
    a {
      margin: 0 3px;
      padding: 12px;
      font-size: 15px;
      text-decoration: none;
      white-space: normal;
      color: var(--white);
      transition: 0.3s;
    }

    .active,
    a:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 5px;
    }
  }
`;

export const Login = styled.a`
  background-color: white;
  color: var(--dark-blue);
  transition: 0.3s;
  padding: 10px 35px;
  border-radius: 5px;

  &:hover,
  &.active {
    background-color: var(--red);
    color: white;
  }

  @media (max-width: 1180px) {
    margin-right: 15px;
    padding: 6px 25px;
  }
`;

export const Image = styled.img`
  height: 40px;

  @media (max-width: 499px) {
    height: 32px;
  }
`;

export const Margin = styled.div`
  height: 130px;
  background: var(--dark-blue);
`;
