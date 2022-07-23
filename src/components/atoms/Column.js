import styled from 'styled-components'

export default styled.div`
	padding: 0;
	display: flex;
	flex-grow: 1;
	flex-direction: ${ ( { direction } ) => direction || 'column' };
	width: ${ ( { width } ) => width || '100%' };
	height: ${ ( { height } ) => height || 'initial' };
	max-width: 100%;
	flex-wrap: wrap;
	align-items: ${ ( { align } ) => align || 'flex-start' };
	justify-content: ${ ( { justify } ) => justify || 'center' };
`