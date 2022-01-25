import { useState } from "react";
import styled from "styled-components";
import colors from "../../utils/colors";
import { FiArrowUpRight } from "react-icons/fi";

// Component

function Card({ title, desc, example, src1, src2, src3, src4, url }) {
  const [highlight, setHighlight] = useState(null);
  return (
    <Container>
      <MainImage src={src1} alt={title} />
      <DescriptionContainer>
        <h3>{title}</h3>
        <Description>
          <p>{desc}</p>
          <Example>
            <h6>Exemples d'utilisation</h6>
            <p>{example}</p>
            <Link href={url} target="_blank" rel="noreferrer">
              {title}
              <FiArrowUpRight />
            </Link>
          </Example>
        </Description>
      </DescriptionContainer>
      <InlineContainer>
        <Image
          className="hover"
          onClick={() =>
            highlight === 1 ? setHighlight(null) : setHighlight(1)
          }
          minWidth={highlight === 1 ? "80%" : "10%"}
          src={src2}
          alt={title}
        />
        <Image
          className="hover"
          onClick={() =>
            highlight === 2 ? setHighlight(null) : setHighlight(2)
          }
          minWidth={highlight === 2 ? "80%" : "10%"}
          src={src3}
          alt={title}
        />
        <Image
          className="hover"
          onClick={() =>
            highlight === 3 ? setHighlight(null) : setHighlight(3)
          }
          minWidth={highlight === 3 ? "80%" : "10%"}
          src={src4}
          alt={title}
        />
      </InlineContainer>
    </Container>
  );
}

export default Card;

// Style

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  margin: 8rem 0;
  @media screen and (max-width: 1190px) {
    margin: 4rem 0;
  }
`;

const MainImage = styled.img`
  width: 100%;
`;

const InlineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 16rem;
  @media screen and (max-width: 1190px) {
    padding: 0 1.6rem;
    flex-wrap: wrap;
  }
`;

const Image = styled.img`
  min-width: ${({ minWidth }) => minWidth};
  height: auto;
  object-fit: cover;
  display: flex;
  padding-right: 1.6rem;
  transition: ease-out 0.5s;

  &:last-of-type {
    padding-right: 0;
  }
  @media screen and (max-width: 1190px) {
    padding: 0;
    min-width: 100%;
    margin-bottom: 1.6rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const DescriptionContainer = styled.div`
  padding: 8rem 16rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 1.6rem;
  transition: ease 0.3s;
  color: ${colors.dark};

  h3 {
    font-family: "Lacoste-ExtraBold", "Helvetica Neue";
    font-size: 5.8rem;
    text-transform: uppercase;
    margin-bottom: 3.2rem;
  }

  @media screen and (max-width: 1190px) {
    padding: 3.2rem 1.6rem;

    h3 {
      font-size: 3.2rem;
      text-transform: uppercase;
      margin-bottom: 1.6rem;
    }
  }
`;

const Description = styled.div`
  display: flex;
  width: 100%;
  p {
    display: flex;
    flex: 1;
    font-size: 1.6rem;
    color: ${colors.dark};
    margin-right: 4rem;
  }

  @media screen and (max-width: 1190px) {
    flex-direction: column;

    p {
      margin-right: 0;
      margin-bottom: 3.2rem;
    }
  }
`;

const Example = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 4rem;

  h6 {
    font-size: 1.6rem;
    margin-bottom: 1.6rem;
    color: ${colors.denim};
  }

  @media screen and (max-width: 1190px) {
    margin-left: 0;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: bold;
  margin-top: 4.8rem;
  color: ${colors.denim};

  svg {
    width: 1.6rem;
    height: 1.6rem;
    margin-left: 0.2rem;
  }

  @media screen and (max-width: 1190px) {
    margin-top: 0;
  }
`;
