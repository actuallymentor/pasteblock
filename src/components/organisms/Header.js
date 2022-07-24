import React from "react"
import { useNavigate } from 'react-router-dom'

import styled from "styled-components"

import Button from "../atoms/Button"
import Highlighter from "../atoms/Highlighter"


import { NavbarContainer, NavbarLinkContainer, NavbarLink } from '../atoms/Navbar'

const Menu = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    max-width: var(--wrapper-size);
    padding: 0 1rem;
    margin: 0 auto;
    & a {
        margin: 0;
        font-weight: 600;
    }
    height: var(--header-height);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`


export default function Header() {

    const navigate = useNavigate()
    
    const HomeNavigate = () => {
        navigate('/');
    } 

    return (
        <Menu>
            <NavbarLink className="nav-link" to="/">
                <Highlighter text='pasteblock' highlight='paste'/>
            </NavbarLink>

            <Button onClick={ HomeNavigate }>
                + New Block
            </Button>

        </Menu>
    );
}