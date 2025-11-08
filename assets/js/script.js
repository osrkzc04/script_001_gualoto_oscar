function addClass(contenedorDiv,className){
    contenedorDiv.classList.add(className)
}

function createMatrix(dimension,container,divisorFizz,divisorBuzz){
    let counter =1 
    for(i=0;i<dimension;i++){
        const div = document.createElement("div")
        addClass(div,"demo")
        
        for(j=0;j<dimension;j++){
            const content = document.createElement("div")
            addClass(content,"content")
            fizz(divisorFizz,content,counter)
            buzz(divisorBuzz,content,counter)
            fizzBuzz(content,divisorFizz,divisorBuzz)
            content.innerHTML=counter
            div.appendChild(content)
            counter++
        }
        container.appendChild(div)
    }
}

function fizz(divisor,square,number){
    if(number%divisor==0){
        addClass(square,"fizz")
    }
}

function buzz(divisor,square,number){
    if(number%divisor==0){
        addClass(square,"buzz")
    }
}

function fizzBuzz(square,divisorFizz,divisorBuzz,number){
    if(number%divisorFizz==0 || number%divisorBuzz==0){
        addClass(square,".fizzBuzz")
    }
}

document.addEventListener("DOMContentLoaded",function(){
    const container = document.querySelector(".container")
    createMatrix(5,container,2,3)
})



