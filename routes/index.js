const express = require('express');
const router = express.Router();

const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date()
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date()
	}
];


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Mini-Message-Board', msgs: messages });
});

// GET new message form
router.get('/new', (req, res, next) => {
	res.render('form');
})

// POST new message
router.post('/new', (req, res, next) => {
	// Push new message to arr
	messages.push({
		text: req.body.message,
		user: req.body.username,
		added: new Date(),
	});

	// Redirect to homepage
	res.redirect('/');
})

module.exports = router;
