/*let h2=document.querySelector("h2");
console.log(h2.innerText);
h2= h2.innerText+"  From apna  clg";
document.writeln(h2)
document.writeln("hello everyone")*/

let box= document.querySelectorAll(".box");
let i=1
for(div of box){
    div.innerText=`box number is ${i}`
    i++
}