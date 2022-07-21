import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    body {
        margin: 0;
        font-family: 'Fira Code', 'Helvetica Neue', sans-serif;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: var(--color-background);
        --color-background: #FFFFFF;
        --color-text: #1F2023;
    }
    @media (prefers-color-scheme: dark) {
        body {
            --color-background: #161616;
            --color-text: #EFEFEF;
        }
    }

    html {
        font-size: calc( 18px + .1vw );
    }

`