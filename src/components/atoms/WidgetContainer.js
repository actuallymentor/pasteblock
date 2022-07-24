import styled from "styled-components"

export const WidgetContainer= styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const PasteItem= styled.li`
    color: ${ ( { theme } ) => theme.colors.text };
    border-bottom: 1px solid ${ ( { theme } ) => theme.colors.areaborder };
    margin: .25rem 0;
    a {
        font-size: .9em;
    }
    div {
        font-size: .6rem;
        margin-bottom: .5rem;
    }
    span {
        font-size: .3rem;
    }
`