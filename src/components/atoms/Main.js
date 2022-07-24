import styled from 'styled-components'

export default styled.main`
	flex-grow: 1;
	min-height: calc( 100vh - 140px );
	width: 100%;
	display: flex;
	flex-direction: ${ ( { direction } ) => direction || 'column' };
	width: ${ ( { width } ) => width || '100%' };
	max-width: var(--wrapper-size);
	margin: var(--header-height) auto 0 auto;
	flex-wrap: wrap;
	align-items: ${ ( { align } ) => align || 'center' };
	justify-content: ${ ( { justify } ) => justify || 'center' };
	& section {
		@media screen and ( max-width: 768px ) {
			width: 100%;
			margin-top: 0;
			margin-bottom: 0;
			apdding-bottom: 0;
		}
	}
	
	
`