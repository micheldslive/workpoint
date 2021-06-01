import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HeaderContainer,
  Section,
  Navigation,
  UnList,
  List,
  Login,
  Image,
  StyledMenu,
  StyledBurger,
  Bullets,
  Logo,
  Container,
  Margin,
} from "./styles";

export { Margin };

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <Bullets />
      <Bullets />
      <Bullets />
    </StyledBurger>
  );
};

export const Header = ({ sticky }) => {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    onscroll = () => {
      setScroll(window.scrollY > 250);
    };
  }, []);

  const links = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Services",
      to: "/services",
    },
    {
      name: "Testimonials",
      to: "/testimonials",
    },
    {
      name: "Contact",
      to: "/contact",
    },
  ];

  return (
    <HeaderContainer>
      <Section sticky={scroll ? { sticky } : ""}>
        <NavLink to="/">
          <Image src={Logo} className="logo" alt="Workpoint Logo" />
        </NavLink>
        <Navigation>
          <UnList>
            {links.map((go) => (
              <List key={go.name}>
                <NavLink exact to={go.to} activeClassName="active">
                  {go.name}
                </NavLink>
              </List>
            ))}
          </UnList>
        </Navigation>
        <Container>
          <Login as={NavLink} to="/login">
            Login
          </Login>
          <Burger open={open} setOpen={setOpen} />
        </Container>
      </Section>
      <StyledMenu open={open} setOpen={setOpen}>
        <UnList>
          {links.map((go) => (
            <List key={go.name}>
              <NavLink exact to={go.to} activeClassName="active" open={open} onClick={() => setOpen(!open)} >
                {go.name}
              </NavLink>
            </List>
          ))}
        </UnList>
      </StyledMenu>
    </HeaderContainer>
  );
};
