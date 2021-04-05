// const readline = require('readline')

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('what is your name? ', (answer =>{
//     console.log(`${answer}, you are an idiot!`);
//     rl.close();
// }))

'use strict'

let result = 0

for (let i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i])
}


console.log(result)

