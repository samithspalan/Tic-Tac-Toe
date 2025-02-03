let box=document.querySelectorAll(".box");
let turnX=true;
box.forEach(boxes => {
    boxes.addEventListener('click',()=>{
        if(turnX){
        boxes.innerText="X"
        turnX=false;

        }else{
        boxes.innerText="O"
        turnX=true;

        }
    }
    )
    
})