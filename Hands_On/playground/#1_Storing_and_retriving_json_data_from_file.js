const fs = require('fs')
const dataBuffer = fs.readFileSync('jasonFile.json')
const dataJSON = dataBuffer.toString()
const JSONObj = JSON.parse(dataJSON)
JSONObj.name = 'NISARG'
const overRidedString = JSON.stringify(JSONObj)
fs.writeFileSync('jasonFile.json',overRidedString)
