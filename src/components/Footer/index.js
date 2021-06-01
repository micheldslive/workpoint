import {
  FooterContainer,
  Section,
  Container,
  Column,
  col,
  Title,
  Link,
  Paragraph,
} from "./styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <Section>
        <Container>
          <Column col={col}>
            <Paragraph>
              Finaldream rure dolor in reprehenderit in voluptate velit esse
              cillum dolore e uis nostrud exercitation isi ut aliquip ex ea
              commodo consequat.
            </Paragraph>
          </Column>
          <Column>
            <Title>Our Services</Title>
            <Link to="/">Web Development</Link>
            <Link to="/">Mobile Development</Link>
            <Link to="/">Cloud Technologies</Link>
            <Link to="/">UI/UX Desins</Link>
          </Column>
          <Column>
            <Title>Our Links</Title>
            <Link to="/">Terms & Condition</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Imprint</Link>
            <Link to="/">Legal</Link>
          </Column>
          <Column>
            <Title>Our Services</Title>
            <Paragraph>Al. Dummyodl 124/23 floor 123 Street.</Paragraph>
            <Paragraph>00 387 65 302 657</Paragraph>
            <Paragraph>hello@workpoint.com</Paragraph>
          </Column>
        </Container>
      </Section>
    </FooterContainer>
  );
};
