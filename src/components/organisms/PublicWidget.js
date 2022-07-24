import { useRecentPastes } from '../../hooks/pastes'

import { Text, A, StyledLink } from '../atoms/Text'
import { Ul, Li } from '../atoms/List'
import IpfsLogo from '../assets/ipfs.svg'

export default function PublicWidget() {

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

	// const paste = usePaste( "bafkreiems526hz5wurezuq32ydr5uxk7fxtpvp3dhz43mlgffl5dehr2m4" )
	const ten_most_recent = useRecentPastes( 10 )
	const ListTag = () => ten_most_recent.map( ( paste, index ) => (
		<Li key={ index }>
			<A href={ `#/view/${ paste.cid}` }>{ paste.name }</A> <A href={ paste.ipfs_url } target='_blank'><img width='15px' height='15px' src={ IpfsLogo } /></A>
			<div> { relativeDays( paste.updated ) } | { paste.size_in_bytes } kb </div>
		</Li>
	))

	return ( <div>
		
		<Text weight='600'>Latest Public Blocks</Text>

		<Ul>
			<ListTag />
		</Ul>

		{/* <StyledLink to='/archive'>
			Show all Public Blocks
		</StyledLink> */}

	</div>
	

		
	)
}