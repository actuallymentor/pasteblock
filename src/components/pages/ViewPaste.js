import { useParams } from 'react-router-dom'
import { usePaste } from '../../hooks/pastes'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import Column from '../atoms/Column'
import Header from '../organisms/Header'
import Main from '../atoms/Main'
import Footer from '../organisms/Footer'
import Section from '../atoms/Section'
import { H1 } from '../atoms/Text'
import { OutputHead, OutputContainer, OutputButton } from '../atoms/OutputBox'

import PublicWidget from '../organisms/PublicWidget';

export default function ViewPaste() {

    const { cid } = useParams()
    const paste = usePaste( cid, false )
    const public_link = `https://blockpaste.web.app/#/view/${ cid }`
	const ipfs_link = `ipfs://${ cid }`

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
								{/* <Text>{ humanFileSize( `${ paste.size_in_bytes }` ) } </Text>		 */}
								{/* { size }	 */}
								<OutputButton onClick={ () => clipboard( public_link ) }>
									Copy share link
								</OutputButton>
								<OutputButton onClick={ () => clipboard( ipfs_link ) }>
									Copy IPFS link
								</OutputButton>
							</OutputHead>

							<SyntaxHighlighter showLineNumbers  language='javascript' style={ a11yDark }>
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