import styled from 'styled-components'

export const Ul = styled.ul`
	list-style-type: none;
    padding-left: 0;
`

export const Li = styled.li`
	font-size: 1rem;
	color: ${ ( { theme } ) => theme.colors.text };
	div {
		font-size: .6rem;
	}
	span {
		font-size: .3rem;
	}
`

