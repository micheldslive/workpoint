import { Helmet } from "react-helmet";
import { HomeContact } from "components/Pages/contact/index";
import { HomeCases } from "components/Pages/cases/index";
import { HomeTestimonials } from "components/Pages/testimonials/index";
import { HomeAbout } from "components/Pages/about/index";
import { HomeServices } from "components/Pages/services/index";
import {
  HomeContainer,
  Section,
  Content,
  Title,
  Subtitle,
  Link,
  Background,
} from "./styles";

const Home = () => {
  return (
    <div className="Home">
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home Page" />
      </Helmet>
      <Background>
        <HomeContainer>
          <Section>
            <Content>
              <Title>
                Freebie Web Design <br /> Web Development Template <br /> by
                workpoint.net
              </Title>
              <Subtitle>
                Our products are fully custom-made, built with the latest
                technologies and cloud-architectures.
              </Subtitle>
              <Link type="button">Get Started »</Link>
            </Content>
          </Section>
        </HomeContainer>
      </Background>
      <HomeServices />
      <HomeAbout />
      <HomeTestimonials />
      <HomeCases />
      <HomeContact />
    </div>
  );
};

export default Home;
