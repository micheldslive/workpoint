import { Helmet } from "react-helmet";
import {
  ContactContainer,
  Section,
  Button,
  ImageContainer,
  Image,
  Img,
  ContactForm,
  Form,
  Title,
  Group,
  TextArea,
  Input,
  Label,
  Paragraph,
  Checkbox,
} from "./styles";

export const HomeContact = () => {
  return (
    <ContactContainer>
      <Section>
        <ImageContainer>
          <Image src={Img} alt="Contact Image" />
        </ImageContainer>
        <ContactForm>
          <Form>
            <Title>Send Us message</Title>
            <Group>
              <Input type="text" required="" />
              <Label>Your Name*</Label>
            </Group>
            <Group>
              <Input type="email" name="email" id="email" />
              <Label>Your Email*</Label>
            </Group>
            <Group>
              <Input type="text" name="Phone" id="Phone" />
              <Label>Phone Number*</Label>
            </Group>
            <Group>
              <Input type="text" name="Subject" id="Subject" />
              <Label>Subject</Label>
            </Group>
            <Group>
              <TextArea name="Message" id="Message"></TextArea>
              <Label>Your Message</Label>
            </Group>
            <Group>
              <Checkbox type="checkbox" id="horns" name="horns" />
              <Paragraph>
                By sending this message, you confirm that you
                <br /> have read and agreed to our privacy-policy.
              </Paragraph>
            </Group>
            <Group>
              <Button type="button">Get Started »</Button>
            </Group>
          </Form>
        </ContactForm>
      </Section>
    </ContactContainer>
  );
};

export const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Contact us." />
      </Helmet>
      <HomeContact />
    </div>
  );
};
