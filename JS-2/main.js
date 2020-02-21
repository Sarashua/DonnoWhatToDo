var sum1 = 0;
var sum2 = 0;
var i =0
var i =0

while( i < 100){
    if ( i%2 == 0){
    sum1 = sum1 + i;
    }
    i++ //การอัพเดต
}

console.log(sum1)

for(i = 0;i<100;i++){
   if ( i%3 == 0){
    sum2 = sum2 + i;
   }
   i++
}
console.log(sum2)

var a = ["Pikachu","Squirtle"];
window.onload = pageLoad;
function myFuntion(){
    alert ("hello");
}

function pageLoad(){
    // var clickButton = document.getElementById("clickme");
    // clickButton.onclick = myFuntion;

    var form = document.getElementById("myForm");
    form.onsubmit = myFormfuntion;
}
function myFormfuntion(){
    alert("OK");
}
