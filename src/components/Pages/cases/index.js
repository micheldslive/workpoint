import {
  Cases,
  CasesStudies,
  Section,
  Container,
  Title,
  Description,
  Cards,
  Column,
  GeneralStudies,
  Img,
  Content,
  CardTitle,
  CardDescription,
  MoreLink,
  Button,
} from "./styles";

const cases = [
  {
    id: 1,
    title: "Isomorphic Web App",
    desc: "Getting involved matters. Crucial causes to the if ever, come from passive action.",
    src: Cases[0],
    href: "",
  },
  {
    id: 2,
    title: "Isomorphic Web App",
    desc: "Getting involved matters. Crucial causes to the if ever, come from passive action.",
    src: Cases[1],
    href: "",
  },
  {
    id: 3,
    title: "Isomorphic Web App",
    desc: "Getting involved matters. Crucial causes to the if ever, come from passive action.",
    src: Cases[2],
    href: "",
  },
];

export const HomeCases = () => {
  return (
    <CasesStudies>
      <Section>
        <Container>
          <Title>Case Studies</Title>
          <Description>
            Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam
            ex odio, is the turpis accu msan congue euisque blandit dui Pelle
            ntesque habitant.
          </Description>
        </Container>
        <Cards>
          {cases.map((sel) => (
            <Column key={sel.id}>
              <GeneralStudies>
                <Img src={sel.src} alt="" />
                <Content>
                  <CardTitle>{sel.title}</CardTitle>
                  <CardDescription>{sel.desc}</CardDescription>
                  <MoreLink href={sel.href}>» ReadMore</MoreLink>
                </Content>
              </GeneralStudies>
            </Column>
          ))}
        </Cards>
        <Container>
          <Button type="submit">View All</Button>
        </Container>
      </Section>
    </CasesStudies>
  );
};
