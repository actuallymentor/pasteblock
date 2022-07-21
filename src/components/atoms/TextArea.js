import styled from 'styled-components'

export default styled.textarea`
	color: var(--color-textarea);
	background: var(--color-textareabg);
	width: ${ ( { width } ) => width || '100%' };
	min-height: 300px;
	padding: .5rem .75rem;

	border: 1px solid var(--color-areaborder);
	border-radius: ${ ( { radius } ) => radius || '6px' };

	:focus-visible {
		outline: 1px solid var(--color-highlight);
	}

`
