const fs = require('fs')
fs.writeFileSync('notes.txt','this is my first node file')
fs.appendFileSync('notes.txt',' this is appended message')