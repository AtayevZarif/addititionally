let burger = document.querySelector(".lines")
let ul = document.querySelector("ul")


let burgerFunction = () =>{
    ul.classList.toggle("burger")
}


burger.addEventListener("click", burgerFunction)