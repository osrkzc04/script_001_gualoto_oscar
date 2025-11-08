var a = 1
var b = 2
var c = a+b

console.log("El resultado es " + c)


function addClass(contenedorDiv,className){
    contenedorDiv.classList.add(className)
}

document.addEventListener("DOMContentLoaded",function(){
    const containerDivs = document.querySelectorAll(".content")
    containerDivs.forEach(element => {
        addClass(element,'juan')
    });
})



