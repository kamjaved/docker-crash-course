const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const data = [
	{ id: 1, title: 'There are no repositories in this namespace.' },
	{ id: 2, title: 'A MAN IS DRIVING LAMBORGINIHI' },
	{ id: 3, title: 'A man is goiing to Gym' },
];

app.get('/', (req, res) => {
	res.json(data);
});

app.listen(5000, () => {
	console.log('Server is Running on Port 5000...');
});
