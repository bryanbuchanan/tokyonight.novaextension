/**
 * Toggles advanced mode, which displays more options, like custom themes.
 */

import db from '../../../models/index.mjs'
import util from '../../../lib/utilities.mjs'

export default async (req, res) => {
		
	let { advanced } = req.body
	advanced = util.boolean(advanced)
	
	// Update DB
	await db.site.updateOne({
		_id: req.tt.site._id
	}, {
		advanced
	})
	
	// Respond
	res.send({
		status: 'success',
		message: 'Advanced mode toggled',
	})
	
}

const variable = "string"

const regex = /(.)*\t/g
