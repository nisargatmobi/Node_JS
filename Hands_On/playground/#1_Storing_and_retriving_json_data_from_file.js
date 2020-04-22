const fs = require('fs')

// data from file is in binary form
const dataBuffer = fs.readFileSync('jasonFile.json')
// converted data to string
const dataJSON = dataBuffer.toString()
// no access field of object, string is converted to object
const JSONObj = JSON.parse(dataJSON)
// overided the field
JSONObj.name = 'NISARG'
// to store in file object is again coverted to string
const overRidedString = JSON.stringify(JSONObj)
// data is written to file
fs.writeFileSync('jasonFile.json',overRidedString)
