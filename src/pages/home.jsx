import styled from "styled-components";
import VideoSection from "../components/video";

const Wrapper = styled.div`
  width: 100%;
  height: 300vh;
  display: flex;
  flex-direction: column;
`;

function Home() {
  return (
    <Wrapper>
      <VideoSection />
    </Wrapper>
  );
}

export default Home;
