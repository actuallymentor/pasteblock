import { useRecentPastes } from '../../hooks/pastes'

import Header from '../organisms/Header'
import Main from '../atoms/Main'
import Footer from '../organisms/Footer'
import Section from '../atoms/Section'

import { Text, A } from '../atoms/Text'
import { Ul, Li } from '../atoms/List'
import IpfsLogo from '../assets/ipfs.svg'

import Column from '../atoms/Column'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import TextArea from '../atoms/TextArea'
import PublicWidget from '../organisms/PublicWidget'

import { useNavigate } from 'react-router-dom'

function Archive() {

	function relativeDays(timestamp) {
		const rtf = new Intl.RelativeTimeFormat('en', {
			numeric: 'auto',
		})
		const oneDayInMs = 1000 * 60 * 60 * 24;
		const daysDifference = Math.round(
			(timestamp - new Date().getTime()) / oneDayInMs,
		);
	
		return rtf.format(daysDifference, 'day');
	}

	const ten_most_recent = useRecentPastes( 50 )

	const ListTag = () => ten_most_recent.map( ( paste, index ) => (
		<Li key={ index }>
			<A href={ `#/view/${ paste.cid}` }>{ paste.name }</A> <A href={ paste.ipfs_url } target='_blank'><img width='15px' height='15px' src={ IpfsLogo } /></A>
			
			<div> { relativeDays( paste.updated ) } | { paste.size_in_bytes } kb </div>
			<span>{ paste.cid }</span>
		</Li>
	))

	return (
		<>
			<Header/>

			<Main justify='center' align='flex-start' direction='row'>

				<Section justify='flex-start' direction='row' width='66%'>

					<Ul>
						<ListTag />
					</Ul>

				</Section>

			</Main>

			<Footer background=''/>

		</>
	)
}

export default Archive