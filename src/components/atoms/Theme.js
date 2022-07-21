import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
	colors: {
		primary: '#282c34',
		text: 'rgb( 255, 255, 255 )',
		accent: 'rgb( 97, 218, 251 )',
		hint: 'rgba( 0, 0, 0, .4 )',
		backdrop: 'rgba( 0, 0, 0, .05 )'
	},
	light: {
		text: '#141735',
		background: '#FFFFFF',
		primary: '#282c34',
		accent: 'rgb( 97, 218, 251 )',
		hint: 'rgba( 0, 0, 0, .4 )',
		backdrop: 'rgba( 0, 0, 0, .05 )'
	},
	dark: {
		text: 'rgb( 255, 255, 255 )',
		background: '#FFFFFF',
		primary: '#282c34',
		accent: 'rgb( 97, 218, 251 )',
		hint: 'rgba( 0, 0, 0, .4 )',
		backdrop: 'rgba( 0, 0, 0, .05 )'
	}
}

export default props => <ThemeProvider { ...props } theme={ theme } />