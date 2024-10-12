import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  padding: 2rem 3rem 2.5rem;
  background-color: #f5f9fb;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  border-radius: 20px;
  border: 1px solid #f5f9fb;
  position: relative;
`;

const Text = styled.span`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
  color: #111827;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  border-width: 1px;
`;

const Btn = styled.button`
  width: 100%;
  height: auto;
  padding: 1rem 2rem 1rem 1.75rem;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.75rem;
  color: #374151;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
`;

const KakaoBtn = styled(Btn)`
  background-color: #fee404;
`;

const GoogleBtn = styled(Btn)`
  background-color: white;
`;

const StyledSVG = styled.svg`
  position: absolute;
  top: 16px;
  right: 16px;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

function Login({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleBackgroundClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  const handleContainerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Wrapper onClick={handleBackgroundClick}>
      <Container onClick={handleContainerClick}>
        <Text>로그인</Text>
        <ButtonBox>
          <KakaoBtn>
            <svg
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 512 512"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#000000"
                d="M255.5 48C299.345 48 339.897 56.5332 377.156 73.5996C414.415 90.666 443.871 113.873 465.522 143.22C487.174 172.566 498 204.577 498 239.252C498 273.926 487.174 305.982 465.522 335.42C443.871 364.857 414.46 388.109 377.291 405.175C340.122 422.241 299.525 430.775 255.5 430.775C241.607 430.775 227.262 429.781 212.467 427.795C148.233 472.402 114.042 494.977 109.892 495.518C107.907 496.241 106.012 496.15 104.208 495.248C103.486 494.706 102.945 493.983 102.584 493.08C102.223 492.177 102.043 491.365 102.043 490.642V489.559C103.126 482.515 111.335 453.169 126.672 401.518C91.8486 384.181 64.1974 361.2 43.7185 332.575C23.2395 303.951 13 272.843 13 239.252C13 204.577 23.8259 172.566 45.4777 143.22C67.1295 113.873 96.5849 90.666 133.844 73.5996C171.103 56.5332 211.655 48 255.5 48Z"
              ></path>
            </svg>
            카카오로 시작하기
          </KakaoBtn>
          <GoogleBtn>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect width="1.5rem" height="1.5rem" fill="#FFFFFF"></rect>
              <path
                d="M23.04 12.2614C23.04 11.4459 22.9668 10.6618 22.8309 9.90912H12V14.3575H18.1891C17.9225 15.795 17.1123 17.013 15.8943 17.8284V20.7139H19.6109C21.7855 18.7118 23.04 15.7637 23.04 12.2614Z"
                fill="#4285F4"
              ></path>
              <path
                d="M12 23.4998C15.105 23.4998 17.7081 22.47 19.6109 20.7137L15.8943 17.8282C14.8645 18.5182 13.5472 18.9259 12 18.9259C9.00474 18.9259 6.46951 16.903 5.56519 14.1848H1.72314V17.1644C3.61542 20.9228 7.50451 23.4998 12 23.4998Z"
                fill="#34A853"
              ></path>
              <path
                d="M5.56523 14.1851C5.33523 13.4951 5.20455 12.758 5.20455 12.0001C5.20455 11.2421 5.33523 10.5051 5.56523 9.81506V6.83551H1.72318C0.944318 8.38801 0.5 10.1444 0.5 12.0001C0.5 13.8557 0.944318 15.6121 1.72318 17.1646L5.56523 14.1851Z"
                fill="#FBBC05"
              ></path>
              <path
                d="M12 5.07386C13.6884 5.07386 15.2043 5.65409 16.3961 6.79364L19.6945 3.49523C17.7029 1.63955 15.0997 0.5 12 0.5C7.50451 0.5 3.61542 3.07705 1.72314 6.83545L5.56519 9.815C6.46951 7.09682 9.00474 5.07386 12 5.07386Z"
                fill="#EA4335"
              ></path>
            </svg>
            Google 계정으로 시작하기
          </GoogleBtn>
        </ButtonBox>
        <StyledSVG
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={onClose}
        >
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </StyledSVG>
      </Container>
    </Wrapper>
  );
}

Login.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Login;
