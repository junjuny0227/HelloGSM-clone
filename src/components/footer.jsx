import styled from "styled-components";

const Wrapper = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f4f6;
  padding: 3.75rem 6.25rem;
`;

const Container = styled.div`
  width: 100%;
  max-width: 77.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4rem;
`;

const LegalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 0.5rem;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: right;
`;

const CopyrightNotice = styled(Text)`
  color: #475569;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const LinkBox = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #475569;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const ContactInfo = styled.p`
  width: 100%;
  display: block;
  text-align: right;
  font-weight: 400;
  color: #94a3b8;
  font-size: 1rem;
  line-height: 1.5rem;
`;

function Footer() {
  return (
    <Wrapper>
      <Container>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 231 141"
          fill="none"
          width="231"
          height="141"
        >
          <g clipPath="url(#clip0_2582_13103)" fill="none">
            <path
              d="M22.0285 12.4551L0.0112793 24.899L0 49.8094V74.7084L21.7465 87.0048C33.7025 93.7655 43.5945 99.3692 43.7411 99.46L43.9893 99.6188V86.9821V74.3341L33.1611 68.2199L22.3443 62.1057L22.3668 49.8094L22.3894 37.513L32.8792 31.569C38.6542 28.302 43.5268 25.5456 43.7186 25.4435L44.0682 25.2733L50.7794 29.0847C54.479 31.1833 57.547 32.8962 57.6147 32.8962C57.6823 32.8962 62.7129 30.083 68.8037 26.6459C77.6016 21.6661 79.8461 20.3616 79.7221 20.2481C79.6206 20.146 55.6859 6.57919 44.4968 0.260849L44.0457 0.0112915L22.0285 12.4551Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M35.214 35.0177L26.5063 39.9521L26.5289 49.8323L26.5627 59.7125L35.2478 64.6243L43.9329 69.536L43.9667 59.6671C43.978 54.2449 43.978 45.363 43.9667 39.9408L43.9329 30.0946L35.214 35.0177Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M178.213 41.5402C177.277 41.6763 175.63 42.2208 174.829 42.6745C173.318 43.5253 171.987 44.9092 171.321 46.3385C170.712 47.643 170.656 48.0854 170.656 51.6359V54.9028H182.228H193.801L193.192 54.018C192.853 53.5416 190.789 50.5015 188.601 47.2686L184.62 41.404L181.777 41.4154C180.221 41.4267 178.619 41.4834 178.213 41.5402Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M213.1 47.1552C211.013 50.3314 209.017 53.3601 208.644 53.9046L207.979 54.9028H219.495H231V51.6926C231 48.04 230.932 47.5863 230.188 46.0776C229.353 44.376 227.605 42.7879 225.755 42.0733C224.357 41.5288 223.308 41.404 219.924 41.404H216.89L213.1 47.1552Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M56.2837 41.8124C54.3324 42.3342 52.46 43.911 51.5802 45.7713C50.9486 47.1098 50.8696 47.7451 50.8696 51.5225V54.9028H77.9963H105.123V51.409C105.123 48.2896 105.1 47.8131 104.897 47.0304C104.322 44.739 102.574 42.7879 100.352 41.9485L99.6526 41.6876L78.2783 41.6649C59.8028 41.6423 56.8251 41.6649 56.2837 41.8124Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M116.008 41.8464C113.91 42.4476 111.947 44.2853 111.09 46.4519C110.83 47.1212 110.819 47.2346 110.785 51.012L110.751 54.9028H137.822H164.903V51.2616C164.903 47.1779 164.858 46.8262 164.136 45.431C163.572 44.342 162.185 42.9468 161.125 42.4023C159.523 41.5742 161.305 41.6309 137.822 41.6423C118.151 41.6423 116.639 41.6649 116.008 41.8464Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M50.7794 76.1374L50.8132 93.8674L51.0727 94.6274C51.6253 96.2722 53.1819 98.0645 54.7271 98.8358C56.3401 99.6526 54.6256 99.5958 77.9399 99.5958C101.141 99.5958 99.4947 99.6412 101.063 98.8925C102.179 98.3367 103.6 96.8734 104.209 95.6256C105.044 93.9127 105.01 94.548 105.01 79.2229V65.5653H89.5463C81.0418 65.5653 74.105 65.6106 74.1275 65.656C74.1501 65.7127 76.0901 68.1402 78.4475 71.0442L82.7336 76.3303L86.6588 76.3416H90.5728V80.7656V85.1896L77.9174 85.1669L65.2507 85.1328L65.2169 71.7702L65.1943 58.4188H57.9756H50.7568L50.7794 76.1374Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M110.875 58.4643C110.875 58.4983 118.376 64.5104 127.535 71.827L144.194 85.1329L127.478 85.167L110.763 85.1896L110.74 88.7402C110.729 93.1188 110.74 93.4591 110.954 94.3779C111.428 96.397 112.646 97.9624 114.383 98.8019C116.188 99.6526 114.665 99.6073 138.058 99.5732L158.982 99.5392L159.636 99.2896C161.768 98.4729 163.584 96.5558 164.26 94.4346C164.497 93.6973 164.508 93.425 164.508 90.453V87.2768L164.023 86.29C163.516 85.2577 162.591 83.9305 161.621 82.8415C161.249 82.4218 155.417 77.8163 145.796 70.3069L130.558 58.4303L120.722 58.4189C115.308 58.4189 110.875 58.4416 110.875 58.4643Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M170.656 78.9511V99.4829H177.875H185.093L185.116 81.6395L185.15 63.7962L193.045 75.5027C197.388 81.9458 200.975 87.1752 201.008 87.1412C201.053 87.0958 204.561 81.8097 208.825 75.3779L216.562 63.6941V81.5942V99.4829H220.882C225.699 99.4829 226.172 99.4262 227.605 98.7456C229.083 98.0309 230.177 96.6584 230.729 94.7753C230.921 94.1401 230.944 93.0398 230.966 76.2514L231 58.4194H218.311H205.622L203.354 61.8451C202.102 63.7395 201.053 65.3162 201.008 65.3616C200.963 65.407 199.869 63.8756 198.572 61.9358L196.203 58.4307L183.435 58.4194H170.656V78.9511Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M55.6068 113.617C52.866 114.207 51.2869 116.362 51.2869 119.504C51.2869 121.432 51.8396 122.907 52.9562 123.973C54.0277 124.994 55.3023 125.459 57.0731 125.471C58.6748 125.493 59.6561 125.153 60.7164 124.212C61.066 123.905 61.2465 123.803 61.2465 123.917C61.2465 124.007 61.3029 124.348 61.3706 124.665L61.4946 125.233H62.1037H62.7128V122.056V118.88L60.2088 118.903L57.6935 118.937L57.6597 119.81L57.6258 120.695H59.1034H60.5923L60.5133 121.058C60.3893 121.659 59.7689 122.737 59.3854 123.032C58.7312 123.531 58.2124 123.678 57.1295 123.69C56.2385 123.701 56.0354 123.667 55.4715 123.384C54.2984 122.805 53.6442 121.705 53.4976 120.083C53.3735 118.551 53.8247 116.952 54.603 116.169C55.1557 115.613 55.855 115.33 56.8588 115.273C58.3477 115.182 59.532 115.806 60.0283 116.918L60.2426 117.405H61.3593C62.6677 117.405 62.6564 117.417 62.2503 116.328C61.9458 115.5 60.9758 114.502 60.0847 114.071C58.7876 113.458 57.107 113.288 55.6068 113.617Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M107.593 113.605C105.608 114.002 104.13 115.364 103.51 117.349C103.16 118.483 103.16 120.525 103.521 121.671C103.815 122.623 104.503 123.724 105.112 124.211C105.676 124.654 106.725 125.164 107.424 125.334C108.383 125.573 110.063 125.527 110.921 125.232C111.665 124.983 112.556 124.416 112.928 123.951L113.109 123.701L113.176 123.985C113.21 124.143 113.289 124.472 113.334 124.722L113.425 125.176L114.068 125.21L114.71 125.244V122.056V118.88H112.173H109.635V119.788V120.695H111.101H112.567L112.5 121.001C112.206 122.181 111.406 123.179 110.503 123.497C109.635 123.792 108.281 123.769 107.514 123.429C106.77 123.088 106.003 122.249 105.721 121.455C105.416 120.559 105.439 118.256 105.777 117.405C106.296 116.078 107.289 115.375 108.778 115.273C110.3 115.182 111.518 115.795 111.958 116.895L112.173 117.405H113.346H114.519L114.44 117.042C113.932 114.467 110.898 112.947 107.593 113.605Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M144.082 113.605C142.785 113.889 141.961 114.467 141.51 115.398C140.957 116.543 141.025 117.848 141.668 118.755C142.119 119.368 143.123 119.844 144.601 120.128C147.06 120.604 147.601 120.718 147.894 120.876C149.011 121.455 148.887 122.896 147.669 123.451C147.251 123.644 146.924 123.69 146.112 123.69C145.21 123.69 145.018 123.656 144.42 123.361C143.698 122.998 143.247 122.396 143.247 121.795V121.489H142.052H140.856L140.935 122.079C141.149 123.735 142.176 124.801 144.003 125.3C144.883 125.527 147.15 125.527 148.018 125.3C149.936 124.779 150.94 123.633 150.962 121.909C150.973 120.831 150.714 120.15 150.049 119.572C149.349 118.937 148.345 118.63 145.954 118.301C143.687 117.984 142.852 117.178 143.619 116.033C144.071 115.352 145.717 115.035 146.902 115.386C147.466 115.556 148.165 116.237 148.266 116.713L148.345 117.065H149.507H150.658L150.567 116.543C150.432 115.829 149.947 114.966 149.417 114.513C148.368 113.605 145.954 113.197 144.082 113.605Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M156.083 113.549C153.68 113.991 152.101 115.5 151.605 117.837C151.278 119.368 151.571 121.705 152.237 122.839C152.925 124.03 154.098 124.915 155.485 125.289C156.387 125.528 158.519 125.539 159.422 125.289C161.418 124.756 162.726 123.406 163.268 121.319C163.482 120.468 163.482 118.597 163.268 117.655C162.817 115.727 161.553 114.343 159.726 113.764C158.88 113.503 156.94 113.39 156.083 113.549ZM159.219 115.613C159.907 115.976 160.549 116.668 160.854 117.372C161.677 119.3 161.17 121.92 159.782 122.975C159.083 123.508 158.418 123.701 157.335 123.701C154.876 123.679 153.398 121.614 153.748 118.721C154.03 116.419 155.417 115.205 157.685 115.284C158.452 115.318 158.756 115.386 159.219 115.613Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M63.7956 115.046C63.9986 115.749 64.7656 118.335 65.4988 120.774L66.8185 125.232H67.9689H69.1307L69.2322 124.858C69.8751 122.533 71.6798 116.52 71.725 116.566C71.7588 116.6 72.3453 118.551 73.0333 120.899L74.2741 125.176L75.4246 125.21L76.575 125.244L76.9698 123.962C78.0978 120.298 79.9701 114.002 79.9701 113.889C79.9701 113.809 79.6092 113.775 78.876 113.798L77.7932 113.832L76.654 118.109C76.0224 120.457 75.481 122.408 75.4471 122.442C75.4133 122.476 74.8832 120.797 74.2854 118.698C73.6763 116.6 73.1123 114.637 73.0221 114.331L72.8529 113.775H71.7362H70.6309L70.4504 114.365C70.3489 114.694 69.7849 116.691 69.1758 118.789C68.578 120.899 68.0705 122.601 68.0479 122.578C68.0141 122.544 65.7582 113.923 65.7582 113.832C65.7582 113.798 65.2281 113.775 64.5852 113.775H63.4121L63.7956 115.046Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M83.4781 114.025C83.4217 114.172 82.4065 116.702 81.2222 119.663C80.0379 122.623 79.0679 125.085 79.0679 125.142C79.0679 125.198 79.5867 125.221 80.2071 125.21L81.3463 125.176L81.8651 123.78L82.3727 122.396H84.809H87.2454L87.7642 123.792L88.2831 125.176L89.4899 125.21L90.6968 125.244L90.5389 124.869C90.46 124.665 89.4335 122.079 88.2605 119.129L86.1287 113.775H84.8542C83.636 113.775 83.5683 113.787 83.4781 114.025ZM85.7114 118.211C86.1625 119.458 86.5122 120.502 86.4784 120.536C86.4558 120.559 85.6663 120.57 84.7414 120.559L83.0607 120.525L83.8954 118.222C84.3691 116.963 84.7752 115.931 84.8203 115.931C84.8654 115.931 85.2602 116.952 85.7114 118.211Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M91.3623 119.504V125.232H92.3774H93.3926V120.91V116.589L96.4718 120.876L99.5398 125.176L100.758 125.21L101.965 125.244V119.504V113.775H100.95H99.9346L99.912 118.052L99.8782 122.34L96.8328 118.052L93.7874 113.775H92.5805H91.3623V119.504Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M121.252 118.109C121.252 122.022 121.23 122.487 121.049 122.839C120.745 123.463 120.327 123.701 119.572 123.701C118.444 123.69 118.004 123.213 117.88 121.92L117.812 121.092L116.752 121.058L115.692 121.024L115.748 122.079C115.804 123.213 116.041 123.86 116.617 124.473C117.869 125.834 121.252 125.834 122.504 124.473C122.674 124.302 122.922 123.928 123.068 123.645C123.339 123.134 123.339 123.123 123.373 118.449L123.407 113.776H122.324H121.252V118.109Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M125.223 118.052C125.257 122.17 125.268 122.362 125.505 122.964C126.114 124.484 127.219 125.221 129.216 125.459C131.911 125.765 133.953 124.926 134.731 123.179C135.137 122.272 135.228 121.126 135.228 116.917L135.239 113.775H134.179H133.13L133.073 117.712C133.017 121.012 132.983 121.738 132.825 122.17C132.43 123.236 131.607 123.701 130.107 123.701C128.652 123.701 127.783 123.122 127.456 121.954C127.388 121.716 127.343 119.912 127.343 117.655V113.775H126.26H125.189L125.223 118.052Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M164.7 119.47L164.734 125.176L165.783 125.21L166.821 125.244V122.737V120.241H169.866H172.912V119.334V118.426H169.866H166.821V117.008V115.59H171.953H177.085V120.411V125.232H178.156H179.228V120.411V115.59H181.134C182.804 115.59 183.052 115.568 183.086 115.409C183.108 115.307 183.785 117.462 184.597 120.196L186.075 125.176H187.236H188.409L189.65 120.899C190.338 118.551 190.936 116.6 190.97 116.566C191.004 116.532 191.522 118.222 192.132 120.332C192.752 122.43 193.316 124.393 193.406 124.688L193.564 125.232H194.692C195.752 125.232 195.82 125.221 195.921 124.971C195.978 124.835 196.745 122.328 197.625 119.39C198.504 116.452 199.249 113.991 199.271 113.911C199.316 113.809 199.057 113.775 198.2 113.775H197.083L196.576 115.67C196.294 116.725 195.775 118.71 195.403 120.094C195.042 121.478 194.703 122.555 194.669 122.476C194.624 122.396 194.049 120.411 193.372 118.063L192.143 113.775H191.015H189.887L188.827 117.496C188.24 119.538 187.654 121.534 187.541 121.943L187.315 122.68L186.165 118.256L185.014 113.832L174.852 113.798L164.678 113.775L164.7 119.47Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M200.602 119.402C199.362 122.498 198.324 125.073 198.313 125.13C198.279 125.198 198.73 125.232 199.429 125.209L200.602 125.175L201.121 123.814L201.651 122.453L204.076 122.419L206.501 122.396L206.749 123.043C206.885 123.406 207.122 124.041 207.28 124.461L207.562 125.232H208.735C209.378 125.232 209.908 125.198 209.908 125.141C209.908 125.096 208.893 122.532 207.663 119.447L205.407 113.832L204.133 113.798L202.858 113.764L200.602 119.402ZM204.99 118.211L205.825 120.525L204.133 120.559C203.197 120.57 202.407 120.57 202.384 120.547C202.362 120.513 202.734 119.436 203.208 118.154C203.682 116.861 204.088 115.828 204.11 115.851C204.133 115.874 204.527 116.929 204.99 118.211Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M210.584 119.492V125.232H211.656H212.728V122.963V120.695H214.859C216.878 120.695 217.002 120.706 217.363 120.956C217.916 121.33 218.051 121.716 218.153 123.236C218.198 123.996 218.288 124.744 218.356 124.915L218.48 125.232H219.619C220.657 125.232 220.758 125.209 220.679 125.028C220.465 124.506 220.386 124.018 220.296 122.589C220.172 120.808 220.014 120.332 219.36 119.912L218.954 119.651L219.416 119.288C220.082 118.778 220.42 118.12 220.488 117.178C220.555 116.101 220.364 115.363 219.822 114.762C219.033 113.855 218.965 113.843 214.51 113.798L210.584 113.764V119.492ZM217.51 115.76C218.018 116.01 218.254 116.464 218.254 117.235C218.254 118.687 217.86 118.88 214.871 118.88H212.728V117.235V115.59H214.938C216.675 115.59 217.228 115.624 217.51 115.76Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M221.977 119.504V125.232H226.488H231V124.325V123.417H227.56H224.12V121.829V120.241H227.391H230.673L230.639 119.356L230.605 118.483L227.368 118.449L224.12 118.426V117.008V115.59H227.503H230.887V114.683V113.775H226.432H221.977V119.504Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M195.019 128.363C193.384 128.681 192.526 129.588 192.504 130.995C192.504 131.868 192.775 132.436 193.429 132.844C194.027 133.23 194.286 133.309 196.057 133.683C198.324 134.16 198.719 134.5 198.651 135.941C198.617 136.372 197.907 137.086 197.331 137.245C196.756 137.404 195.312 137.404 194.737 137.245C194.027 137.041 193.384 136.315 193.214 135.521L193.068 134.863L192.662 134.897C192.267 134.931 192.256 134.943 192.29 135.328C192.391 136.519 192.978 137.404 193.981 137.903C194.579 138.198 194.715 138.221 196.046 138.221C197.399 138.221 197.489 138.209 198.132 137.881C198.978 137.438 199.474 136.746 199.587 135.839C199.813 134.103 199.08 133.366 196.632 132.844C194.015 132.277 193.553 132.016 193.474 131.052C193.417 130.36 193.699 129.872 194.365 129.52C194.748 129.316 195.042 129.271 195.809 129.271C196.339 129.259 196.959 129.328 197.185 129.407C197.749 129.611 198.234 130.144 198.403 130.745C198.538 131.222 198.561 131.245 198.989 131.245H199.429L199.35 130.814C199.17 129.736 198.493 128.919 197.512 128.579C196.97 128.397 195.515 128.273 195.019 128.363Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M117.417 133.287V138.051H117.869H118.32L118.342 133.956L118.376 129.861L120.237 133.956L122.087 138.051H122.504H122.91L124.76 134.001L126.61 129.963L126.644 134.001L126.667 138.051H127.118H127.569V133.287V128.511L126.937 128.545L126.306 128.579L124.433 132.685C123.396 134.943 122.527 136.758 122.493 136.712C122.448 136.667 121.591 134.807 120.576 132.572L118.726 128.522H118.072H117.417V133.287Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M136.254 129.203V129.884H136.705H137.156V129.203V128.522H136.705H136.254V129.203Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M163.437 133.287V138.051H163.888H164.339V135.782V133.513H167.441H170.543V135.782V138.051H170.938H171.333V133.287V128.522H170.938H170.543L170.52 130.53L170.487 132.549L167.419 132.583L164.339 132.606V130.564V128.522H163.888H163.437V133.287Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M172.573 129.203V129.884H173.024H173.476V129.203V128.522H173.024H172.573V129.203Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M182.273 133.287V138.051H182.725H183.176V135.85C183.176 133.037 183.334 132.538 184.371 132.027C185.071 131.687 186.278 131.687 186.819 132.027C187.473 132.424 187.507 132.617 187.552 135.464L187.586 138.051H188.048H188.5L188.454 135.464C188.421 133.74 188.353 132.753 188.251 132.492C187.845 131.392 187.18 130.972 185.826 130.972C184.766 130.961 184.247 131.177 183.593 131.914L183.176 132.379V130.451V128.522H182.725H182.273V133.287Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M207.426 133.287V138.051H207.866H208.317L208.351 135.635L208.385 133.207L208.69 132.742C208.87 132.481 209.152 132.198 209.344 132.095C210.28 131.608 211.633 131.687 212.209 132.254C212.649 132.697 212.716 133.184 212.728 135.805V138.051H213.134H213.528L213.495 135.294L213.461 132.549L213.156 132.016C212.288 130.541 209.513 130.575 208.554 132.084L208.329 132.436V130.473V128.522H207.877H207.426V133.287Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M230.098 133.287V138.051H230.549H231V133.287V128.522H230.549H230.098V133.287Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M145.277 130.054V131.131H144.601H143.924V131.528V131.925H144.601H145.277V134.557C145.277 136.44 145.322 137.279 145.424 137.484C145.65 137.937 146.236 138.176 147.082 138.142L147.815 138.108L147.849 137.699L147.883 137.291L147.285 137.348C146.8 137.382 146.631 137.348 146.405 137.166L146.123 136.939L146.089 134.432L146.056 131.925H146.958H147.872V131.528V131.131H146.969H146.067V130.054V128.976H145.672H145.277V130.054Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M131.122 131.006C129.464 131.449 128.471 133.014 128.618 134.931C128.764 136.928 129.847 138.108 131.663 138.244C133.152 138.357 134.438 137.711 135.013 136.565C135.318 135.964 135.295 135.896 134.821 135.896C134.438 135.907 134.37 135.952 134.156 136.383C133.615 137.506 131.72 137.824 130.49 137.007C130.062 136.712 129.486 135.691 129.486 135.192V134.875H132.487H135.498L135.419 134.217C135.194 132.186 134.1 131.075 132.216 130.961C131.799 130.938 131.314 130.95 131.122 131.006ZM133.062 131.937C133.66 132.13 134.303 132.946 134.517 133.797L134.585 134.081H132.035C130.637 134.081 129.486 134.047 129.486 133.99C129.486 133.661 129.78 132.992 130.073 132.651C130.806 131.812 131.832 131.562 133.062 131.937Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M139.604 131.063C138.363 131.415 137.72 132.708 138.239 133.797C138.544 134.455 139.153 134.693 141.318 135.033C142.649 135.237 142.954 135.442 142.999 136.145C143.021 136.542 142.976 136.701 142.762 136.939C142.243 137.495 140.405 137.642 139.469 137.2C139.141 137.03 138.848 136.633 138.69 136.088C138.623 135.861 137.833 135.805 137.833 136.032C137.833 136.803 138.465 137.688 139.22 137.994C140.269 138.425 142.254 138.312 143.044 137.79C143.811 137.279 144.138 136.043 143.721 135.215C143.461 134.682 142.818 134.375 141.465 134.137C139.299 133.763 138.961 133.593 138.961 132.889C138.961 132.129 139.525 131.778 140.777 131.789C141.724 131.789 142.176 131.959 142.559 132.447C142.694 132.617 142.796 132.844 142.796 132.957C142.796 133.128 142.886 133.173 143.247 133.173C143.495 133.173 143.698 133.162 143.698 133.139C143.698 133.116 143.619 132.844 143.529 132.538C143.236 131.517 142.435 131.029 140.991 130.95C140.484 130.927 139.931 130.972 139.604 131.063Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M150.804 131.052C149.169 131.517 148.357 132.832 148.458 134.874C148.56 137.132 149.924 138.402 152.068 138.255C153.41 138.153 154.459 137.438 154.921 136.315L155.09 135.895H154.651C154.278 135.895 154.199 135.941 154.075 136.236C153.996 136.428 153.771 136.723 153.556 136.905C152.914 137.483 151.402 137.631 150.579 137.2C149.958 136.871 149.428 136.077 149.304 135.294L149.236 134.874H152.237H155.237L155.181 134.069C155.079 132.651 154.233 131.46 153.083 131.131C152.395 130.927 151.346 130.893 150.804 131.052ZM153.083 132.05C153.602 132.311 154.053 132.889 154.244 133.57L154.402 134.08H151.819H149.236L149.383 133.581C149.473 133.298 149.643 132.923 149.778 132.73C150.432 131.8 151.966 131.494 153.083 132.05Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M158.542 131.063C158.023 131.256 157.515 131.721 157.233 132.266L157.019 132.663L157.008 131.891V131.131H156.557H156.105V134.591V138.051H156.557H157.008V135.861C157.008 133.695 157.008 133.661 157.324 133.048C157.718 132.266 158.316 131.925 159.298 131.925H159.952L159.918 131.438C159.884 130.972 159.873 130.961 159.433 130.938C159.185 130.916 158.79 130.984 158.542 131.063Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M176.611 131.052C174.998 131.517 174.175 132.867 174.288 134.852C174.401 136.78 175.461 137.903 177.266 138.028C178.348 138.096 179.104 137.846 179.758 137.189L180.243 136.701V137.631C180.232 139.366 179.589 140.104 178.021 140.183C176.42 140.274 175.72 139.99 175.45 139.174C175.337 138.833 175.258 138.788 174.897 138.754C174.513 138.72 174.48 138.743 174.536 138.947C174.57 139.083 174.637 139.298 174.671 139.435C174.818 139.934 175.213 140.353 175.833 140.648C176.386 140.909 176.6 140.943 177.649 140.943C178.642 140.943 178.924 140.898 179.431 140.671C180.13 140.353 180.819 139.616 181.01 138.981C181.101 138.675 181.146 137.336 181.146 134.829V131.12L180.728 131.154C180.3 131.188 180.3 131.188 180.266 131.721L180.232 132.254L179.871 131.846C179.668 131.619 179.296 131.335 179.036 131.222C178.405 130.938 177.277 130.87 176.611 131.052ZM179.003 132.084C180.762 132.957 180.74 135.997 178.98 136.939C178.597 137.143 178.315 137.2 177.649 137.2C176.499 137.189 175.878 136.848 175.45 135.952C175.179 135.396 175.145 135.237 175.179 134.319C175.224 133.411 175.258 133.252 175.562 132.821C176.318 131.744 177.717 131.449 179.003 132.084Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M202.463 131.052C201.358 131.369 200.625 132.073 200.253 133.196C199.982 134.012 200.072 135.771 200.41 136.429C200.997 137.563 201.888 138.141 203.208 138.255C204.866 138.38 206.208 137.438 206.58 135.861C206.659 135.566 206.637 135.555 206.264 135.555C205.903 135.555 205.847 135.6 205.576 136.179C205.215 136.905 204.843 137.211 204.054 137.393C202.08 137.846 200.58 136.145 200.986 133.899C201.268 132.345 202.497 131.528 204.088 131.823C204.787 131.948 205.294 132.334 205.565 132.935C205.746 133.366 205.802 133.4 206.197 133.4C206.603 133.4 206.614 133.388 206.535 133.082C206.287 132.243 205.655 131.505 204.9 131.188C204.313 130.938 203.095 130.87 202.463 131.052Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M217.093 131.017C216.393 131.199 215.829 131.551 215.344 132.095C214.758 132.776 214.498 133.524 214.51 134.636C214.521 136.735 215.728 138.107 217.702 138.255C219.258 138.368 220.409 137.733 221.074 136.417C221.435 135.691 221.469 135.543 221.458 134.602C221.458 133.74 221.413 133.468 221.176 132.946C220.781 132.084 220.375 131.641 219.687 131.312C219.021 130.983 217.792 130.847 217.093 131.017ZM219.236 132.038C220.713 132.685 221.097 135.351 219.901 136.666C219.202 137.449 217.69 137.676 216.698 137.166C215.389 136.474 214.938 134.454 215.773 132.98C216.438 131.823 217.837 131.437 219.236 132.038Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M224.661 131.052C222.732 131.607 221.751 133.729 222.428 135.918C222.698 136.803 223.262 137.495 224.052 137.914C224.56 138.175 224.751 138.209 225.699 138.209C226.432 138.209 226.894 138.153 227.176 138.028C227.785 137.756 228.496 137.064 228.834 136.417C229.105 135.895 229.139 135.725 229.139 134.647C229.139 133.264 228.902 132.583 228.203 131.891C227.379 131.086 225.845 130.723 224.661 131.052ZM226.782 131.936C227.221 132.073 227.898 132.764 228.135 133.343C228.44 134.08 228.383 135.305 228.011 136.077C227.244 137.654 224.966 137.96 223.815 136.644C223.285 136.043 223.105 135.498 223.105 134.523C223.116 132.435 224.717 131.312 226.782 131.936Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M136.254 134.591V138.051H136.705H137.156V134.591V131.131H136.705H136.254V134.591Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
            <path
              d="M172.573 134.591V138.051H173.024H173.476V134.591V131.131H173.024H172.573V134.591Z"
              fill="#475569"
              fillOpacity="0.2"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2582_13103">
              <rect width="231" height="141" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
        <Box>
          <LegalInfo>
            <CopyrightNotice>
              ©2024 Copyright 광주소프트웨어마이스터고등학교&nbsp;&nbsp;ALL
              RIGHTS RESERVED.
            </CopyrightNotice>
            <LinkBox>
              <StyledLink href="https://official.hellogsm.kr/policy/privacy">
                개인정보처리방침
              </StyledLink>
              <StyledLink href="https://official.hellogsm.kr/policy/cctv">
                영상정보처리기기운영·관리방침
              </StyledLink>
              <StyledLink href="https://official.hellogsm.kr/policy/copyright">
                저작권신고 및 보호규정
              </StyledLink>
              <StyledLink href="https://official.hellogsm.kr/about/location">
                찾아오시는 길
              </StyledLink>
            </LinkBox>
          </LegalInfo>
          <ContactInfo>
            우) 62423 광주광역시 광산구 상무대로 312
            <br /> 교무실 062)949-6800(08:30~16:30) 행정실
            062)949-6806(08:30~16:30) <br />
            팩스 062)949-6877 당직실 062)949-6899(평일야간, 휴일)
          </ContactInfo>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default Footer;
