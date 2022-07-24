import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { log } from '../../modules/helpers'

const theme = {
	colors: {
		text: '#1F2023',
		text_light: 'white',
		background: '#FFFFFF',
		textarea: '#999999',
		textareabg: '#FFFFFF',
		areaborder: '#D9DBE9',
		highlight: '#5666F6',
		btn_bg: '#5FC5A6',
        btn_bg_h: '#45B090',
        btn_bg_a: '#33D6A4',
		btn_text: '#FFFFFF',
		btn_alt_bg: 'transparent',
        btn_alt_bg_h: '#45B090',
        btn_alt_bg_a: '#33D6A4',
		btn_alt_text: '#5FC5A6',
		output_bg: '#F4F5FC',
		output_text: '#6B6B6B',
		primary: '#282c34',
		accent: 'rgb( 97, 218, 251 )',
		hint: 'rgba( 0, 0, 0, .4 )',
		backdrop: 'rgba( 0, 0, 0, .05 )'
	}
}

const theme_dark = {
	colors: {
		text: '#EFEFEF',
		text_light: 'white',
		background: '#161616',
		textarea: '#999999',
		textareabg: '#202020',
		areaborder: '#2B2B2B',
		highlight: '#5666F6',
		btn_bg: '#5FC5A6',
        btn_bg_h: '#45B090',
        btn_bg_a: '#33D6A4',
		btn_text: '#FFFFFF',
		btn_alt_bg: 'transparent',
        btn_alt_bg_h: '#45B090',
        btn_alt_bg_a: '#33D6A4',
		btn_alt_text: '#5FC5A6',
		primary: '#282c34',
		accent: 'rgb( 97, 218, 251 )',
		hint: 'rgba( 0, 0, 0, .4 )',
		backdrop: 'rgba( 0, 0, 0, .05 )'
	}
}

export default props => {

	const [ dark, setDark ] = useState( false )

	useEffect( f => {

		// If API is not available, assume light
		if( !window.matchMedia ) {
			log( 'No darkmode detection support' )
			return setDark( false )
		}

		// Check with API
		const prefers_dark = window.matchMedia('(prefers-color-scheme: dark)').matches
		setDark( prefers_dark )
		log( `User prefers ${ prefers_dark ? 'dark' : 'light' } theme` )

		// Enable a listener
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener( 'change', event => {
			log( 'Darkmode setting changed to ', event.matches )
			setDark( event.matches == 'dark' )
		})

	}, [] )

	return <ThemeProvider { ...props } theme={ dark ? theme_dark : theme } />
}