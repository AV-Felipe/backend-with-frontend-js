import { Calculator } from "./modules/calculator.js";

const numberPadArea = document.getElementById('numberPad');
const operationPadArea = document.getElementById('operationsPad');
const calculatorDisplay = document.getElementById('calculatorDisplay');

numberPadArea.addEventListener('click', readButtonValue);
operationPadArea.addEventListener('click', getOperation);

let values = ['', ''];
let operator = '';

let result = 0;

let calculator = Calculator();

// set the value for the current operator (operatorA = values[0] / operatorB = values[1])
function readButtonValue(event){
    
    let valueIndex

    if(operator !== ''){
        valueIndex = 1;
    }else{
        valueIndex = 0;
    }
    
    
    if(event.target.type === 'button'){
        if(event.target.value !== 'change-sign'){
            values[valueIndex] += event.target.value;
            calculatorDisplay.innerText = values[valueIndex];
            console.log(values[valueIndex])
            console.log(typeof values[valueIndex])
        }else{
            if(values[valueIndex][0] === '-'){
                values[valueIndex] = values[valueIndex].substring(1)
            }else{
                values[valueIndex] = '-' + values[valueIndex]
            }
            calculatorDisplay.innerText = values[valueIndex];
            console.log(values[valueIndex])
        }
        
    }
}

function getOperation(event){
    console.log(event.target.id)


    if(event.target.type === 'button'){

        if(event.target.id.includes('sign')){
            if(values[0] !== ''){
                operator = event.target.value;
                calculatorDisplay.innerText = operator;
                calculator.setOperand1(values[0]);
                calculator.setOperation(operator);
            }
        }

        if(event.target.id.includes('clear')){
            if(event.target.value === 'clear-operation'){
                values[0] = '';
                values[1] = '';
                operator = '';
                calculatorDisplay.innerText = '';
            }else if(operator !== ''){
                values[1] = '';
                calculatorDisplay.innerText = '';
            }else{
                values[0] = '';
                calculatorDisplay.innerText = '';
            }
        }

        if(event.target.id === 'equalsButton'){

            if(values[0] !== '' && values[1] !== ''){
                calculator.setOperand2(values[1]);
                result = calculator.getResult();
                console.log(result);
                calculatorDisplay.innerText = result;
                values[0] = '';
                values[1] = '';
                operator = '';
            }
        }
    }

}