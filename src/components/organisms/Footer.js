import React from "react"

import styled from "styled-components"


import { Text } from '../atoms/Text'

import { NavbarContainer, NavbarLinkContainer, NavbarLink } from '../atoms/Navbar'

const Footer = styled.footer`
	position: absolute;
	bottom: 0;
	left: 0;
    right: 0;
	width: 100%;
    max-width: 1040px;
	padding: 0;
    margin: 0 auto;
	& a {
		padding: 0 1rem;
	}
    height:50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #000;
`

export default ( { ...props } ) => <Footer>

	<Text>
        Created with love during HackFS 2022
    </Text>

</Footer>