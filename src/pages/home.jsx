import styled from "styled-components";
import Header from "../components/header";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function Home() {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
}

export default Home;
