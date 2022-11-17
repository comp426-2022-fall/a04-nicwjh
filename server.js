import express from 'express';
import minimist from 'minimist'; 
import { roll } from './lib/roll.js'

const app = express(); 
app.use(express.urlencoded({ extended: true}));
const args = minimist(process.argv.slice(2));

// read port 
const port = args.port || 5000; 
