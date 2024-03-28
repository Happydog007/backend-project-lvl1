#!/usr/bin/env node
import yourName from '../src/cli.js';
import isEven from './brain-even.js';

console.log('Welcome to the Brain Games!');

const name = yourName()
isEven(name)


