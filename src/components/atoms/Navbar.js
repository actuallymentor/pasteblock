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
    color: var(--color-text);
    font-size: 1.125rem;
    text-decoration: none;
    &:hover, &:focus {
        color: var(--color-btn-bg-h);
    }
    &:active {
        color: var(--color-btn-bg-a);
    };
`
