// ///////////////////////////////
// Development helpers
// ///////////////////////////////
export const dev = process.env.NODE_ENV === 'development' || ( typeof location !== 'undefined' && ( location.href?.includes( 'debug=true' ) || location.href?.includes( 'localhost' ) ) )

export const log = ( ...messages ) => {
	if( dev ) console.log( ...messages )
}

// ///////////////////////////////
// Visual
// ///////////////////////////////

export const wait = ( time, error=false ) => new Promise( ( res, rej ) => setTimeout( error ? rej : res, time ) )