const functions = require("firebase-functions");

const { upload_file_to_web3 } = require( './modules/web3_storage' )
exports.upload_file_to_web3 = functions.https.onCall( upload_file_to_web3 )