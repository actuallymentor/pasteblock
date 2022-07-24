import { useRecentPastes } from '../../hooks/pastes'

import Header from '../organisms/Header'
import Main from '../atoms/Main'
import Footer from '../organisms/Footer'
import Section from '../atoms/Section'

import { A } from '../atoms/Text'
import { Table, Row, Th, Td } from '../atoms/Table'
import Img from '../atoms/Image'
import IpfsLogo from '../assets/ipfs.svg'

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

	const TableFill = () => ten_most_recent.map( ( paste, index ) => (
		<Row key={ index }>
			<Td>
				<A href={ `#/view/${ paste.cid}` }>
					{ paste.name }
				</A>

				<A href={ paste.ipfs_url } target='_blank'>
					<Img width='15px' height='15px' src={ IpfsLogo } />
				</A>
			</Td>
			<Td>
				{ relativeDays( paste.updated ) }
			</Td>
			<Td>
				{ paste.size_in_bytes } kb
			</Td>
		</Row>
	))

	return (
		<>
			<Header/>

			<Main justify='center' align='flex-start' direction='row'>

				<Section justify='flex-start' direction='row' width='100%'>

					<Table>

						<Row>
							<Th>Name/Title</Th>
							<Th>Posted</Th>
							<Th>Size</Th>
						</Row>

						<TableFill />

					</Table>

				</Section>

			</Main>

			<Footer background=''/>

		</>
	)
}

export default Archive