const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, returnLines);

function returnLines(err,contents){
    if(err){
        return console.log(err)
    } else {
    const lines = contents.toString().split('\n').length-1
    console.log(lines)}
}
