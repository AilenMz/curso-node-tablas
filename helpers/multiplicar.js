//import { writeFile } from 'fs';
const fs = require("fs");
const colors = require("colors")

const crearArchivo = async (base = 5, listar, limit) => {
  try {

    let salida = "";
    let consola = "";

    for (let index = 1; index <= limit; index++) {
      salida += `${base} x ${index} = ${base * index}\n`;
      consola += `${base} ${"x".red} ${index} ${"=".red} ${base * index}\n`;
    }

    // fs.writeFile("tabla-5.txt", salida, (err)=>{
    //     if (err) throw err

    //     console.log("Tabla creada con exito")
    // })

    if(listar){
      console.log("==================".green);
      console.log(`Tabla del ${colors.blue(base)}`.green);
      console.log("==================".green);
      console.log(consola)
    }
    
    await fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (error) {
      throw error
  }
};

module.exports = { crearArchivo };
