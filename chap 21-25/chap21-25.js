// Question 1

var userFirstName = prompt("Enter Your First Name ");
var userLastName = prompt("Enter Your Last Name ");
var fullName = userFirstName+" " + userLastName;
alert(fullName);

// Question 2

var mobile_Phone = prompt("Enter Your Favourite Mobile Phone Name ");
var length= mobile_Phone.length;
document.write("<br>My Favourite Mobile Phone is: "+mobile_Phone);
document.write("<br>Length of string is: "+length);

// Question 3

var letter_Index="Pakistani";
document.write("<br><br>String: "+letter_Index+"<br>");
document.write("Index of 'n': "+letter_Index.indexOf("n"));

// Question 4

var letter_Index1="Hello World";
document.write("<br><br>String: "+letter_Index1+"<br>");
document.write("Last index of 'l': "+letter_Index1.lastIndexOf("l"));

// Question 5 

var letter_Index2="Pakistani";
var takeNum = Number(prompt("Enter the index number you want "));
document.write("<br><br>String: "+letter_Index2+"<br>");
document.write("Character at index "+takeNum+":" +letter_Index2.charAt(takeNum));

// Question 6

var userFirstName = prompt("Enter Your First Name ");
var userLastName = prompt("Enter Your Last Name ");
var fullName =[userFirstName.concat(userLastName)];
alert(fullName.join(" "));

// Question 7

var cities = prompt("Enter The City");
var cities2 = prompt("Enter The city you want to replace");
citychange = cities.replace(cities,cities2);
document.write("<br><br>City: "+cities);
document.write("<br>After Replacement: "+citychange);

// Question 8

var message = "Ali and Sami are best friends.They play cricket and football together.";
var messageReplace = message.replace(/and/g,"&");
document.write("<br><br>Message: "+message);
document.write("<br>Replace Message: "+messageReplace);

// Question 9

var number = "472";
document.write("<br><br>Value: " + number+"<br>Type: "+ typeof number);
document.write("<br>Value: " + number+"<br>Type: "+ typeof Number(number));

// Question 10

var words = prompt("Enter  the word you want to capatilize");
var capital_Words = words.toUpperCase();
document.write("<br><br>User Input: "+words);
document.write("<br>Upper case: "+capital_Words);

// Question 11

var wordS = prompt("Enter the word you want to capital the first letter");
var capital_WordS = wordS.charAt(0).toUpperCase()+wordS.slice(1);
document.write("<br><br>User Input: "+wordS);
document.write("<br>Title case: "+capital_WordS);

// Question 12

var num = 35.36 ;
var numString = num.toString().replace(".","");
document.write("<br><br>Number: "+num);
document.write("<br>Result: "+numString);

// Question 13


var userName = prompt("Enter Your Name: ");
var message;
var split=[];
var arr=[];
for(var i=0;i<userName.length;i++)
{
    split[i]=userName.split("&nbsp;");
    arr[i]=userName.charCodeAt(i);
    if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
    {
            message="Correct User Name";
    }
    while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
    {
        alert("Please enter a valid userName");                                                                                                                   
        userName=prompt("Enter your Name: ");
        for(var i=0;i<userName.length;i++)
        {
            split[i]=userName.split("&nbsp;");
            arr[i]=userName.charCodeAt(i);
            if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
            {
                break;
            }
        }
    }

}
alert(message);

// Question 14

var bakeryItems = ["Cake", "Apple pie", "Cookie", "Chips", "Patties"];
var searchItems = prompt("Enter The bakkery item you want");
var lowerCase = searchItems.charAt(0).toUpperCase()+searchItems.slice(1).toLowerCase();
var bake = true;
for (var i = 0; i < bakeryItems.length; i++) {
    if (lowerCase === bakeryItems[i]) {
        document.write(lowerCase+ " is <strong>Available</strong> at index " + i + " is " + bakeryItems[i] + "<br>");
        bake = false;
    }
}
if (bake === true) {
    document.write("We are Sorry " + lowerCase + " is <strong>Not Available</strong> in our bakkery " + "<br>");
}

// Question 15

var userPassword = prompt("Enter Password");
var firstWord = parseInt(userPassword.charAt());
var password = true;

for (i = 0; i < userPassword.length; i++) {
    if (userPassword[i] == firstWord) {
        alert("Password Should not Start with numbers ");
        password = false;
    }
}
if (password === true) {
    alert("Correct ");
}
if (userPassword == "") {
    alert("Please Enter  Your Password");
} else if ((userPassword.length < 6) || (userPass.length > 12)) {
    alert("password must be between 6 and 12 character")
} else ("error");
// Question 16

var university = "University of Karachi";

for(i=0; i<university.length; i++){
    document.write(university[i]+"<br>");
}

// Question 17

var user = "Pakistan";
var userLastchar = user.charAt(7);
document.write("<br><br>User Input: " + user);
document.write("<br>Last Character of Input: " + userLastchar);

// Question 18

var text = "The quick brown fox jumps over the lazy dog";
var occurances = (text.toLowerCase().match(/the/g)).length;
document.write("<br><br>Text: " + text);
document.write("<br>There are " + occurances + " of the word 'the'");
