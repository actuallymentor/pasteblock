// Providers
import { Suspense } from 'react'
import { GlobalStyles } from './components/atoms/GlobalStyles'
import Theme from './components/atoms/Theme'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import HomePage from './components/pages/Home'
import PublicArchive from './components/pages/Archive'

// Components
import Loading from './components/molecules/Loading'

// ///////////////////////////////
// Render component
// ///////////////////////////////
export default function App( ) {

return <Theme>

	<GlobalStyles />

	<Suspense fallback={ <Loading /> }>

		<Router>

			<Routes>

				<Route exact path='/' element={ <HomePage /> } />
				<Route exact path='/archive' element={ <PublicArchive /> } />

			</Routes>

		</Router>

	</Suspense>

</Theme>

}