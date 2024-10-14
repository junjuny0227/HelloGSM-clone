import PropTypes from "prop-types";
import Header from "./header";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
