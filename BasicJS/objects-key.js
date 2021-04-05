// JavaScript provides a native way of listing all the available keys of an
// object. This can be helpful for looping through all the properties of an
// object and manipulating their values accordingly.

const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020
}

const keys1 = Object.keys(car)

console.log(keys1);