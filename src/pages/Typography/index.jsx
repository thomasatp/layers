import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import hero2 from "./../../assets/hero2.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Component

function Typography() {
  gsap.registerPlugin(ScrollTrigger);
  const boxRef = useRef();
  const page = useRef();

  useLayoutEffect(() => {
    gsap.fromTo(
      ".page",
      { opacity: "0" },
      {
        opacity: "1",
        delay: 0.8,
        duration: 2,
      }
    );
    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {
    gsap.fromTo(
      ".box",
      { padding: "0 8rem" },
      {
        padding: "0",
        scrollTrigger: {
          trigger: ".box",
          start: "top center",
          end: "top 100px",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <Container ref={page} className="page">
      <TextContainer>
        <Title>Typography</Title>
        <Core>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Core>
      </TextContainer>
      <ImageContainer ref={boxRef} className="box">
        <img className="img" src={hero2} alt="hero" />
      </ImageContainer>
      <TextContainer>
        <Core>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Core>
      </TextContainer>
    </Container>
  );
}

export default Typography;

// Style

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 8rem;
`;

const Title = styled.h1`
  display: flex;
  font-family: "Lacoste-ExtraBold", "Helvetica Neue";
  font-size: 6vw;
  line-height: 1;
  text-transform: uppercase;
  min-width: 60%;
`;

const Core = styled.p`
  display: flex;
  font-family: "Lacoste-Regular", "Helvetica Neue";
  font-size: 2rem;
  text-transform: uppercase;
  min-width: 40%;
  width: 40%;
`;

const ImageContainer = styled.div`
  display: flex;
  height: 50vw;
  margin-bottom: 8rem;

  img {
    width: 100%;
    object-fit: cover;
  }
`;
