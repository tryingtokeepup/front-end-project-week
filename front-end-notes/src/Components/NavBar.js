import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import './NavBar.css';


const CoolNavBar = styled.div`
  border: 1px solid black;
  padding: 10px;
  width: 25%;
  font-size: 2rem;
  
  display: flex;
  flex-direction: column;
  color: dark grey;
  background: #D3D2D3;
`;

const Header = styled.div`
font-size: 6rem;
font-weight: bold;
line-height: 50px;
`;



const NavBar = props => {
  return (
    <CoolNavBar>
      <Header>Lambda Notes</Header>
      <NavLink className="NavLink" to="/notes">View Your Notes</NavLink>
      <br></br>
      <NavLink className="NavLink" to='/createNote'> + Create a Note! </NavLink>
    </CoolNavBar>
  );
};

export default NavBar;
