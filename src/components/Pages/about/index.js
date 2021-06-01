import { Helmet } from "react-helmet";
import {
  AboutUs,
  Image,
  Background,
  Section,
  Content,
  Flex,
  Column,
  Title,
  Paragraph,
  Description,
  theme,
  cor,
} from "./styles";

export const TextAbout = () => {
  return (
    <Image>
      <Background>
        <Section>
          <Content>
            <Title cor={cor}>Who We Are</Title>
            <Paragraph>
              Workpoint is the leading media and entertainment company focused
              on women with a global audience footprint of 249 million across
              all platforms. Over the past 14 years, Workpoint has upended the
              global media space by emphasizing diverse storytelling that
              delivers refreshing new perspectives to its audience and drives
              growth across numerous platforms for its partners.
            </Paragraph>
            <Paragraph>
              Listed on Crain's Fast 50 for three consecutive years, as well as
              one of Fast Company’s Most Innovative Media Companies, the brand
              has received a variety of acknowledgements, including being named
              one of the fastest growing media companies in America by Inc. and
              the European Publisher of the Year by Digiday.
            </Paragraph>
          </Content>
        </Section>
      </Background>
    </Image>
  );
};

export const OurAbout = () => {
  return (
    <Background theme={theme}>
      <Section>
        <Flex>
          <Column>
            <Title>Our mission</Title>
            <Description>
              Workpoint is a catalyst for women to feel, see, and claim their
              power.
            </Description>
          </Column>
          <Column>
            <Title>Our essence</Title>
            <Description>
              At our core, Workpoint operates on Imagination, Individuality,
              Inclusivity, & Impact.
            </Description>
          </Column>
        </Flex>
        <Flex>
          <Column>
            <Title>Our promise</Title>
            <Description>
              We deliver optimistic and diverse storytelling, experiences, and
              points of view to our audience of smart, curious, passionate
              women.
            </Description>
          </Column>
          <Column>
            <Title>Our vibe</Title>
            <Description>
              At Workpoint, we make magic. We dream it, and then do
              it—together—every day reinventing what's possible.
            </Description>
          </Column>
        </Flex>
      </Section>
    </Background>
  );
};

export const About = () => {
  return (
    <div className="body">
      <Helmet>
        <title>About</title>
        <meta name="description" content="About us." />
      </Helmet>
      <AboutUs>
        <TextAbout />
        <OurAbout />
      </AboutUs>
    </div>
  );
};

export const HomeAbout = () => {
  return (
    <AboutUs>
      <TextAbout />
      <OurAbout />
    </AboutUs>
  );
};
