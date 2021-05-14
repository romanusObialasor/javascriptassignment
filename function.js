// for squarooting
function sqrt(){ 

    return Number(prompt("enter a number to be square-rooted"))**(1/2)
}

alert(sqrt())


// for multiplication

function mul(){
    let digit = prompt("first number to be multipied")
    let digit2 = prompt("second number to be multiplied")

    return digit*digit2
}

alert(mul())


// for division

function div(){
    let divident = prompt("enter number to be divided")
    let divisor = prompt("enter that is used to divide")

    return divident/divisor
}

alert(div())


// to uppercase

function allCaps(){
    let upper = prompt("enter a word to change it to a capital letter")
    let result = upper.toUpperCase()
    
    return result
}

alert(allCaps())


// to check if  a number is even or odd

function check(){
    let num = prompt("enter a number to check if even or odd")
    let num2 = num % 2
    let num3 = num2 == 0 ? "Your number is an even number":"You number is an odd number"

    return num3
}

alert(check())

