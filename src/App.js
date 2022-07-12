// Providers
import { Suspense } from 'react'
import Theme from './components/atoms/Theme'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import HomePage from './components/organisms/Home'
import UploadFile from './components/organisms/Upload'

// Components
import Loading from './components/molecules/Loading'

// ///////////////////////////////
// Render component
// ///////////////////////////////
export default function App( ) {

return <Theme>

	<Suspense fallback={ <Loading /> }>

		<Router>

			<Routes>

				<Route exact path='/' element={ <HomePage /> } />
				<Route exact path='/upload' element={ <UploadFile /> } />

			</Routes>

		</Router>

	</Suspense>

</Theme>

}