import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 11.25rem 20rem;
  background-color: white;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const Title = styled.h1`
  color: #0f2e4d;
  font-weight: 600;
  text-align: left;
  font-size: 2rem;
  line-height: 2.5rem;
`;

const SubTitle = styled.p`
  color: #4b5563;
  text-align: left;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
`;

function ProcessSection() {
  return (
    <Wrapper>
      <Title>
        광주소프트웨어마이스터고등학교
        <br />
        2025 신입생 모집절차
      </Title>
      <SubTitle>
        우리 학교에 입학하기 위해 필요한 절차를 소개해드릴게요!
      </SubTitle>
    </Wrapper>
  );
}

export default ProcessSection;
