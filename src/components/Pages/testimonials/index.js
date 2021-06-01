import React, { Component } from "react";
import TouchCarousel from "react-touch-carousel";
import touchWithMouseHOC from "react-touch-carousel/lib/touchWithMouseHOC";
import { Helmet } from "react-helmet";
import {
  CarouselCard,
  CarouselInner,
  ContainerCarousel,
  CarouselTrack,
  Column,
  Title,
  Description,
  Name,
  Img,
  theme,
  center,
  Prev,
  Next,
  Container,
  Clients,
} from "./styles";

const data = [
  {
    id: 1,
    name: "Isa Martins",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex  turpis accumsan congue. Quisque blandit dui Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In convallis porta mauris non aliquam.",
    src: Clients[0],
    href: "",
  },
  {
    id: 1,
    name: "Carlos Zambeli",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex  turpis accumsan congue. Quisque blandit dui Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In convallis porta mauris non aliquam.",
    src: Clients[1],
    href: "",
  },
  {
    id: 1,
    name: "Aristeu Gomes",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex  turpis accumsan congue. Quisque blandit dui Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In convallis porta mauris non aliquam.",
    src: Clients[2],
    href: "",
  },
];

function CarouselContainer(props) {
  const { cursor, carouselState, ...rest } = props;
  return (
    <ContainerCarousel>
      <CarouselTrack {...rest} />
    </ContainerCarousel>
  );
}

const SliderContainer = touchWithMouseHOC(CarouselContainer);

class App extends Component {
  constructor(props) {
    super(props);
    this.carousel = React.createRef({
      next: () => null,
      prev: () => null,
    });
  }

  renderCard(index, modIndex, cursor) {
    cursor = -cursor;
    const item = data[modIndex];
    const translateCard = index > cursor ? 100 * (index - cursor) : 0;
    return (
      <CarouselCard key={index} data-index={index} data-mod-index={modIndex}
        style={{ transform: `translate3d(${translateCard}%, 0, 0)` }} >
        <CarouselInner>
          <Column theme={theme} center={center}>
            <Img src={item.src} alt="" />
          </Column>
          <Column>
            <Title>Check what our client say about us</Title>
            <Description>{item.desc}</Description>
            <Name>{item.name}</Name>
          </Column>
        </CarouselInner>
      </CarouselCard>
    );
  }

  render() {
    return (
      <React.StrictMode>
        <Container>
          <TouchCarousel
            component={SliderContainer}
            cardCount={data.length}
            autoplay={15e3}
            renderCard={this.renderCard}
            stiffness={100}
            ref={this.carousel}
          />
          <Prev size="58" onClick={() => this.carousel.current.prev()}></Prev>
          <Next size="58" onClick={() => this.carousel.current.next()}></Next>
        </Container>
      </React.StrictMode>
    );
  }
}

export const HomeTestimonials = () => {
  return <App />;
};

export const Testimonials = () => {
  return (
    <div>
      <Helmet>
        <title>Testimonials</title>
        <meta name="description" content="Testimonials" />
      </Helmet>
      <App />
    </div>
  );
};
