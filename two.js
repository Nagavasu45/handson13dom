var res =document.getElementById("text").textContent;

document.getElementById("text1").textContent="output = "+res;
function callreplaced(){
    document.getElementById("test1").innerHTML="Welcome To elevation Academy"
}
var opt1=document.getElementsByClassName("test2")
opt1[0].style.color="red";
opt1[0].setAttribute("id", "heading");
function changeflexdirection(){
    document.getElementsByClassName("main")[0].style.flexDirection="column";
}
function localtime(){


var time=new Date();
console.log(time.toLocaleTimeString())
document.getElementById('time1').innerHTML=time.toLocaleTimeString();
}
setInterval(localtime,1000);