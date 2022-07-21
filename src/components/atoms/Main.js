import styled from 'styled-components'

export default styled.main`
	flex-grow: 1;
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: ${ ( { direction } ) => direction || 'column' };
	width: ${ ( { width } ) => width || '100%' };
	max-width: 1040px;
	margin: 90px auto 0 auto;
	flex-wrap: wrap;
	align-items: ${ ( { align } ) => align || 'center' };
	justify-content: ${ ( { justify } ) => justify || 'center' };
`