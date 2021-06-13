import { ReactComponent as AdobeIcon } from "assets/images/services/design/Adobe-icon.svg";
import { ReactComponent as BeIcon } from "assets/images/services/design/Be-icon.svg";
import { ReactComponent as CamIcon } from "assets/images/services/design/Cam-icon.svg";
import { ReactComponent as EraseIcon } from "assets/images/services/design/Erase-icon.svg";
import { ReactComponent as PaintIcon } from "assets/images/services/design/Paint-icon.svg";
import { ReactComponent as PenIcon } from "assets/images/services/design/Pen-icon.svg";
import { ReactComponent as WindowIcon } from "assets/images/services/design/Window-icon.svg";

import { ReactComponent as ReactIcon } from "assets/images/services/dev/React-icon.svg";
import { ReactComponent as AmazonIcon } from "assets/images/services/dev/Amazon-icon.svg";
import { ReactComponent as CloudIcon } from "assets/images/services/dev/Cloud-icon.svg";
import { ReactComponent as ReduxIcon } from "assets/images/services/dev/Redux-icon.svg";
import { ReactComponent as NodeIcon } from "assets/images/services/dev/Node-icon.svg";
import { ReactComponent as FirebaseIcon } from "assets/images/services/dev/Firebase-icon.svg";
import { ReactComponent as JsIcon } from "assets/images/services/dev/Js-icon.svg";

import { ReactComponent as AtomIcon } from "assets/images/services/marketing/Atom-icon.svg";
import { ReactComponent as BagIcon } from "assets/images/services/marketing/Bag-icon.svg";
import { ReactComponent as BallIcon } from "assets/images/services/marketing/Ball-icon.svg";
import { ReactComponent as CallIcon } from "assets/images/services/marketing/Call-icon.svg";
import { ReactComponent as ClickIcon } from "assets/images/services/marketing/Click-icon.svg";
import { ReactComponent as MailIcon } from "assets/images/services/marketing/Mail-icon.svg";
import { ReactComponent as TargetIcon } from "assets/images/services/marketing/Target-icon.svg";

import styled from "styled-components";

export const Design = [
  {
    id: 1,
    comp: <AdobeIcon />,
  },
  {
    id: 2,
    comp: <BeIcon />,
  },
  {
    id: 3,
    comp: <CamIcon />,
  },
  {
    id: 4,
    comp: <EraseIcon />,
  },
  {
    id: 5,
    comp: <PaintIcon />,
  },
  {
    id: 6,
    comp: <PenIcon />,
  },
  {
    id: 7,
    comp: <WindowIcon />,
  },
];

export const Development = [
  {
    id: 1,
    comp: <ReactIcon />,
  },
  {
    id: 2,
    comp: <AmazonIcon />,
  },
  {
    id: 3,
    comp: <CloudIcon />,
  },
  {
    id: 4,
    comp: <ReduxIcon />,
  },
  {
    id: 5,
    comp: <NodeIcon />,
  },
  {
    id: 6,
    comp: <FirebaseIcon />,
  },
  {
    id: 7,
    comp: <JsIcon />,
  },
];

export const Marketing = [
  {
    id: 1,
    comp: <AtomIcon />,
  },
  {
    id: 2,
    comp: <BagIcon />,
  },
  {
    id: 3,
    comp: <BallIcon />,
  },
  {
    id: 4,
    comp: <CallIcon />,
  },
  {
    id: 5,
    comp: <ClickIcon />,
  },
  {
    id: 6,
    comp: <MailIcon />,
  },
  {
    id: 7,
    comp: <TargetIcon />,
  },
];

export const Techs = styled.div`
  display: block;
  background-color: rgba(243, 248, 255, 0.9);
  position: relative;
  padding: 40px 0 80px;
`;

export const Section = styled.section``;

export const UnList = styled.ul`
  list-style: none;
  text-align: center;
  max-width: 400px;
  margin: 30px auto;
  padding: 15px;
  border-radius: 30px;

  @media (min-width: 881px) {
    background-color: white;
    box-shadow: 0 0 2em rgba(0, 0, 0, 0.2);
  }
`;

export const List = styled.li`
  .selected,
  a:hover {
    color: var(--red);
  }

  @media (max-width: 880px) {
    min-width: 250px;
    background-color: white;
    line-height: 50px;
    margin-bottom: 10px;
    box-shadow: 0 0 2em rgba(0, 0, 0, 0.2);
    border-radius: 30px;
  }

  @media (max-width: 880px) {
    a {
      margin: 0 3px;
      font-size: 20px;
      color: var(--dark-blue);
      transition: 0.3s;
    }
  }

  @media (min-width: 881px) {
    float: left;
    display: contents;
    a {
      margin: 0 3px;
      padding: 12px;
      font-size: 15px;
      text-decoration: none;
      white-space: normal;
      transition: 0.3s;
    }
  }
`;

export const Link = styled.a`
  cursor: pointer;
`;

export const Content = styled.div`
  margin: 20px;
  display: block;
  text-align: center;
`;

export const Container = styled.div`
  text-align: justify;
  padding: 10px;
  max-width: 500px;
  margin: 0 auto;
`;

// With wrapper, target the svg
export const IconWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  -ms-flex: 0 0 8.333333%;
  flex: 0 0 8.333333%;
  max-width: 8.333333%;

  @media (max-width: 880px) {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
  }

  svg {
    padding: 20px;
    width: 50px;
    height: 50px;
    fill: var(--dark-blue);
    border: solid 1px var(--dark-blue);
    background-color: white;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.2s linear;
  }

  svg:hover {
    fill: white;
    border: solid 1px var(--dark-blue);
    background-color: var(--dark-blue);
  }
`;

export const IconContainer = styled.div`
  padding-top: 30px;
  max-width: 900px;
  margin: 0 auto;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.h1`
  margin: 0 0;
  font-size: 32px;
`;

export const Subtitle = styled.p`
  margin: 20px auto;
  font-size: 13px;
  max-width: 550px;
`;
