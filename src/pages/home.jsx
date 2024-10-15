import styled from "styled-components";
import VideoSection from "../components/video";

const Wrapper = styled.div`
  width: 100%;
`;

function Home() {
  return (
    <Wrapper>
      <VideoSection />
    </Wrapper>
  );
}

export default Home;
