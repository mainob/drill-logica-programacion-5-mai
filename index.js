//habilita prompt
//const prompt = require('prompt-sync')() 

//Crea variable prompt
let r = document.getElementById("result")
const form = document.getElementById("form")

let randomNum = Math.floor(Math.random() * 10)
let count = 0

form.addEventListener ("submit", (event) => {
    event.preventDefault()  
    let input = document.getElementById("num").value

    if (!isNaN(input)){
        if(randomNum!=input){
            r.textContent = "Ups, the secret number is incorrect, try again"
            count+=1
        }
        else {
            r.textContent = `Congratulations, Secret number is correct!! You failed ${count} times`
        }
    }
    else {
        alert("Incorrect type value")
    }
})
