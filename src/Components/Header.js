// import React from 'react' // we don't need this soalnya udah diimport di apnya
import PropTypes from "prop-types";
import React from "react";

const Header = ({ title }) => {
  return (
    <header>
      <header style={headingStyle}>{title}</header>
      <header>NANI</header>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

const headingStyle = {
  color: "#FFFFFF",
  backgroundColor: "black",
};
export default Header;
