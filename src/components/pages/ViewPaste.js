import { useParams } from 'react-router-dom';
import { usePaste } from '../../hooks/pastes';
import { humanFileSize } from '../../hooks/sizes'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { Button } from '../atoms/Button'
import Column from '../atoms/Column';
import Main from '../atoms/Main';
import Section from '../atoms/Section';
import { H1 } from '../atoms/Text';
import { OutputHead, OutputContainer } from '../atoms/OutputBox';
import Header from '../organisms/Header';
import PublicWidget from '../organisms/PublicWidget';

export default function ViewPaste() {

    const { cid } = useParams()
    const paste = usePaste( cid, false )
    const public_link = `https://blockpaste.web.app/#/view/${ cid }`

    const clipboard = async text => {
		await navigator.clipboard.writeText( text )
		alert( 'Copied to clipboard!' )
	}

    return <>

        <Header />

        <Main justify='center' align='flex-start' direction='row'>

				<Section justify='flex-start' direction='row' width='66%'>

					<Column direction='row' justify='space-between'>

						<H1>{ `'${ paste?.name || `ipfs://${ cid.slice( 0, 5 ) }...` }' paste content:` }</H1>

					</Column>

					<Column direction='row' align='flex-start'>

						<OutputContainer>

							<OutputHead>
								{/* <Text>{ humanFileSize( paste.size_in_bytes ) } </Text>		 */}
							</OutputHead>

							<SyntaxHighlighter showLineNumbers  language='javascript' style={ a11yDark }>
								{ paste?.paste_content }
							</SyntaxHighlighter>
						
						</OutputContainer>

						
						{/* <TextArea value={ paste?.paste_content }/> */}

					</Column>

                    <Column direction='row' justify='space-between'>

                        <Button onClick={ () => clipboard( public_link ) } margin='1rem 0'>Copy sharing link to clipboard</Button>

					</Column>


				</Section>

				<Section justify='center' direction='row' width='33%'>

					<PublicWidget/>

				</Section>
        </Main>

    </>
}