const yargs = require('yargs')

//create add command
yargs.command({
    command:'add',
    describe:'add new note',
    handler: function(){
        console.log('adding a new file')
    }
})

//create remove command
yargs.command({
    command:'remove',
    describe:'remove  note',
    handler: function(){
        console.log('removing a new file')
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

console.log(yargs.argv)