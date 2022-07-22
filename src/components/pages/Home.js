import logo from '../assets/pastebin.png'

import Header from '../organisms/Header'
import Main from '../atoms/Main'
import Footer from '../organisms/Footer'
import Container from '../atoms/Container'
import Section from '../atoms/Section'
import Column from '../atoms/Column'
import Image from '../atoms/Image'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import { Text } from '../atoms/Text'
import TextArea from '../atoms/TextArea'

import { useNavigate } from 'react-router-dom'


function Home() {

	const navigate = useNavigate()

	return (
		
		<>
			<Header/>

			<Main justify='center' align='flex-start' direction='row'>

				<Section justify='flex-start' direction='row' width='66%'>

					<Column direction='row' justify='space-between'>

						<Input placeholder='Add a title (Optional)'/>

					</Column>

					<Column direction='row' align='flex-start'>

						<TextArea placeholder='Paste your code here...'/>

					</Column>


					<Column direction='row' justify='space-between'>

						<Input placeholder='Add a title (Optional)' weight='700'/>

						<Button>Create Block</Button>

					</Column>

				</Section>

				<Section justify='center' direction='row' width='33%'>

				<Text>Lastest Public Blocks</Text>

				</Section>

			</Main>

			<Footer background=''/>

		</>

	)
}

export default Home