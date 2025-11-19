function addClass(contenedorDiv,className){
    contenedorDiv.classList.add(className)
}

function createMatrix(dimension,container,divisorFizz,divisorBuzz){
    let counter =1 
    for(i=0;i<dimension;i++){
        const div = document.createElement("div")
        addClass(div,"flex")
        addClass(div,"flex-row")
        addClass(div,"space-x-4")
        addClass(div,"leading-6")
        addClass(div,"font-bold")
        addClass(div,"mb-4")

        for(j=0;j<dimension;j++){
            const content = document.createElement("div")
            addClass(content,"flex")
            addClass(content,"h-30")
            addClass(content,"w-30")
            addClass(content,"basis-64")
            addClass(content,"items-center")
            addClass(content,"justify-center")
            addClass(content,"rounded-lg")
            
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
    addClass(square, "bg-cyan-500")
    addClass(square, "hover:bg-cyan-800")
    addClass(square, "text-white")
  } else if (isFizz) {

    addClass(square, "bg-indigo-500")
    addClass(square, "hover:bg-indigo-800")
    addClass(square, "text-white")

  } else if (isBuzz) {
    addClass(square, "bg-pink-500")
    addClass(square, "hover:bg-pink-800")

    addClass(square, "text-white")
  }
  else {
    addClass(square,"bg-slate-200")
    addClass(square,"hover:bg-slate-300")
  }
}


function btnGenerateOnClick(){
  const container = document.querySelector("#container")
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

