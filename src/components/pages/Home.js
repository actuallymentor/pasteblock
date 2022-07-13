import logo from '../assets/pastebin.png'

import Header from '../molecules/Header'
import Main from '../atoms/Main'
import Container from '../atoms/Container'
import Section from '../atoms/Section'
import Column from '../atoms/Column'
import Image from '../atoms/Image'
import { Text, H1, H2 } from '../atoms/Text'
import Button from '../atoms/Button'

import { useNavigate } from 'react-router-dom'


function Home() {

const navigate = useNavigate()

return (
	<Container>

		<Header/>
		
		<Main justify='flex-start'>

			<Section height='600px' justify='space-around' direction="column">

				<Column align='center' >

					<Image src={logo} width="80px" alt="logo" />

					<Text>Pasteblock</Text>
						
					<Button onClick={ f => navigate( '/upload' ) }>Upload</Button>

				</Column>

			</Section>

		</Main>

	</Container>

);
}

export default Home