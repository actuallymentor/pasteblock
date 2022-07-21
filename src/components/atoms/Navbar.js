import { Link } from "react-router-dom"
import styled from "styled-components"

export const NavbarContainer= styled.nav`
    display: flex;
    flex-direction: column;
`

export const NavbarLinkContainer = styled.div`
    display: flex;
`

export const NavbarLink = styled(Link)`
    color:white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
    &:hover, &:focus {
        color: grey;
    }
    &:active {
        color: red;
    };
`