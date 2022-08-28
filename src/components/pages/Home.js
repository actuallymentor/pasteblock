
import Header from '../organisms/Header'
import Main from '../atoms/Main'
import Footer from '../organisms/Footer'
import Section from '../atoms/Section'
import Column from '../atoms/Column'
import { Button } from '../atoms/Button'
import Input from '../atoms/Input'
import TextArea from '../atoms/TextArea'
import PublicWidget from '../organisms/PublicWidget'

import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../molecules/Loading'
import { upload_file_to_web3 } from '../../modules/firebase'
import { log } from '../../modules/helpers'

function Home() {
	
	const [ title, set_title] = useState( '' )
	const [ content, set_content ] = useState( '' )
	const [ loading, set_loading ] = useState( '' )
	const navigate = useNavigate()


	async function save_paste() {

		try {
			
			if( !title ) {

				const title = 'Untitled'
				set_loading( 'Saving paste to web3 storage' )
				const { data: paste_meta } = await upload_file_to_web3( { data_string: content, name: title } )
				log( `Received paste meta with default value: `, paste_meta )
				navigate( `/view/${ paste_meta.cid }` )

			} else {

				set_loading( 'Saving paste to web3 storage' )
				const { data: paste_meta } = await upload_file_to_web3( { data_string: content, name: title } )
				log( `Received paste meta: `, paste_meta )
				navigate( `/view/${ paste_meta.cid }` )
			}

		} catch( e ) {
			set_loading( false )
			alert( `Error saving paste: `, e.message )
		}

	}

	if( loading ) return <Loading message={ loading } />

	return (
		
		<>
			<Header/>

			<Main justify='center' align='flex-start' direction='row'>

				<Section justify='flex-start' direction='row' width='75%'>

					<Column direction='row' justify='space-between'>

						<Input width='100%' onChange={ ( { target } ) => set_title( target.value ) } placeholder='Add a title (Optional)' value={ title }/>

					</Column>

					<Column direction='row' align='flex-start'>

						<TextArea onChange={ ( { target } ) => set_content( target.value ) } placeholder='Paste your code here...' value={ content }/>

					</Column>


					<Column direction='row' justify='space-between'>

						{ /* Comment out syntax until we implemented it */ }
						{ /* <Input type='dropdown' options={[{'label': 'Syntacs highlighting','value': ''},{'label': '.txt','value': 'txt'},{'label': '.json','value': 'json'}]} /> */ }

						<Button onClick={ save_paste } margin='1rem 0'>Create Block</Button>

					</Column>

				</Section>

				<Section justify='flex-end' direction='row' width='25%'>

					<PublicWidget/>

				</Section>

			</Main>

			<Footer background=''/>

		</>

	)
}

export default Home