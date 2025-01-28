import esperarSegundos from './async.js'; 
const main = async () => {
    console.log('Iniciando las pruebas de esperarSegundos...');

    await esperarSegundos(5); 
    
}
main()