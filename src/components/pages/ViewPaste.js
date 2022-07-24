import { useParams } from "react-router-dom";
import { usePaste } from "../../hooks/pastes";
import Button from "../atoms/Button";
import Column from "../atoms/Column";
import Input from "../atoms/Input";
import Main from "../atoms/Main";
import Section from "../atoms/Section";
import { H1 } from "../atoms/Text";
import TextArea from "../atoms/TextArea";
import Header from "../organisms/Header";
import PublicWidget from "../organisms/PublicWidget";

export default function ViewPaste() {

    const { cid } = useParams()
    const paste = usePaste( cid, false )
    const public_link = `https://blockpaste.web.app/#/view/${ cid }`

    const clipboard = async text => {
		await navigator.clipboard.writeText( text )
		alert( 'Copied to clipboard!' )
	}

    return <>

        <Header />

        <Main justify='center' align='flex-start' direction='row'>

				<Section justify='flex-start' direction='row' width='66%'>

					<Column direction='row' justify='space-between'>

						<H1>{ `"${ paste?.name || `ipfs://${ cid.slice( 0, 5 ) }...` }" paste content:` }</H1>

					</Column>

					<Column direction='row' align='flex-start'>

						<TextArea value={ paste?.paste_content }/>

					</Column>

                    <Column direction='row' justify='space-between'>

                        <Button onClick={ () => clipboard( public_link ) } margin="1rem 0">Copy sharing link to clipboard</Button>

					</Column>


				</Section>

				<Section justify='center' direction='row' width='33%'>

					<PublicWidget/>

				</Section>
        </Main>

    </>
}