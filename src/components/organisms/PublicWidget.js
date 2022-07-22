import { useRecentPastes } from '../../hooks/pastes'

import { Text } from '../atoms/Text'

export default function PublicWidget() {

    // const paste = usePaste( "bafkreiems526hz5wurezuq32ydr5uxk7fxtpvp3dhz43mlgffl5dehr2m4" )
    const ten_most_recent = useRecentPastes( 5 )
    const ListTag = () => ten_most_recent.map( ( paste, index ) => (<li key={ index }>{ paste.name }</li>))

    return ( <div>
        
        <Text weight='600'>Lastest Public Blocks</Text>

        <ul>
            <ListTag />
        </ul>

    </div>
    

        
    )
}