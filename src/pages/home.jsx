import styled from "styled-components";
import Header from "../components/header";
import VideoSection from "../components/video";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function Home() {
  return (
    <Wrapper>
      <Header />
      <VideoSection />
    </Wrapper>
  );
}

export default Home;
