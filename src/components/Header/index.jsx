import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import styled from "styled-components";
import colors from "../../utils/colors";
import gsap from "gsap";

// Component

function Header() {
  const [display, setDisplay] = useState(false);
  const tl = gsap.timeline();
  const panel = useRef();
  const link = useRef();
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () =>
        setWindowSize(window.innerWidth)
      );
    };
  });

  useEffect(() => {
    if (windowSize > 1190) {
      gsap.to(".link", { opacity: 1, duration: 0 });
      gsap.to(".panel", { x: "0%", duration: 0 });
    }
  }, [windowSize]);

  function open() {
    if (windowSize < 1190) {
      setDisplay(true);
      tl.fromTo(
        ".panel",
        { x: "100%" },
        { x: "0%", duration: 0.33, ease: ".circ.inOut" }
      );
      tl.fromTo(
        ".link",
        { opacity: 0 },
        { opacity: 1, duration: 0.33, ease: ".circ.inOut" }
      );
    }
  }

  function close() {
    if (windowSize < 1190) {
      tl.fromTo(
        ".link",
        { opacity: 1 },
        { opacity: 0, duration: 0.33, ease: ".circ.inOut" }
      );

      tl.fromTo(
        ".panel",
        { x: "0%" },
        { x: "100%", duration: 0.33, ease: ".circ.inOut" }
      );
      setTimeout(() => {
        setDisplay(false);
      }, 667);
    }
  }

  return (
    <Container display={display}>
      <Brand>
        <Logo color={colors.light} />
        <Link to="/layers">Design intentions</Link>
      </Brand>
      <Nav ref={panel} className="panel" display={display}>
        <ul>
          <li>
            <Link ref={link} className="link" onClick={close} to="/typography">
              Typography
            </Link>
          </li>
          <li>
            <Link ref={link} className="link" onClick={close} to="/layouts">
              Layouts
            </Link>
          </li>
          <li>
            <Link ref={link} className="link" onClick={close} to="/animations">
              Animations
            </Link>
          </li>
        </ul>
      </Nav>
      <Burger onClick={display ? close : open} display={display}>
        <span display={display} />
        <span display={display} />
        <span display={display} />
      </Burger>
    </Container>
  );
}

// Style

export default Header;

const Container = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 12rem;
  color: ${colors.light};
  mix-blend-mode: exclusion;
  padding: 0 8rem;
  z-index: 1000;
  @media screen and (max-width: 1190px) {
    padding: 0 1.6rem;
    mix-blend-mode: ${({ display }) => display && "initial"};
  }
`;

const Brand = styled.h3`
  display: flex;
  align-items: center;
  font-family: "Lacoste-ExtraBold", "Helvetica Neue";
  text-transform: uppercase;
  font-size: 2.4rem;

  svg {
    margin-right: 1.6rem;
  }
`;

const Nav = styled.nav`
  font-size: 1.8rem;

  ul {
    display: flex;

    li {
      margin-right: 3.2rem;
      overflow: hidden;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }

  @media screen and (max-width: 1190px) {
    display: ${({ display }) => (display ? "flex" : "none")};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${colors.dark};
    width: 100%;
    padding: 0 1.6rem;
    font-size: 4rem;

    ul {
      width: 100%;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      li {
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 4rem;
        width: 100%;
      }
    }
  }
`;

const Burger = styled.a`
  display: none;
  @media screen and (max-width: 1190px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 3.2rem;
    height: 1.7rem;
    z-index: 2000;
    transition: ease 0.3s;
    span {
      background: ${colors.light};
      width: 100%;
      height: 1px;
      transition: ease 0.3s;
      transform: translateX(${({ display }) => (display ? "-4px" : "0")});

      &:nth-of-type(2) {
        transform: translateX(${({ display }) => (display ? "4px" : "0")});
      }
    }
  }
`;
