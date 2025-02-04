let box=document.querySelectorAll(".box");
let turnX=true;
let winnerCondition = [
    [0,1,2], [3,4,5], [6,7,8], // Rows
    [0,3,6], [1,4,7], [2,5,8], // Columns
    [0,4,8], [2,4,6]           // Diagonals
];

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
        checkWinner();
    })
    
})
function checkWinner(){
    for(let condition of winnerCondition){
        let box1=box[condition[0]].innerText;
        let box2=box[condition[1]].innerText;
        let box3=box[condition[2]].innerText;
        if(box1!=="" && box2!=="" && box3!=="" ){
            if(box1===box2 && box2===box3){
                console.log("winner");
            }
        }
    }
}