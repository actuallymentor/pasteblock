import React from "react"

import styled from "styled-components"

import { NavbarContainer, NavbarLinkContainer, NavbarLink } from '../atoms/Navbar'

const Menu = styled.header`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	padding: 0;
	& a {
		padding: 0 1rem;
	}
`

export default ( { ...props } ) => <Menu>
	
    <NavbarContainer>
        <NavbarLinkContainer>
            <NavbarLink className="nav-link" to="/">
              Home
            </NavbarLink>
            <NavbarLink className="nav-link" to="/upload">
                Upload
            </NavbarLink>
        </NavbarLinkContainer>
    </NavbarContainer>

</Menu>