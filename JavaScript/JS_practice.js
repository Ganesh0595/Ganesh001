function calculator(num1,num2,opration){
    var sum;
    if(opration == 'Addition'){
        sum = num1 + num2;
    }else if(opration == 'Substraction'){
        sum = num1 - num2;
    }else if(opration == 'Multiplication'){
        sum = num1 * num2;
    }else if(opration == 'Division'){
        sum = num1 / num2;
    }else{ 
    }
    console.log(opration + " of Two Number is "+ sum);

}
calculator(20,5,'Addition');
calculator(20,5,'Substraction');
calculator(20,5,'Multiplication');
calculator(20,5,'Division');
