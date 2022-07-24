import styled from 'styled-components'

export default styled.textarea`
	color: ${ ( { theme } ) => theme.colors.textarea };
	background: ${ ( { theme } ) => theme.colors.textareabg };
	width: ${ ( { width } ) => width || '100%' };
	min-height: 300px;
	min-width: 100%;
	padding: .5rem .75rem;
	border: 1px solid ${ ( { theme } ) => theme.colors.areaborder };
	border-radius: ${ ( { radius } ) => radius || '6px' };
	

	:focus-visible, :hover {
		outline: 1px solid ${ ( { theme } ) => theme.colors.highlight };
		filter: drop-shadow(0px 0px 16px rgba(86, 102, 246, 0.25));
	}

`
