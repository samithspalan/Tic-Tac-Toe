let box=document.querySelectorAll(".box");
let turnX=true;
let clicksound=new Audio("mouse-click.mp3");
let turn1=document.querySelector(".x");
let turn2=document.querySelector(".o");
let msg=document.querySelector(".msg");
let res=document.querySelector("#winner");
let reset=document.getElementById("reset");
let winnersound=new Audio("winner.mp3");
let ng=document.getElementById("ng");


let winnerCondition = [
    [0,1,2], [3,4,5], [6,7,8], // Rows
    [0,3,6], [1,4,7], [2,5,8], // Columns
    [0,4,8], [2,4,6]           // Diagonals
];

reset.addEventListener('click',()=>{
    box.forEach((boxes) => {
        boxes.innerText="";
        boxes.style.pointerEvents = "auto";//if button then- boxes.disable=true;
        boxes.classList.remove("b-s");

    });
    msg.classList.add("hide"); 
    turnX = true;
    turn1.classList.add("bs"); 
    turn2.classList.remove("bs");
    
})
ng.addEventListener('click',()=>{
    box.forEach((boxes) => {
        boxes.innerText="";
        boxes.style.pointerEvents = "auto";//if button then- boxes.disable=true;
        boxes.classList.remove("b-s");


    });
    msg.classList.add("hide"); 
    turnX = true;
    turn1.classList.add("bs"); 
    turn2.classList.remove("bs");
})

box.forEach(boxes => {
    boxes.addEventListener('click',()=>{
        clicksound.play();
        if (boxes.innerText !== "") return;

        if(turnX){
        boxes.innerText="X";
        boxes.style.color="rgb(174,51,96)"
        turn2.classList.add("bs");
        turn1.classList.remove("bs");
        turnX=false;

        }else{
        boxes.innerText="O"
        boxes.style.color="rgb(251, 245, 247)"
        turn1.classList.add("bs");
        turn2.classList.remove("bs");
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
                showResult(box1);
                winnersound.play();
                disableGame(); 
                box.forEach((boxes) =>{
                    boxes.classList.add("b-s");
                });
                box[condition[0]].classList.remove("b-s");
                box[condition[1]].classList.remove("b-s");
                box[condition[2]].classList.remove("b-s");

            }
        }
    }
}
function showResult(result){
    msg.classList.remove("hide")
    res.innerText=result;
    if(result==="X"){
        res.style.color="rgb(174,51,96)";
    }else{
        res.style.color="rgb(251, 245, 247)"
    }

}
function disableGame() {
    box.forEach((boxes) => boxes.style.pointerEvents = "none");
}