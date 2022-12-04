// helloWorld function
function helloWorld() {
    return "Hello, World!";
}
function sayHello(input){
    if (input === true) { return "Hello, World!"
    }
     return "Hello, " + input + "!";
}

function isFive(x){
    if(x===5){
        return true
    }
    else{
        return false
    }
}



function isEven(input){
    if(false===input){
        return false
    }
    else if(input % 2===0 ){
        return true
    }
    else{
        return false
    }

}
function isVowel(input){
    let casing=input.toLowerCase()
    if(casing ===`a`||casing ===`e`||casing ===`i`||casing ===`o`||casing ===`u`){
        return true
    }
    else{
        return false
    }

}

function add(input,input2){
    let sum=Math.floor(input) + Math.floor(input2)
    if(sum===NaN){
        return NaN
    }
    else{
        return sum
    }
}



