import React, { Component } from "react";
import { Helmet } from "react-helmet";
import {
  Techs,
  Section,
  UnList,
  List,
  Link,
  Content,
  Title,
  Subtitle,
  IconContainer,
  IconWrapper,
  Design,
  Development,
  Marketing,
} from "./styles";

class RenderServices extends Component {
  design = () => {
    this.setState({
      content: (
        <IconContainer>
          {Design.map((sel) => {
            return <IconWrapper key={sel.id}>{sel.comp}</IconWrapper>;
          })}
        </IconContainer>
      ),
    });
  };

  development = () => {
    this.setState({
      content: (
        <IconContainer>
          {Development.map((sel) => {
            return <IconWrapper key={sel.id}>{sel.comp}</IconWrapper>;
          })}
        </IconContainer>
      ),
    });
  };

  marketing = () => {
    this.setState({
      content: (
        <IconContainer>
          {Marketing.map((sel) => {
            return <IconWrapper key={sel.id}>{sel.comp}</IconWrapper>;
          })}
        </IconContainer>
      ),
    });
  };

  state = {
    links: [
      {
        id: 1,
        name: "Design",
        to: this.design,
      },
      {
        id: 2,
        name: "Development",
        to: this.development,
      },
      {
        id: 3,
        name: "Marketing",
        to: this.marketing,
      },
    ],
    activeLink: null,
    content: "",
  };

  handleClick = (id, to) => {
    this.setState({ activeLink: id });
    to();
  };

  render() {
    const { links, activeLink } = this.state;

    return (
      <Techs>
        <Section>
          <Content>
            <Title>Our Services</Title>
            <Subtitle>
              Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq
              uam ex odio, is the turpis accu msan congue euisque blandit dui
              Pelle ntesque habitant.
            </Subtitle>
            <UnList>
              {links.map((link) => {
                return (
                  <List key={link.id}>
                    <Link onClick={() => this.handleClick(link.id, link.to)}
                      className={link.id === activeLink ? " selected" : ""} >
                      {link.name}
                    </Link>
                  </List>
                );
              })}
            </UnList>
          </Content>
        </Section>
        <Section>
          {this.state.content}
          {this.state.content === "" ? this.handleClick(1, this.design) : ""}
        </Section>
      </Techs>
    );
  }
}

export const Services = () => {
  return (
    <div>
      <Helmet>
        <title>Services</title>
        <meta name="description" content="Our Services" />
      </Helmet>
      <RenderServices />
    </div>
  );
};

export const HomeServices = () => {
  return <RenderServices />;
};
