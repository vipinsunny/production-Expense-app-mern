const express = require ('express')
const { addTransaction, getAllTransaction, editTransaction, deleteTransaction } = require('../controllers/transactionController')

//router object
const router = express.Router()

//routes
//add transaction POST methos
router.post('/add-transaction', addTransaction)

//edit transaction POST methos
router.post('/edit-transaction', editTransaction)


//delete transaction POST methos
router.post('/delete-transaction', deleteTransaction)



//get transaction
router.post('/get-transaction', getAllTransaction )

module.exports = router