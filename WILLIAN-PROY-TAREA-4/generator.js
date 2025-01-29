//import { readFile, createReadStream } from 'fs';

// readFile('./numeros.txt', (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log(data.toString());
// });

// for (let i = 0; i < 1000; i++) {
//   console.log(i);
// }

import { readFile, createReadStream } from 'fs';

readFile('./numeros.txt', (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Contenido del archivo:");
  console.log(data.toString());
});

console.log("Números pares del 0 al 999:");
for (let i = 0; i < 1000; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}