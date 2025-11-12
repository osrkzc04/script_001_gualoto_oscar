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


function btnGenerateOnClick(){
  const container = document.querySelector(".container")
  const inputDimension = document.getElementById("size").value
  const inputFizz = document.getElementById("fizz-divisor").value
  const inputBuzz = document.getElementById("buzz-divisor").value
  
  container.innerHTML=""
  createMatrix(inputDimension,container,inputFizz,inputBuzz)
}


document.addEventListener("DOMContentLoaded",function(){
    const bntGenerate = document.getElementById("generate-btn");
    bntGenerate.addEventListener("click",btnGenerateOnClick);
})

