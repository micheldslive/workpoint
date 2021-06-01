import { Helmet } from "react-helmet";
import { HomeContact } from "../contact/index";
import { HomeCases } from "../cases/index";
import { HomeTestimonials } from "../testimonials/index";
import { HomeAbout } from "../about/index";
import { HomeServices } from "../services/index";
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
