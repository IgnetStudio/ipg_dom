// WAYS TO INITIALIZE FUNCTIONS

// function expression

const showMessage = function () {
    console.log('anonymous function scope');
}

showMessage();

// function declaration

function sumParams(x, y) {
    console.log(`named function return: param x value = ${x} + param y value = ${y}`);
    return x + y;
}

sumParams(3, 5);

// function constructor

const textAlert = new Function('text', 'console.log(`${text} display`);');

textAlert('constructed function');

// arrow function (always anonymous, parameters optional)

const defaultPrintInfo = (param1, param2) => {
    console.log(`arrow function with param1: ${param1} & param2: ${param2}`);
    return param1 + param2;
};

defaultPrintInfo('default param1', 'default param2');

// WAYS TO PLAY WITH FUNCTIONS

// assign by reference & invoke

const assignPrintInfo = defaultPrintInfo;
assignPrintInfo('assigned param1', 'assigned param2');

// undefined value, without parameter

let indexInteger = 0;
const plusOne = function () {
    indexInteger++;
}

// return value, with parameters & arguments

const divideTwice = function (number) {
    return number / 2;
}

console.log(`amount of required params: ${divideTwice.length}`);
divideTwice(7); // 3.5

const thirdPower = function (indexNo, indexPow) {
    const mathResult = Math.pow(indexNo, indexPow);
    console.log(`${indexNo} to ${indexPow} power is: ${mathResult}`);
    return mathResult;
}

console.log(`amount of required params: ${thirdPower.length}`);
thirdPower(2, 5); // arguments (value parameters)