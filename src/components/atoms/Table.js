import styled from "styled-components"

export const Table= styled.table`
    width: 100%;
`

export const Row = styled.tr`
    
`

export const Th = styled.th`
    color: ${ ( { theme } ) => theme.colors.text };
    padding: .35rem .3rem;
    font-size: .9em;
    text-align: left;
`

export const Td = styled.td`
    color:  ${ ( { theme } ) => theme.colors.text };
    padding: .35rem .3rem;
    font-size: .9em;
    border-bottom: 1px solid #D9DBE9;
    & a {
        font-size: .9em;

        & img {
            margin-left: 10px;
        }
    }
`

