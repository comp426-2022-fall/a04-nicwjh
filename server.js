import express from 'express';
import minimist from 'minimist'; 
import { roll } from './lib/roll.js'

const app = express(); 
app.use(express.urlencoded({ extended: true}));
const args = minimist(process.argv.slice(2));

// req #1 
const port = args.port || 5000;

// req #3
app.get('/app/', (req, res) => {
	res.send('200 OK');
});

// req #4
app.get('/app/roll/', (req, res) => {
	res.send(roll(6,2,1));
});

// req #5
app.post('/app/roll/', (req, res) => {
	var sides = parseInt(req.body.sides);
	var dice = parseInt(req.body.dice);
	var rolls = parseInt(req.body.rolls);
	res.send(roll(sides,dice,rolls));
});

// req #6
app.get('/app/roll/:sides/', (req, res) => {
	var sides = parseInt(req.params.sides);
	res.send(roll(sides, 2, 1));
});

// req #7 
app.get('/app/roll/:sides/:dice/', (req, res) => {
	var sides = parseInt(req.params.sides);
	var dice = parseInt(req.params.dice);
	res.send(roll(sides, dice, 1));
});

// req #8
app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
	var sides = parseInt(req.params.sides);
	var dice = parseInt(req.params.dice);
	var rolls = parseInt(req.params.rolls);
	res.send(roll(sides, dice, rolls));
});

// default EP 
app.use(function(req, res) {
	res.send("404 not found");
});

app.listen(port);
