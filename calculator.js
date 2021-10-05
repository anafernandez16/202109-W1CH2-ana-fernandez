
let num1 = prompt('Introduce un número');
let num2= prompt('Introduce un número');
console.log(calculator(num1,num2));

function calculator(num1,num2){
    //Funciones calculadora
    function sum(num1,num2) { 
        let resultSum= parseFloat(num1)+ parseFloat(num2);
        return dec(resultSum);
    }
    function rest(num1,num2) { 
        let resultRest = num1-num2;
        return dec(resultRest);
    }
    function mult(num1,num2) { 
        let resultMult = num1*num2;
        return dec(resultMult);
    }
    function div(num1,num2) { 
        let resultDiv = num1/num2;
        return dec(resultDiv);
    }
    //Solo mostrar 3 decimales si el resultado NO es entero
    function dec(result) {
        if (result % 1 == 0) {
            return result;
        }
        else {
            return result.toFixed(3);
        }
    }
    let results=[];
    //Comprobar si los parámetros son válidos: 
    if((isNaN(num1) || isNaN(num2)) || (num1 ===""  && num2==="") || (num1 === null  && num2=== null)) {
        return 'Parámetros no válidos'
    }
    //Solo se ha introducido un parámetro:
    else if(num1 === "" || num2 === "" || num1=== null || num2 === null ) {
        let squareRoot;
        if(num1 === "" || num1 === null) {
            squareRoot= Math.sqrt(num2);
        }
        else { 
            squareRoot = Math.sqrt(num1);
        }
        return 'The result of the square root is: ' + dec(squareRoot);
    }
    //Ambos parámetros son válidos:
    else {
        results.push(sum(num1,num2), rest(num1,num2), mult(num1,num2), div(num1,num2));
        return ('The result of the sum is: ' + results[0] +
        '\n The result of the rest is: ' + results[1] + '\n The result of the multiplication is: ' +
        results[2] + '\n The result of the division is: ' + results[3] );
    }
}

