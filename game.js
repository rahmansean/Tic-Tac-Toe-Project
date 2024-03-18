let boxes=$(".box");

const winPatters= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

console.log(Array.from(boxes));

Array.from(boxes).forEach((box)=>
{
    console.log("something");
    box.addEventListener("click",function()
    {
        console.log("clicked");
        box.innerText="X";
    })
});

$("#reset").click(function()
{
    console.log("clicked");
});