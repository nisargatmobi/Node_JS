const yargs = require('yargs')
const chalk = require('chalk')

const notes = require('./getNotes.js')

console.log(notes)

//create add command
yargs.command({
    command:'add',
    describe:'add new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command:'remove',
    describe:'remove  note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})

//create list command
yargs.command({
    command:'list',
    describe:'list notes',
    handler: function(){
        console.log('listing the notes')
    }
})

//create read command
yargs.command({
    command:'read',
    describe:'read a note',
    handler: function(){
        console.log('reading a note')
    }
})


yargs.parse()