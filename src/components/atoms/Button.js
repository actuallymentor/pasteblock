import styled from 'styled-components'

export const Button = styled.button`
	padding:  .5rem .625rem;
	margin: ${ ( { margin } ) => margin || '.5rem 0' };
	border: 2px solid ${ ( { theme } ) => theme.colors.btn_bg };
	color: ${ ( { theme } ) => theme.colors.btn_text };
	font-size: 1em;
	font-weight: 600;
	background: ${ ( { theme } ) => theme.colors.btn_bg };
	border-radius: ${ ( { radius } ) => radius || '6px' };
	&:hover {
		cursor: pointer;
		background: ${ ( { theme } ) => theme.colors.btn_bg_h };
		border: 2px solid ${ ( { theme } ) => theme.colors.btn_bg_h };
	}
	&:active {
		background: ${ ( { theme } ) => theme.colors.btn_bg_a };
		border: 2px solid ${ ( { theme } ) => theme.colors.btn_bg_a };
	}
`

export const AltButton = styled.button`
	padding:  .5rem .625rem;
	margin: ${ ( { margin } ) => margin || '.5rem 0' };
	border: 2px solid ${ ( { theme } ) => theme.colors.btn_alt_text };
	color: ${ ( { theme } ) => theme.colors.btn_alt_text };
	font-size: 1em;
	font-weight: 600;
	background: ${ ( { theme } ) => theme.colors.btn_alt_bg };
	border-radius: ${ ( { radius } ) => radius || '6px' };
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