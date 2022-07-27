const { Web3Storage, File } = require( 'web3.storage' )
const { Buffer } = require( 'buffer' )
const functions = require( 'firebase-functions' )
const { web3 } = functions.config()
const client = new Web3Storage( { token: web3.storage_api_token } )
const { log } = require( './helpers' )
const { db } = require( './firebase' )

exports.upload_file_to_web3 = async function( data, context ) {

    try {
        const { data_string, name } = data
        log( `Upload requested for ${ data_string.length } length string.` )

        // Create blob out of string
        const file = new File( [ data_string ], name )
        const size_in_bytes = Buffer.byteLength( data_string, 'uft8' )
        log( `file: `, file )

        // Store files to web3
        const root_cid = await client.put( [ file ], {
            name: `${ Date.now() }_blockpaste_${ name }_${ new Date().toString() }`,
            maxRetries: 3
        } )
        log( `Upload success, root CID: `, root_cid )

        // Retreive file references based on root cid
        const cid_response = await client.get( root_cid )

        // Get files from response
        const stored_files = await cid_response.files()
        log( `Files stored on web3: `, stored_files )

        // Get the first and only uploaded file
        const [ uploaded_file ] = stored_files

        // Return file outputs to frontend
        const { cid } = uploaded_file
        const readable_data = {
            cid,
            name,
            ipfs_url: `https://${ cid }.ipfs.dweb.link`,
            blockpaste_url: `https://pasteblock.app/#/view/${ cid }`,
            size_in_bytes
        }
        log( `Readable format: `, readable_data )

        // Save addresses for POAP distribution
        const address_or_ens_regex = /(0x[a-zA-Z0-9]{40})|(\w*\.eth)/i
        const match = data_string.match( address_or_ens_regex )
        if( match ) {
            const [ address ] = match
            await db.collection( 'poaps' ).doc( address.toLowerCase() ).set( { updated: Date.now(), updated_human: new Date().toString() } )
        }

        // Save metadata
        await db.collection( `pastes` ).doc( cid ).set( { ...readable_data, updated: Date.now(), updated_human: new Date().toString() }, { merge: true } )

        return readable_data

    } catch( e ) {
        log( `upload_file_to_web3 error: `, e )
        return { error: e.message }
    }

}
