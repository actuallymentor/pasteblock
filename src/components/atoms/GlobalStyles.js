import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box
    }

    body {
        margin: 0;
        font-family: 'Fira Code', 'Helvetica Neue', sans-serif;
        font-size: 16px;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: var(--color-background);
        --color-background: #FFFFFF;
        --color-text: #1F2023;
        --color-textarea: ;
        --color-textareabg: #FFFFFF;
        --color-areaborder: #D9DBE9;
        --color-highlight: #5666F6;
        --color-btn-bg: #5FC5A6;
        --color-btn-bg-h: #45B090;
        --color-btn-bg-a: #33D6A4;
        --color-btn-text: #FFFFFF;
        --wrapper-size: 1040px;
        --header-height: 90px;
    }
    @media (prefers-color-scheme: dark) {
        body {
            --color-background: #161616;
            --color-text: #EFEFEF;
            --color-textarea: #999999;
            --color-textareabg: #202020;
            --color-areaborder: #2B2B2B;
            --color-highlight: #5666F6;
        }
    }

    html {
        font-size: calc( 18px + .1vw );
    }

    select, input, button, span, ul, li {
        font-size: 1em;
        font-family: 'Fira Code', 'Helvetica Neue', sans-serif;
    }

    mark {
        color: white;
        background-color: var(--color-highlight);
        line-height: 1.2;
    }

`