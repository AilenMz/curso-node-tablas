const { option } = require('yargs')
const {crearArchivo} = require('./helpers/multiplicar')
//const yargs = require('yargs/yargs')
const argv = require("./config/yargs.js")
const colors = require("colors")

console.clear()


// antes de yargs

// console.log(process.argv)

//desestructuro lo que hay en el process.argv

// const [ , , arg3 = "base=3"] = process.argv
// const [ , base = 5] = arg3.split("=")

//console.log(base)

// crearArchivo(base)
// .then( nombreArchivo => console.log("fsdfsdf", nombreArchivo, " creada"))
// .catch(err => console.log("err", err)) 

// despues de yargs 

crearArchivo(argv.b, argv.l, argv.h)
.then( nombreArchivo => console.log(nombreArchivo.rainbow, " creada"))
.catch(err => console.log("err", err)) 


