import styled from "styled-components";

// Component

function TextIntro({ title, core }) {
  return (
    <TextContainer>
      {title && <Title>{title}</Title>}
      {core && <Core>{core}</Core>}
    </TextContainer>
  );
}

export default TextIntro;

// Style

const TextContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 8rem;
  width: 100%;
  @media screen and (max-width: 1190px) {
    padding: 4rem 1.6rem;
    flex-direction: column;
  }
`;

const Title = styled.h1`
  display: flex;
  flex-wrap: wrap;
  font-family: "Lacoste-ExtraBold", "Helvetica Neue";
  font-size: 6vw;
  line-height: 1;
  text-transform: uppercase;
  width: 60%;
  margin-right: 3.2rem;
  @media screen and (max-width: 1190px) {
    font-size: 9vw;
    width: 100%;
    margin-right: 0;
    margin-bottom: 3.2rem;
  }
`;

const Core = styled.p`
  display: flex;
  font-family: "Lacoste-Regular", "Helvetica Neue";
  font-size: 2rem;
  text-transform: uppercase;
  width: 40%;
  @media screen and (max-width: 1190px) {
    width: 100%;
  }
`;
