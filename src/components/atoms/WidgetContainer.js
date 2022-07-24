import styled from "styled-components"

export const WidgetContainer= styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;

    ul {
        margin-top: 0;
    }

    li a {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export const TitleContainer= styled.div`
    display: flex;
    width: 100%;
    margin: .25rem 0;
    img {
        margin-left: 5px;
    }
`

export const InfoContainer= styled.div`
    font-size: .6rem;
    margin-bottom: .5rem;
    margin: .25rem 0;
`

export const PasteItem= styled.li`
    color: ${ ( { theme } ) => theme.colors.text };
    border-bottom: 1px solid ${ ( { theme } ) => theme.colors.areaborder };
    margin: .25rem 0;
    a {
        font-size: .9em;
    }
    span {
        font-size: .3rem;
    }
`