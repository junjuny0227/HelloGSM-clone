import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
  opacity: 1;
`;

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const MainMessage = styled.h1`
  width: 100%;
  text-align: center;
  font-weight: 700;
  color: white;
  font-size: 3.25rem;
  line-height: 1.5;
`;

const SubMessage = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 400;
  color: white;
`;

const EffectText = styled.span`
  color: #7dd3fc;
  position: relative;

  &::before {
    content: "••";
    position: absolute;
    color: #a3e635;
    top: -2.2rem;
    left: 0.675rem;
    font-size: 2rem;
    letter-spacing: 1.15rem;
  }
`;

const Button = styled.button`
  color: #f7f7f7;
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 1rem 2.5rem;
  font-weight: 700;
  border: 1px solid white;
  border-radius: 9999px;
  background-color: transparent;
`;

function Greeting() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/guide");

  return (
    <Wrapper>
      <Container>
        <MessageBox>
          <MainMessage>
            꿈🌟과 끼🤘🏻를 마음껏 <EffectText>UP</EffectText> 시킬 수 있는
            <br />
            광주소프트웨어마이스터고등학교
          </MainMessage>
          <SubMessage>
            접수기간 : 2024.10.14. (월) 오전 9시 ~ 2024.10.17. (목) 오후 5시
          </SubMessage>
        </MessageBox>
        <Button onClick={handleClick}>원서접수 하러 가기</Button>
      </Container>
    </Wrapper>
  );
}

export default Greeting;
