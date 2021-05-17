const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

// const validator = require('validator');

// const success = chalk.inverse.green;
// const error = chalk.inverse.red;
// const warn = chalk.inverse.yellow;
//
// let note = notes.getNotes()
// console.log(note)
//
// // console.log(validator.isURL('www.google.com'));
//
// console.log(success('SUCCESS') + ' This is successful');
// console.log(error('ERROR') + ' This is a error');
// console.log(warn('WARNING') + ' This is a warning');

yargs.command({
  command: 'add',
  describe: 'Adding notes',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note content',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body)
  }
})

yargs.command({
  command: 'remove',
  describe: 'Remove notes',
  builder: {
    title: {
      describe: 'Remove a note',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
})

yargs.command({
  command: 'read',
  describe: 'Read notes',
  builder: {
    title: {
      describe: 'Read a note',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv){
    notes.readNote(argv.title)
  }
})

yargs.command({
  command: 'list',
  describe: 'List notes',
  handler() {
    notes.listNotes();
  }
})

yargs.parse()
