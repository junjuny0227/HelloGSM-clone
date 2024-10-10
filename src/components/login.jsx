import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Container = styled.div`
  width: fit-content;
  padding: 8px 10px;
`;

function Login({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <Wrapper onClick={onClose}>
      <Container></Container>
    </Wrapper>
  );
}

Login.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Login;
