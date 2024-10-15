import styled from "styled-components";
import VideoSection from "../components/video";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

function Home() {
  return (
    <Wrapper>
      <VideoSection />
    </Wrapper>
  );
}

export default Home;
