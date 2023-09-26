let dox = document.querySelector(".col1");
dox.addEventListener("click",function(){
    dox.classList.toggle("col11")
    if(dox<0 || "col11"){
        dox.classList.toggle("col11"+"none")
    }
})
let fox = document.querySelector(".col2");
fox.addEventListener("click",function(){
    fox.classList.toggle("col22")
    if(fox<0 || "col11"){
        fox.classList.toggle("col22"+"none")
    }
})
let box = document.querySelector(".col3");
box.addEventListener("click",function(){
    box.classList.toggle("col33")
    if(box<0 || "col33"){
        box.classList.toggle("col33"+"none")
    }
})