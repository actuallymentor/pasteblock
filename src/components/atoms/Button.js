import styled from 'styled-components'

export default styled.button`
	padding:  .5rem 1.25rem;
	margin: ${ ( { margin } ) => margin || '.5rem' };
	border: 2px solid ${ ( { color='text', theme } ) => theme.colors[ color ] || color };
	color: ${ ( { color='text', theme } ) => theme.colors[ color ] || color };
	font-size: 1rem;
	background: ${ ( { background='none' } ) => background };
	border-radius: 5px;
	&:hover {
		cursor: pointer;
	}
`