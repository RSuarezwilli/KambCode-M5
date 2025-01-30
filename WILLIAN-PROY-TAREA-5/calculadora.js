function sumar(a, b) {
    return a + b;
  }
  
  function restar(a, b) {
    return a - b;
  }
  
  function multiplicar(a, b) {
    return a * b;
  }
  
  function dividir(a, b) {
    if (b === 0) {
      return 'Error: No se puede dividir por cero';
    }
    return a / b;
  }
  
  function calculadora() {
    const args = process.argv.slice(2); 
  
    if (args.length < 3) {
      console.log('Uso: node calculadora.js [número1] [operación] [número2]');
      console.log('Operaciones soportadas: +, -, *, /');
      return;
    }
  
    const num1 = parseFloat(args[0]); 
    const operacion = args[1]; 
    const num2 = parseFloat(args[2]); 
  
    let resultado;
    switch (operacion) {
      case '+':
        resultado = sumar(num1, num2);
        break;
      case '-':
        resultado = restar(num1, num2);
        break;
      case '*':
        resultado = multiplicar(num1, num2);
        break;
      case '/':
        resultado = dividir(num1, num2);
        break;
      default:
        console.log('Error: Operación no soportada');
        return;
    }
  
    console.log(`Resultado: ${resultado}`);
  }
  

  calculadora();

  

  






  