import React, { useState, useReducer } from 'react'
import { Web3Storage } from 'web3.storage'

import Container from '../atoms/Container'
import Main from '../atoms/Main'
import Section from '../atoms/Section'
import Column from '../atoms/Column'
import Image from '../atoms/Image'
import { OutputLink, Output } from '../atoms/Text'

import '../../temp.css'
import OutputBox from '../atoms/OutputBox'
import Header from '../organisms/Header'

const token = process.env.REACT_APP_WEB3_STORAGE_API

function Archive() {

	const [messages, showMessage] = useReducer((msgs, m) => msgs.concat(m), [])
	const [files, setFiles] = useState([])

	async function handleSubmit (event) {

		// don't reload the page!
		event.preventDefault()

		showMessage('> 📦 creating web3.storage client')
		const client = new Web3Storage({ token })

		showMessage('> 🤖 chunking and hashing the files (in your browser!) to calculate the Content ID')
		const cid = await client.put(files, {

			onRootCidReady: localCid => {
				showMessage(`> 🔑 locally calculated Content ID: ${localCid} `)
				showMessage('> 📡 sending files to web3.storage ')
			},
			onStoredChunk: bytes => showMessage(`> 🛰 sent ${bytes.toLocaleString()} bytes to web3.storage`)
			
		})
		showMessage(`> ✅ web3.storage now hosting ${cid}`)
		showLink(`https://dweb.link/ipfs/${cid}`)

		showMessage('> 📡 fetching the list of all unique uploads on this account')
		let totalBytes = 0
		for await (const upload of client.list()) {
			showMessage(`> 📄 ${upload.cid}  ${upload.name}`)
			totalBytes += upload.dagSize || 0
		}
		showMessage(`> ⁂ ${totalBytes.toLocaleString()} bytes stored!`)
	}

	function showLink (url) {
		showMessage(<span>&gt; 🔗 <OutputLink href={url}>{url}</OutputLink></span>)
	}

	return (
		<>

			<Header/>
			
			<Main justify='flex-start'>

				<Section width='600px' height='600px' justify='space-around' direction='row'>

					<Column width='600px' height='400px' align='center'>

						<form id='upload-form' onSubmit={handleSubmit}>
							<label htmlFor='filepicker'>Pick files to store</label>
							<input type='file' id='filepicker' name='fileList' onChange={e => setFiles(e.target.files)} multiple required />
							<input type='submit' value='Submit' id='submit' />
						</form>

					</Column>

					<Column align='flex-start'>

						<OutputBox maxHeight='300px' >
							<Output>&gt; ⁂ waiting for form submission...</Output>
							{messages.map((m, i) => <Output key={m + i}>{m}</Output>)}
						</OutputBox>

					</Column>

				</Section>

			</Main>

		</>
	)
}

export default Archive