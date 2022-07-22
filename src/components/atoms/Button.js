import styled from 'styled-components'

export default styled.button`
	padding:  .625rem .625rem;
	margin: ${ ( { margin } ) => margin || '0' };
	border: ${ ( { color='text', theme } ) => theme.colors[ color ] || '2px solid grey' };
	color: ${ ( { color='text', theme } ) => theme.colors[ color ] || 'var(--color-btn-text);' };
	font-size: 1em;
	font-weight: 600;
	background: ${ ( { background='none' } ) => 'var(--color-btn-bg);' };
	border-radius: 6px;
	&:hover {
		cursor: pointer;
	}
`