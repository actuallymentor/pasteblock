import { useEffect, useState } from "react"
import { listen_to_document, listen_to_documents } from "../modules/firebase"
import { log } from "../modules/helpers"

const get_text_content_of_url = url => fetch( url ).then( response => response.text() )

/**
* Listen to recent pastes
* @param {number} limit - Maximum amount of pastes to listen to
* @returns {Object[]} paste[] - Structure of a Paste object as received from firestore
* @property {String} paste.cid - The IPFS cid of this paste
* @property {String} paste.name - The user-specified name of this paste
* @property {String} paste.ipfs_url - The web2 url where this paste can be loaded from
* @property {String} paste.blockpaste_url - The local url of this paste
* @property {Number} paste.updated - The timestamp at which this paste was last updated
* @property {String} paste.updated_human - The human readable timestamp at which this paste was updated
* @property {Function} paste.get - Asynchronous function that gets the text content from the ipfs_url
*/
export function useRecentPastes( limit=5 ) {

    const [ pastes, set_pastes ] = useState( [] )

    useEffect( () => {

        log( `Setting listener for ${ limit } most recent pastes` )

        return listen_to_documents( 'pastes', limit, pastes => {

            // Add a "get content" method on the pastes
            const pastes_with_getter = pastes.map( paste => ( { 
                ...paste, 
                get: async () => get_text_content_of_url( paste.ipfs_url )
            } ) )
            set_pastes( pastes_with_getter )

        } )

    }, [ limit ] )

    log( `useRecentPastes hook updated: `, pastes )
    return pastes

}

/**
* Listen to single paste
* @param {string} cid - The cid of the paste (which is also our internal reference)
* @param {Boolean} metadata_only - whether to load only the metadata or also the content, setting to false will load the paste content too
* @returns {Object} paste - Structure of a Paste object as received from firestore
* @property {String} paste.cid - The IPFS cid of this paste
* @property {String} paste.name - The user-specified name of this paste
* @property {String} paste.ipfs_url - The web2 url where this paste can be loaded from
* @property {String} paste.blockpaste_url - The local url of this paste
* @property {Number} paste.updated - The timestamp at which this paste was last updated
* @property {String} paste.updated_human - The human readable timestamp at which this paste was updated
* @property {Function} paste.get - Asynchronous function that gets the text content from the ipfs_url
*/
export function usePaste( cid, metadata_only=true ) {

    const [ paste, set_paste] = useState(  )

    useEffect( () => {

        log( `Listener requested for pastes/${ cid }` )
        return listen_to_document( 'pastes', cid, paste => {

            const paste_with_getter = ( { 
                ...paste, 
                get: async () => get_text_content_of_url( paste.ipfs_url )
            } )

            set_paste( paste_with_getter )

        } )

    }, [ cid ] )

    // Get the paste content
    useEffect( (  ) => {

        // If this is a metadata-only request, exit now
        if( metadata_only ) return

        /* ///////////////////////////////
        // Get the paste data, but only after the metadata loaded */
        if( !paste?.cid ) return log( `No paste metadata yet, waiting with fetch` )
        let cancelled = false;
    
        ( async () => {
    
            try {
    
                const paste_content = await paste.get()
                log( `Received paste content: `, paste_content )
                if( !cancelled ) set_paste( prev => ( { ...prev, paste_content } ) )
    
            } catch( e ) {
                log( `Error retreiving paste content: `, e )
                alert( `Error getting content of paste ${ cid.slice( 0, 5 ) }: `, e.message )
            }
    
        } )( )
    
        return () => cancelled = true
        
    }, [ paste?.cid, metadata_only ] )

    // Return hook data with logging
    log( `usePaste hook ${ cid } updated: `, paste )
    return paste

}