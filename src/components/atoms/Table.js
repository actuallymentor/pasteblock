import styled from "styled-components"

export const Table= styled.table`
    width: 100%;
`

export const TableHead = styled.thead`
    
`

export const TableBody = styled.tbody`
    
`

export const Row = styled.tr`
    
`

export const Th = styled.th`
    color: ${ ( { theme } ) => theme.colors.text };
    padding: .35rem .3rem;
    font-size: .9rem;
    text-align: left;
`

export const Td = styled.td`
    color:  ${ ( { theme } ) => theme.colors.text };
    padding: .35rem .3rem;
    font-size: .9em;
    border-bottom: 1px solid ${ ( { theme } ) => theme.colors.areaborder };
    & a {
        font-size: 1em;

        & img {
            margin-left: 10px;
        }
    }
`

