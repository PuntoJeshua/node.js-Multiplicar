// Requires
//require para File System de node.js
const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        console.log('================'.green);
        console.log(`Tabla de ${base }`.green);
        console.log('================'.green);

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index}\n`;
        }

        // if (err) reject(err)
        // else
        resolve(`Listar: ${data}\n`)

    });
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index}\n`;
        }

        //const data = new Uint8Array(Buffer.from(data));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`)

            // console.log(`El archivo tabla-${base}.txt ha sido creado!`);
        });

    });
}

//Exportar para utilizar en otro archivo mis funciones
module.exports = {
    crearArchivo,
    listarTabla
}