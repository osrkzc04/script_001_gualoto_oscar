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
            checkFizzBuzz(content,counter,divisorFizz,divisorBuzz)
            content.innerHTML=counter
            div.appendChild(content)
            counter++
        }
        container.appendChild(div)
    }
}

function checkFizzBuzz(square, number, divisorFizz, divisorBuzz) {
  const isFizz = number % divisorFizz === 0
  const isBuzz = number % divisorBuzz === 0

  if (isFizz && isBuzz) {
    addClass(square, "fizzBuzz")
    addClass(square, "fizz")
    addClass(square, "buzz")
  } else if (isFizz) {
    addClass(square, "fizz")
  } else if (isBuzz) {
    addClass(square, "buzz")
  }
}

document.addEventListener("DOMContentLoaded",function(){
    const container = document.querySelector(".container")
    createMatrix(5,container,2,3)
})



