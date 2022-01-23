import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

function Letter({ letter }) {
  const ref = useRef();

  useLayoutEffect(() => {
    gsap.fromTo(
      ".letter",
      { opacity: "0", y: 100 },
      {
        opacity: "1",
        y: 0,
        stagger: 0.05,
        delay: 0,
        ease: ".circ.inOut",
        duration: 1,
      }
    );
  }, []);

  return (
    <Lett ref={ref} className="letter">
      {letter}
    </Lett>
  );
}

export default Letter;

const Lett = styled.p`
  margin-right: 3%;
`;
