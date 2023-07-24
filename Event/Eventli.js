let a=document.getElementById("btn1");
a.addEventListener=("click",()=>{
    document.body.style.backgroundColor="green"
})

let b=document.getElementById("btn2");
b.addEventListener("keydown",()=>{
    document.body.style.backgroundColor="blue"
})

b.addEventListener("keyup",()=>{
    document.body.style.backgroundColor="red"
})