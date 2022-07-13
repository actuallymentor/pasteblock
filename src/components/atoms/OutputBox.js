import styled from 'styled-components'

export default styled.div`
    display: block;
    padding: ${ ( { padding } ) => padding || '16px' };
    margin: ${ ( { margin } ) => margin || '0' };
    background:#222;
    font-family: Courier New, ui-monospace, monospace;
    border: 1px solid #525252;
    box-shadow: 0px 5px 20px rgb(0 0 0 / 30%);
    height: ${ ( { height } ) => height || '100%' };
    width: ${ ( { width } ) => width || '100%' };
    max-height: ${ ( { maxHeight } ) => maxHeight || '100%' };
    overflow-y: scroll;
`