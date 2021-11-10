// Question 1

var integers = Number(prompt("Enter Positive Number"));
var roundNumber = Math.round(integers);
var floorNumber = Math.floor(integers);
var ceilNumber = Math.ceil(integers);
if(integers>=0){
document.write("<br>Number: "+integers+"<br>");
document.write("<br>Round off Value:"+roundNumber+"<br>");
document.write("<br>Floor Value:"+floorNumber+"<br>");
document.write("<br>Ceil Value:"+ceilNumber+"<br>");

}else{
    document.write("please enter positive value")
}


// Question 2

var integers = Number(prompt("Enter Negative Number"));
var roundNumber = Math.round(integers);
var floorNumber = Math.floor(integers);
var ceilNumber = Math.ceil(integers);
if(integers<=0){
document.write("<br><br>Number: "+integers+"<br>");
document.write("<br>Round off Value:"+roundNumber+"<br>");
document.write("<br>Floor Value:"+floorNumber+"<br>");
document.write("<br>Ceil Value:"+ceilNumber+"<br>");

}else{
    document.write("please enter negative value");
}

// Question 3

var num = Number(prompt("Enter Number for Absolute"));
var absolute =Math.abs(num);
document.write("<br><br>The Absolute Value Of "+num +" is "+ absolute);


// Question 4

var rollDice = Math.floor(Math.random()*6+1);
document.write("<br><br>Random Dice Value: " +rollDice);
document.write("<br><br>Random Dice Value: " +rollDice);

// Question 5

 var rollDice = Math.floor(Math.random()*2+1);
 if (rollDice==2) {
    document.write("<br><br>"+rollDice+"<br>Random Coin Value: Heads ");
 } else {
    document.write("<br><br>"+rollDice+"<br>Random Coin Value: Tales ");
 }


// Question 6

var randomNumber = Math.floor(Math.random() * 100 + 1);
document.write("<br><br>" + "Random Number Between 1 & 100: " + randomNumber);


// Question 7

// var userWeight= Number(prompt("Enter Your Weight"));
// if (userWeight==Math.round(userWeight) || userWeight==Math.floor(userWeight)) {
//     document.write("<br><br>The weight of the user is"+userWeight +"");
//     document.write("<br><br>The weight of the user is"+userWeight +"Kilograms");
// } else {
//     document.write("Error")
// }

// Question 8
var userNumber= Number(prompt("Enter the Number between 1 and 10"));
var randomNumber = Math.floor(Math.random() * 10 + 1);
if (userNumber==randomNumber) {
    alert("Congratulate");
} else {
    alert("Try Again");
}
