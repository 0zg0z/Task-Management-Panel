// components/Navbar/index.js

import React from "react";
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #3bb2b0;
    height: 85px;
    display: flex;
    justify-content: space-between;
    padding: 0;
    z-index: 12;
`;

export const NavLink = styled(Link)`
    color: #ece3e3;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #e0e2dc;
    }
`;

export const NavLogo = styled(Link)`
    color: #dddddd;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #dfe0dd;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #f9f5f5;
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

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #f3f0f0;
    padding: 10px 22px;
    color: #3bb2b0;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #808080;
    }
`;

const Navbar = () => {
    return (
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLogo to="/">TODOlist</NavLogo>
                    <NavLink to="/taskPanel">Tasks</NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/profile">profile</NavBtnLink>
                </NavBtn>
            </Nav>
    );
};

export default Navbar;