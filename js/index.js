console.log("Hello")


let el = [...document.getElementsByClassName("portfolio-skills")]
el.forEach((element,index) => {
    element.addEventListener("click",()=>{
        alert("Olá")
    })
});