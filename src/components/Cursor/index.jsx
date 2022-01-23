import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "./../../utils/colors";

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [hidden, setHidden] = useState(false);
  const [click, setClick] = useState(false);
  const [linkHover, setLinkHover] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", mMove);
      document.addEventListener("mouseenter", mEnter);
      document.addEventListener("mouseleave", mLeave);
      document.addEventListener("mousedown", mDown);
      document.addEventListener("mouseup", mUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", mMove);
      document.removeEventListener("mouseenter", mEnter);
      document.removeEventListener("mouseleave", mLeave);
      document.removeEventListener("mousedown", mDown);
      document.removeEventListener("mouseup", mUp);
    };

    const mDown = () => {
      setClick(true);
    };

    const mUp = () => {
      setClick(false);
    };

    const mMove = (el) => {
      setPosition({ x: el.clientX, y: el.clientY });
    };

    const mLeave = () => {
      setHidden(true);
    };

    const mEnter = () => {
      setHidden(false);
    };

    const addLinkEvents = () => {
      document.querySelectorAll("a, .hover").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHover(true));
        el.addEventListener("mouseout", () => setLinkHover(false));
      });
      document.querySelectorAll("button").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHover(true));
        el.addEventListener("mouseout", () => setLinkHover(false));
      });
    };

    addEventListeners();
    addLinkEvents();
    return () => removeEventListeners();
  });

  return (
    <Curs
      linkHover={linkHover}
      click={click}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      hidden={hidden}
    />
  );
}

export default Cursor;

const Curs = styled.div`
  pointer-events: none;
  width: ${({ linkHover, click }) =>
    linkHover ? "6.8rem" : click ? "0.8rem" : "1.2rem"};
  height: ${({ linkHover, click }) =>
    linkHover ? "6.8rem" : click ? "0.8rem" : "1.2rem"};
  background: ${colors.light};
  mix-blend-mode: difference;
  border-radius: 100%;
  position: fixed;
  z-index: 10000;
  transform: translate(-50%, -50%);
  transition: all 100ms ease-out;
  transition-property: opacity, background-color, width, height;
  @media screen and (max-width: 767px) {
    display: none;
  }
  opacity: ${({ hidden }) => (hidden ? "0" : "1")};
`;
