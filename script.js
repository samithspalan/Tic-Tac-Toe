let box=document.querySelectorAll(".box");
box.forEach(boxes => {
    boxes.addEventListener('click',()=>{
        boxes.innerText="X"
    }
    )
    
})