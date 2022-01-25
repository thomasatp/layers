import styled from "styled-components";
import TextIntro from "./../../components/TextIntro";
import Card from "./../../components/Card";
import data from "./../../assets/data.js";

// Component

function Home() {
  return (
    <Container>
      <TextIntro
        title="How to improve Lacoste Digital Experience"
        core="The purpose of this document is to illustrate through different
          examples the direction we want to take in terms of design. It can be
          typography, structures or animations"
      ></TextIntro>
      {data.map(
        ({ title, desc, example, src1, src2, src3, src4, link }, id) => (
          <Card
            key={id}
            title={title}
            desc={desc}
            example={example}
            src1={src1}
            src2={src2}
            src3={src3}
            src4={src4}
            url={link}
          ></Card>
        )
      )}
    </Container>
  );
}

export default Home;

// Style

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
