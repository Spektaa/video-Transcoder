const express = require('express'),
	router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
	res.redirect('/download-and-encode')
});

module.exports = router;
