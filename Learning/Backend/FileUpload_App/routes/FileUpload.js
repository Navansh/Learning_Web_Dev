const express = require('express')
const router = express.Router();

//har ek route ke liye handler(controller functions) hote hai
const {localFileUpload, imageUpload, videoUpload, imageSizeReducer} = require('../controllers/fileUpload')


//A.P.I route
router.post('/localFileUpload', localFileUpload)
router.post('/imageUpload', imageUpload)
router.post('/videoUpload', videoUpload)
router.post('/imageSizeReducer', imageSizeReducer)







//exporting it 
module.exports = router;



