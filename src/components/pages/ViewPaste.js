import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { usePaste } from '../../hooks/pastes'
import { humanFileSize } from '../../hooks/sizes'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import Column from '../atoms/Column'
import Header from '../organisms/Header'
import Main from '../atoms/Main'
import Footer from '../organisms/Footer'
import Section from '../atoms/Section'
import { Text, H1 } from '../atoms/Text'
import { OutputHead, OutputContainer, OutputButton, OutputLanguage } from '../atoms/OutputBox'

import PublicWidget from '../organisms/PublicWidget';
import React from 'react'

export default function ViewPaste() {

	const [ codeLanguage, setCodeLanguage ] = useState( 'javascript' )
	
	const langList = [
		{
			"label": "javascript",
			"value": "javascript"
		},
		{
		  "label": "css",
		  "value": "css"
		},
		{
		  "label": "json",
		  "value": "json"
		},
		{
		  "label": "markdown",
		  "value": "markdown"
		},
		{
		  "label": "php",
		  "value": "php"
		},
		{
		  "label": "python",
		  "value": "python"
		},
		{
		  "label": "plaintext",
		  "value": "plaintext"
		},
		{
		  "label": "shell",
		  "value": "shell"
		}
	]

    const { cid } = useParams()
    const paste = usePaste( cid, false )
    const public_link = `https://pasteblock.app/#/view/${ cid }`
	const ipfs_link = `ipfs://${ cid }`
	const real_size = humanFileSize( paste?.size_in_bytes )

    const clipboard = async text => {
		await navigator.clipboard.writeText( text )
		alert( 'Copied to clipboard!' )
	}

	

    return <>

        <Header />

        <Main justify='center' align='flex-start' direction='row'>

				<Section justify='flex-start' direction='row' width='75%'>

					<Column direction='row' justify='space-between'>

						<H1>{ `'${ paste?.name || `ipfs://${ cid.slice( 0, 5 ) }...` }' paste content:` }</H1>

					</Column>

					<Column direction='row' align='flex-start'>

						<OutputContainer>

							<OutputHead>
								<div>
									<OutputLanguage id="code-language-switcher" type="dropdown" onChange={ ( { target } ) => setCodeLanguage( target.value ) } options={ langList } />
									<Text>{ real_size }</Text>
								</div>

								<div>
									<OutputButton onClick={ () => clipboard( public_link ) }>
										Share link
									</OutputButton>
									<OutputButton onClick={ () => clipboard( ipfs_link ) }>
										Raw
									</OutputButton>
								</div>

							</OutputHead>

							<SyntaxHighlighter showLineNumbers language={ codeLanguage } style={ a11yDark }>
								{ paste?.paste_content }
							</SyntaxHighlighter>
						
						</OutputContainer>

						
						{/* <TextArea value={ paste?.paste_content }/> */}

					</Column>

				</Section>

				<Section justify='center' direction='row' width='25%'>

					<PublicWidget/>

				</Section>
        </Main>

		<Footer/>

    </>
}