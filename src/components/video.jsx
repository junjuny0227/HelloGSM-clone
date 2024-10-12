import styled from "styled-components";
import Greeting from "./greeting";
import FindMore from "./find-more";

const Wrapper = styled.section`
  width: 100%;
  height: calc(100vh - 4.625rem);
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  top: 4.625rem;
`;

const StyledVidio = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function VideoSection() {
  return (
    <Wrapper>
      <StyledVidio
        poster="/public/images/poster.png"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/public/videos/promotion.webm" type="video/webm" />
        <source src="/public/videos/promotion.mp4" type="video/mp4" />
      </StyledVidio>
      <Greeting />
      <FindMore />
    </Wrapper>
  );
}

export default VideoSection;
