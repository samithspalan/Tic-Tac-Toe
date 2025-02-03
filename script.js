let box=document.querySelectorAll(".box");
let turnX=true;
let winnerCondition=[
    [1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]
]
box.forEach(boxes => {
    boxes.addEventListener('click',()=>{
        if(turnX){
        boxes.innerText="X";
        boxes.style.color="rgb(174,51,96)"
        turnX=false;

        }else{
        boxes.innerText="O"
        turnX=true;

        }
        
    })
    
})