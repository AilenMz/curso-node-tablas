const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "es la base de la tabla"
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "es el límite de múltiplicaciones"
  })
  .check((argv, option) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;

module.exports = argv
