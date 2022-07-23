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

function Archive() {

	return (
		<>
			<Header/>

			<Main justify='center' align='flex-start' direction='row'>

				<Section justify='flex-start' direction='row' width='66%'>


				</Section>

				<Section justify='flex-start' direction='row' width='33%'>

					<PublicWidget/>

				</Section>

			</Main>

			<Footer background=''/>

		</>
	)
}

export default Archive