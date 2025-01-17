let libros = [
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', paginas: 300 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 400 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', paginas: 350 }
];

// Imprime en la consola el nombre y el autor del segundo libro.
console.log('cien años de soledad ' + 'Gabriel GarciaMárquez');

// Actualiza el número de páginas del primer libro a 350.

const paginas ={
    paginas: 350
}
console.log(paginas, 'paginas actulizadas');

// Imprime en la consola la información completa del primer libro después de la actualización.

const libro = {
    titulo: 'El Hobbit',
    autor: 'J.R.R. Tolkien',
    paginas: 350
}
console.log(libro, 'libro actualizado');

// Utiliza la función map para generar un nuevo array de libros que solo tenga las propiedades titulo y autor,
// cuando imprimas tu nuevo array debe quedar de la siguiente forma:

const librosSimplificados = libros.map(({titulo, autor}) => ({titulo, autor}));
console.log(librosSimplificados, );