
import Header from '../organisms/Header'
import Main from '../atoms/Main'
import Footer from '../organisms/Footer'
import Section from '../atoms/Section'
import Column from '../atoms/Column'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import TextArea from '../atoms/TextArea'
import PublicWidget from '../organisms/PublicWidget'

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

						<Input type='dropdown' options={[{'label': 'Syntacs highlighting','value': ''},{'label': '.txt','value': 'txt'},{'label': '.json','value': 'json'}]} />

						<Button>Create Block</Button>

					</Column>

				</Section>

				<Section justify='center' direction='row' width='33%'>

					<PublicWidget/>

				</Section>

			</Main>

			<Footer background=''/>

		</>

	)
}

export default Home