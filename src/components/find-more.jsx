import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  bottom: 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;

const Text = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  cursor: pointer;
  color: white;
  font-weight: 600;
  text-align: center;
`;

const StyledSvg = styled.svg`
  animation: bounce 1s infinite;
  cursor: pointer;

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
`;

function FindMore() {
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight - window.scrollY,
      behavior: "smooth",
    });
  };

  return (
    <Wrapper>
      <Text
        role="button"
        aria-label="Learn more about GSM"
        onClick={handleScroll}
      >
        GSM 더 알아보기
        <br /> 문제 발생 시 채널톡으로 문의해주세요
      </Text>
      <StyledSvg
        onClick={handleScroll}
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
      >
        <mask
          id="mask0_393_6514"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="25"
          height="24"
          style={{ maskType: "alpha" }} // 수정된 부분
        >
          <rect x="0.5" width="24" height="24" fill="#D9D9D9"></rect>
        </mask>
        <g mask="url(#mask0_393_6514)" fill="none">
          <path
            d="M12.5001 16.5115L16.5732 12.4538C16.7116 12.3153 16.8831 12.2419 17.0876 12.2336C17.2921 12.2253 17.4719 12.2987 17.627 12.4538C17.7719 12.5986 17.8443 12.7743 17.8443 12.9807C17.8443 13.1871 17.7719 13.3627 17.627 13.5076L13.1328 18.0018C13.0392 18.0954 12.9405 18.1614 12.8366 18.1999C12.7328 18.2384 12.6206 18.2576 12.5001 18.2576C12.3796 18.2576 12.2674 18.2384 12.1636 18.1999C12.0597 18.1614 11.961 18.0954 11.8674 18.0018L7.37318 13.5076C7.23471 13.3692 7.16131 13.1977 7.15298 12.9932C7.14465 12.7887 7.21805 12.6089 7.37318 12.4538C7.51805 12.3089 7.69368 12.2365 7.90008 12.2365C8.10648 12.2365 8.28211 12.3089 8.42698 12.4538L12.5001 16.5115ZM12.5001 10.5307L16.5732 6.47303C16.7116 6.33457 16.8831 6.26117 17.0876 6.25283C17.2921 6.2445 17.4719 6.3179 17.627 6.47303C17.7719 6.6179 17.8443 6.79353 17.8443 6.99993C17.8443 7.20633 17.7719 7.38197 17.627 7.52683L13.1328 12.0211C13.0392 12.1147 12.9405 12.1807 12.8366 12.2191C12.7328 12.2576 12.6206 12.2768 12.5001 12.2768C12.3796 12.2768 12.2674 12.2576 12.1636 12.2191C12.0597 12.1807 11.961 12.1147 11.8674 12.0211L7.37318 7.52683C7.23471 7.38838 7.16131 7.21692 7.15298 7.01243C7.14465 6.80795 7.21805 6.62815 7.37318 6.47303C7.51805 6.32815 7.69368 6.25571 7.90008 6.25571C8.10648 6.25571 8.28211 6.32815 8.42698 6.47303L12.5001 10.5307Z"
            fill="#FFFFFF"
          ></path>
        </g>
      </StyledSvg>
    </Wrapper>
  );
}

export default FindMore;
