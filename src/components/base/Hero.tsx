import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <Container>
      <Column>
        <h2>AAR.DEV</h2>
        <p>
          Welcome, I'm Aar. I'm a Frontend Developer, tech Enthusiast, and write
          about{" "}
          <span>
            {"<"}
            <Typewriter
              words={[`Frontend${"/>"}`, `Tech${"/>"}`, `Gaming${"/>"}`]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={2500}
            />
          </span>{" "}
          and much more.
        </p>
      </Column>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

const Column = styled.div`
  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.25rem;
    margin-top: 1rem;
  }

  span {
    color: #f96d00 !important;
  }
  max-width: 50%;
`;

export default Hero;
