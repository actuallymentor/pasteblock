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
    margin: 10px;
    color: ${ ( { theme } ) => theme.colors.text };
    font-size: 1.125rem;
    text-decoration: none;
    &:hover, &:focus {
        color: ${ ( { theme } ) => theme.colors.btn_bg_h };
    }
    &:active {
        color: ${ ( { theme } ) => theme.colors.btn_bg_a };
    };
`
