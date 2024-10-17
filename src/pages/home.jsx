import styled from "styled-components";
import VideoSection from "../components/video";
import ProcessSection from "../components/process";

const Wrapper = styled.div`
  width: 100%;
`;

function Home() {
  return (
    <Wrapper>
      <VideoSection />
      <ProcessSection />
    </Wrapper>
  );
}

export default Home;
