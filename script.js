const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const zero = document.getElementById('zero')
const plus = document.getElementById('plus')
const times = document.getElementById('times')
const divide = document.getElementById('divide')
const equals = document.getElementById('equals')
const clear = document.getElementById('clear')
const minus = document.getElementById('minus')
const showDiv = document.getElementById('show')

let firstArg;
let secondArg;
let operation;

one.addEventListener('click', function(){
    showDiv.innerText += 1
})
two.addEventListener('click', function(){
    showDiv.innerText += 2

})
three.addEventListener('click', function(){
    showDiv.innerText += 3

})
four.addEventListener('click', function(){
    showDiv.innerText += 4

})
five.addEventListener('click', function(){
    showDiv.innerText += 5

})
six.addEventListener('click', function(){
    showDiv.innerText += 6

})
seven.addEventListener('click', function(){
    showDiv.innerText += 7

})
eight.addEventListener('click', function(){
    showDiv.innerText += 8

})
nine.addEventListener('click', function(){
    showDiv.innerText += 9
    
})
zero.addEventListener('click', function(){
    showDiv.innerText += 0
    
})
plus.addEventListener('click', function(){
    firstArg = showDiv.innerText
    clearAll()
    showDiv.innerText += '+'
    operation = '+'
    clearAll()

})
times.addEventListener('click', function(){
    firstArg = showDiv.innerText
    clearAll()
    showDiv.innerText += '*'
    operation = '*'
    clearAll()
})
divide.addEventListener('click', function(){
    firstArg = showDiv.innerText
    clearAll()
    showDiv.innerText += '/'
    operation = '/'
    clearAll()
})
minus.addEventListener('click', function(){
    firstArg = showDiv.innerText
    clearAll()
    showDiv.innerText += '-'
    operation = '-'
    clearAll()
})
clear.addEventListener('click', function(){
    clearAll()
})

equals.addEventListener('click', function(){
    equal()
})

function equal(){
    secondArg = showDiv.innerText
    console.log(firstArg);
    console.log(secondArg);
    // multiplication(firstArg,secondArg)
    if (operation == '+') {
        add(firstArg,secondArg)
    }
    else if(operation == '-'){
        subtract(firstArg,secondArg)
    }
    else if(operation == '/'){
        division(firstArg,secondArg)
    }
    else if(operation == '*'){
        multiplication(firstArg,secondArg)
    }
}
function clearAll() {
    showDiv.innerText = ''
}
function add(a,b) {
    let one = parseInt(a)
    let two = parseInt(b)
    showDiv.textContent = one + two
}
function subtract(a,b) {
    let one = parseInt(a)
    let two = parseInt(b)
    showDiv.textContent = one - two
}
function multiplication(a,b) {
    let one = parseInt(a)
    let two = parseInt(b)
    showDiv.textContent = one * two
}
function division(a,b) {
    let one = parseInt(a)
    let two = parseInt(b)
    showDiv.textContent = one / two
}