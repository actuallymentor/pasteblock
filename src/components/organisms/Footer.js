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
    text-align: center;
	& a {
		padding: 0 1rem;
	}
    & p {
		font-size: .5rem;
	}
    height:50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export default ( { ...props } ) => <Footer>

	<Text>
        Created with love during HackFS 2022
    </Text>

</Footer>