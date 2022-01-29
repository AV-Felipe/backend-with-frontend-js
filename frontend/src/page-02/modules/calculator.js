function Calculator() {
    let operand1;
    let operand2;
    let chosenOperation;

    const clearCalculator = ()=>{
        operand2 = undefined;
        operand1 = undefined;
        chosenOperation = undefined;
    };

    return({
        setOperand1: (value)=>{
            const textValue = String(value);
            const valueA = Number(textValue.replace(/,/g, '.')); //regex for replacing all , with .
            if(isNaN(valueA) || value === ''){
                console.log('invalid value in operand1')
                return ('error')
            }else{
                operand1 = valueA;
                return(operand1);
            }
        },

        setOperand2: (value)=>{
            const textValue = String(value);
            const valueB = Number(textValue.replace(/,/g, '.')); //regex for replacing all , with .
            if(isNaN(valueB) || value === ''){
                console.log('invalid value in operand2')
                return ('error')
            }else{
                operand2 = valueB;
                return(operand2);
            }
        },

        setOperation: (operation)=>{

            switch (operation){
                case '+':
                chosenOperation = '+';
                break;
            case '-':
                chosenOperation = '-';
                break;
            case '*':
                chosenOperation = '*';
                break;
            case '/':
                chosenOperation = '/';
                break;
            default:
                console.log('invalid operation');
                return ('error');
            }
    
        },

        getResult: ()=>{
            if(operand1 && operand2 && chosenOperation){
                let result;
                switch (chosenOperation){
                    case '+':
                        result = operand1 + operand2;
                        console.log(result);
                        clearCalculator();
                        return(result);
                    case '-':
                        result = operand1 - operand2;
                        console.log(result);
                        clearCalculator();
                        return(result);
                    case '*':
                        result = operand1 * operand2;
                        console.log(result);
                        clearCalculator();
                        return(result);
                    case '/':
                        result = operand1 / operand2;
                        console.log(result);
                        clearCalculator();
                        return(result);
                    default:
                        console.log('wtf');
                        return ('error');
                }
                
            }else{
                console.log('one or more fields are not set');
            }
            
            
        },

        clearCalculator: clearCalculator()
        
    })

}

export{Calculator}