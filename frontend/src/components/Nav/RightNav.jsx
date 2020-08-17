import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #e87a13;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to="/">
        <li> गीता सार</li>
      </Link>
      <Link to="/chapters">
      <li>गीता पढ़े </li>
      </Link>
      <li> पसंदीदा श्लोक </li>
      <li>आपकी प्रगति </li>
      <li>नया वीडियो </li>
      <li>चालीसा </li>
      <li>आरती संग्रह </li>
      <li>हम कौन हैं ? </li>
      <li>सुझाव दें </li>
      <li>Sign In</li>
      <li>Sign Up</li>
    </Ul>
  );
};

export default RightNav;
