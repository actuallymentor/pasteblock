import styled from 'styled-components'
import Input from '../atoms/Input'

export const OutputHead = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: ${ ( { padding } ) => padding || '.5rem' };
    margin: ${ ( { margin } ) => margin || '0' };
    color: ${ ( { theme } ) => theme.colors.output_text };
    background: ${ ( { theme } ) => theme.colors.output_bg };
    border-radius: 6px 6px 0px 0px;
    border: 1px solid ${ ( { theme } ) => theme.colors.output_border };
    box-shadow: 0px 5px 20px rgb(0 0 0 / 30%);
    height: ${ ( { height } ) => height || '60px' };
    width: ${ ( { width } ) => width || '100%' };
    max-height: ${ ( { maxHeight } ) => maxHeight || '100%' };
    overflow-y: scroll;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        p {
            color: ${ ( { theme } ) => theme.colors.output_size };
            font-size: .6rem;
            margin-left: .5rem;
        }
    }
`

export const OutputContainer = styled.div`
    width: 100%;

    pre {
        border-radius: 0px 0px 6px 6px;
        margin: 0;
        width: 100%;
        min-height: 50vh;
        background: ${ ( { theme } ) => theme.colors.output_bg };
        border: 1px solid ${ ( { theme } ) => theme.colors.output_border };
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

export const OutputLanguage = styled(Input)`
    margin: 0 1rem;
    font-size: .75rem;
`

export const OutputButton = styled.button`
	padding:  .4rem;
	margin: ${ ( { margin } ) => margin || '0 .25rem' };
	font-size: .75em;
	/* font-weight: 600; */
    color: ${ ( { theme } ) => theme.colors.btn_output_text };
	background: ${ ( { theme } ) => theme.colors.btn_output_bg };
    border: 0px solid ${ ( { theme } ) => theme.colors.btn_alt_text };
	border-radius: ${ ( { radius } ) => radius || '2px' };
	&:hover {
		cursor: pointer;
		color: ${ ( { theme } ) => theme.colors.btn_text };
		background: ${ ( { theme } ) => theme.colors.btn_bg_h };
	}
	&:active {
		color: ${ ( { theme } ) => theme.colors.btn_text };
		background: ${ ( { theme } ) => theme.colors.btn_bg_a };
	}
`