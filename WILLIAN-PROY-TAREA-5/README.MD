# Calculadora en Node.js

Este es un sencillo script de calculadora en Node.js que permite realizar operaciones matemáticas básicas como suma, resta, multiplicación y división. Se ejecuta desde la línea de comandos y utiliza argumentos para ingresar los números y la operación que se desea realizar.

## Funciones

1. **sumar(a, b)**: Realiza la suma de dos números.
2. **restar(a, b)**: Realiza la resta de dos números.
3. **multiplicar(a, b)**: Realiza la multiplicación de dos números.
4. **dividir(a, b)**: Realiza la división de dos números. Si el divisor es 0, devuelve un error.

## Uso

Para utilizar la calculadora, se debe ejecutar el script desde la línea de comandos, proporcionando dos números y una operación matemática. La sintaxis es la siguiente:

Resultado: 

### Operaciones soportadas
- Suma: `+`
- Resta: `-`
- Multiplicación: `*`
- División: `/`

## Manejo de errores

- Si el divisor es 0 en la operación de división, el resultado será un mensaje de error:

# Calculadora en Node.js

Este es un script sencillo de una calculadora en **Node.js** que permite realizar operaciones matemáticas básicas desde la línea de comandos. El script soporta las operaciones de suma, resta, multiplicación y división. El usuario puede ingresar los números y la operación deseada como argumentos al ejecutar el script.

## Descripción

El script permite realizar cálculos utilizando los siguientes operadores matemáticos:

- **Suma (`+`)**
- **Resta (`-`)**
- **Multiplicación (`*`)**
- **División (`/`)**

Además, incluye un manejo de errores básico para evitar la división por cero y para mostrar instrucciones si no se ingresan los parámetros necesarios.
Uso: node calculadora.js, 
Operaciones soportadas: +, -, *, /


## Instalación
1. Guarde el código en un archivo llamado `calculadora.js` o cualquier otro nombre de tu preferencia.

2. Ejecuta el script desde la línea de comandos usando Node.js.

## Funciones

### 1. **sumar(a, b)**

Esta función recibe dos números como parámetros y devuelve la suma de ambos.

```js
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

### Función `calculadora()`

La función `calculadora()` es el núcleo del script y se encarga de gestionar la entrada de datos, realizar el cálculo correspondiente y mostrar el resultado. No recibe parámetros directamente, ya que los parámetros (números y operación) se obtienen desde la línea de comandos mediante `process.argv`.

#### Parámetros

Los parámetros necesarios para ejecutar la calculadora se pasan como argumentos en la línea de comandos al ejecutar el script. Estos son:

1. **número1**: El primer número de la operación que se quiere realizar.
2. **operación**: El operador matemático que indica qué tipo de operación se debe realizar. Los operadores soportados son: `+` (suma), `-` (resta), `*` (multiplicación), `/` (división).
3. **número2**: El segundo número de la operación.

#### Funcionamiento

1. **Obtención de argumentos**: El script toma los argumentos proporcionados al ejecutar el archivo desde la terminal. Estos valores se capturan utilizando `process.argv.slice(2)`, lo que excluye el nombre del archivo y los posibles parámetros de Node.js.

2. **Verificación de argumentos**: 
   - Si no se proporcionan al menos tres argumentos (número1, operación, número2), el script mostrará un mensaje de uso correcto y no continuará con el cálculo.
   - El mensaje de uso correcto será:
     ```
     Uso: node calculadora.js [número1] [operación] [número2]
     Operaciones soportadas: +, -, *, /
     ```

3. **Procesamiento de la operación**:
   - Si los argumentos son suficientes, el primer argumento se convierte en un número (`num1`), el segundo es el operador (`operacion`), y el tercero se convierte en el segundo número de la operación (`num2`).
   
4. **Selección de la operación**: 
   - Dependiendo del operador (`+`, `-`, `*`, `/`), el script llama a la función correspondiente:
     - `sumar()` para la suma.
     - `restar()` para la resta.
     - `multiplicar()` para la multiplicación.
     - `dividir()` para la división (con validación de división por cero).
   - Si se ingresa un operador no soportado, el script muestra un mensaje de error:
     ```
     Error: Operación no soportada
     ```

5. **Resultado**: Finalmente, el script muestra el resultado de la operación en la terminal, o el mensaje de error si la operación no es válida o si ocurre un error (como la división por cero).

**Ejemplo de ejecución:**


