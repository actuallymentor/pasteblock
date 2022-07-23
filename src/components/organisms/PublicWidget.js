import { useRecentPastes } from '../../hooks/pastes'

import { Text } from '../atoms/Text'
import { Ul, Li } from '../atoms/List'

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
			{ paste.name }
			<div> syntax? | { relativeDays( paste.updated ) } | ? kb </div>
			<span>{ paste.cid }</span>
		</Li>
	))

	return ( <div>
		
		<Text weight='600'>Latest Public Blocks</Text>

		<Ul>
			<ListTag />
		</Ul>



	</div>
	

		
	)
}