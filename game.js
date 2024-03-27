let boxes = $(".box");
const winPatters = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let turn0 = true;
let count=0;
for(let box of boxes){
  box.addEventListener("click", function () {
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
      count++;
      console.log(count);
    } else {
      box.innerText = "X";
      turn0 = true;
      count++;
      console.log(count);
    }
    box.disabled=true;
    checkWinner();
  });
}

$("#reset").click(function () {
    $(".msg-container").addClass("hide");
    enableBoxes();
    count=0;
});

const checkWinner = () => {
  for (let patterns of winPatters) {
    let pattern1Val = boxes[patterns[0]].innerText;
    let pattern2Val = boxes[patterns[1]].innerText;
    let pattern3Val = boxes[patterns[2]].innerText;
    if (pattern1Val != "" && pattern2Val != "" && pattern3Val != "") {
      if(count===9)
      {
        $("#msg").text('Draw. No Winner!');
        $(".msg-container").removeClass("hide");
        disableBoxes();
      }
      if (pattern1Val === pattern2Val && pattern2Val === pattern3Val && pattern1Val === pattern3Val) {
        showWinner(pattern1Val);
        console.log(boxes[patterns[0]],boxes[patterns[1]],boxes[patterns[2]])
        boxes[patterns[0]].text="hello";
        //console.log(boxes[patterns[0]].addClass("color"));
        disableBoxes();
      }
    }
  }
};

const showWinner= (winner) =>
{
    $("#msg").text(winner+' is the winner');
    $(".msg-container").removeClass("hide");
}
const disableBoxes= () =>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const enableBoxes= () =>
{
    for(let box of boxes)
    {
        box.disabled=false;   
        box.innerText="";
        turn0 = true;
    }
}
