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
                chosenOperation = 'sum';
                break;
            case '-':
                chosenOperation = 'sub';
                break;
            case '*':
                chosenOperation = 'mul';
                break;
            case '/':
                chosenOperation = 'div';
                break;
            default:
                console.log('invalid operation');
                return ('error');
            }
    
        },

        getResult: async ()=>{
            if(operand1 && operand2 && chosenOperation){
                let result;

                fetch(`http://127.0.0.1:3000/calculator?op1=${operand1}&op2=${operand2}&opr=${chosenOperation}`)
                .then(response => response.json())
                .then(data => {console.log(data); result(data.result); console.log(result)})
            
                return new Promise((resolve)=>{
                    result = resolve;
                });
                
            }else{
                console.log('one or more fields are not set');
            }
            
            
        },

        clearCalculator: clearCalculator()
        
    })

}

export{Calculator}