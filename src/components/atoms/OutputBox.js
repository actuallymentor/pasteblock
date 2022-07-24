import styled from 'styled-components'

export const OutputHead = styled.div`
    display: block;
    padding: ${ ( { padding } ) => padding || '16px' };
    margin: ${ ( { margin } ) => margin || '0' };
    color: ${ ( { theme } ) => theme.colors.output_text };
    background: ${ ( { theme } ) => theme.colors.output_bg };
    border-radius: 6px 6px 0px 0px;
    font-family: Courier New, ui-monospace, monospace;
    border: 1px solid #525252;
    box-shadow: 0px 5px 20px rgb(0 0 0 / 30%);
    height: ${ ( { height } ) => height || '100%' };
    width: ${ ( { width } ) => width || '100%' };
    max-height: ${ ( { maxHeight } ) => maxHeight || '100%' };
    overflow-y: scroll;
`

export const OutputContainer = styled.div`
    width: 100%;

    pre {
        border-radius: 0px 0px 6px 6px;
        margin: 0;
        width: 100%;
        min-height: 50vh;
        background: ${ ( { theme } ) => theme.colors.output_bg };
        border: 1px solid #525252;
        border-top: 0px;
    }

    code  {
        margin: 0;
        width: 100%;
        min-height: 50vh;
        
        span {
            font-size: .7rem;
        }
    }
`