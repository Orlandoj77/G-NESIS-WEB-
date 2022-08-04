import { FaBars } from 'react-icons/fa';
import styled, { css } from 'styled-components';

interface Props {
  menuOpen: boolean;
}

export const Nav = styled.nav`
  height: 60px;
  padding: none;
  box-shadow: 1px 4px 5px #6F7082;
  display: flex;
  justify-content: space-between;
  z-index: 10;
`;

export const NavLink = styled.a`
  color:#0000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #FF5950;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;



export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
    ${({ menuOpen }: Props) =>
      menuOpen &&
      css`
        display: flex;
     
      `}
  }
`;

export const NavBtnLink = styled.button`
  background: #FF5950;
  width: 160px;
  height: 60%;
  padding: 5px 22px;
  color: #fff;
 border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
 border:none;
  text-align: center;
  :hover {
    transition: all 0.2s ease-in-out;
    background: #09093C;
    color: #ffff;
  }
`;