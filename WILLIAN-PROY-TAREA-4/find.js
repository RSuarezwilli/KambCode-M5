 import {createReadStream} from 'fs'

// const readStream = createReadStream('./numeros.txt');

// readStream.on('data', (chunk) => {
//   console.log(chunk.toString());
// });

// readStream.on('open', () => {
//   console.log('Archivo abierto');
// });

// readStream.on('end', () => {
//   console.log('Archivo leído por completo');
// });

const readStream = createReadStream('./numeros.txt');

readStream.on('data', (chunk) => {
  console.log("Lectura de datos:");
  console.log(chunk.toString());
});

readStream.on('open', () => {
  console.log('Archivo abierto');
});

readStream.on('end', () => {
  console.log('Archivo leído por completo');
});