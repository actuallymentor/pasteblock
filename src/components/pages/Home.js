import logo from '../assets/pastebin.png'

import Header from '../organisms/Header'
import Main from '../atoms/Main'
import Container from '../atoms/Container'
import Section from '../atoms/Section'
import Column from '../atoms/Column'
import Image from '../atoms/Image'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import TextArea from '../atoms/TextArea'

import { useNavigate } from 'react-router-dom'


function Home() {

	const navigate = useNavigate()

	return (
		
		<>
			<Header/>

			<Main justify='flex-start'>

				<Section justify='center' direction='column'>

					<Column direction='row' justify='space-between'>

						<Input placeholder='Add a title (Optional)'/>

					</Column>

					<Column direction='row' align='flex-start'>

						<TextArea placeholder='Paste your code here...'/>

					</Column>


					<Column direction='row' justify='space-between'>

						<Input placeholder='Add a title (Optional)'/>

						<Button>Create Block</Button>

					</Column>

				</Section>

			</Main>

		</>

	)
}

export default Home