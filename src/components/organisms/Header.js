import React from "react"

import styled from "styled-components"

import Highlighter from "../atoms/Highlighter"

import { Text } from '../atoms/Text'

import { NavbarContainer, NavbarLinkContainer, NavbarLink } from '../atoms/Navbar'

const Menu = styled.header`
	position: absolute;
	top: 0;
	left: 0;
    right: 0;
    max-width: 1040px;
	padding: 0 1rem;
    margin: 0 auto;
	& a {
		margin: 0;
        font-weight: 600;
	}
    height:90px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export default ( { ...props } ) => <Menu>
    <NavbarLink className="nav-link" to="/">
        <Highlighter text='pasteblock' highlight='paste'/>
    </NavbarLink>
</Menu>