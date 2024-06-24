let boxes = document.querySelectorAll(".box");
let msgDiv =document.querySelector(".msgDiv");
let msg=document.querySelector(".msg");
let newGame =document.querySelector(".newGame");
let ResetButton = document.querySelector("#resetBtn");
  let turnO = true;
  const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) =>{
    box.addEventListener("click",()=> {
        console.log("box was clicked");
        if(turnO){
             box.innerText='O';
            turnO = false;
        }else
        {
            //playerX
            box.innerText='X';
            turnO = true;}

            checkWinner();
    

    })
})
const checkWinner = () => {
    for ( let pattern of winPatterns){
      //  console.log[pattern[0]]
      let pos1val=boxes[pattern[0]].innerHTML;
      let pos2val=boxes[pattern[1]].innerHTML;
      let pos3val=boxes[pattern[2]].innerHTML;
      if(pos1val!="" &&pos2val!==""&&pos3val!==""){
        if(pos1val===pos2val&& pos2val===pos3val){
            console.log("winner");
            //document.write("winner");
            msgDisplay(pos1val);
        }
      }
    }
}
const msgDisplay=(winner)=>{
    msg.innerHTML= "CONGRATULATION"
    console.log(msg)
    msgDiv.classList.remove("hide");
    disable();
}
const disable=()=>{
    for (let button of boxes){
        button.disabled=true;
    }}

   const  resetFun=()=>{
        trueO=true;
        msgDiv.classList.add("hide");
        boxes.forEach((box) =>{box.innerText='';});
        enabled();
    }
    const enabled=()=>{
        button.disabled=false;
        button.innerHTML="";
    }
newGame.addEventListener("click" ,resetFun);
ResetButton.addEventListener("click",resetFun)



    


