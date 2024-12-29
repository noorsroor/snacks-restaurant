//EX1----------------------------
let username= prompt("Enter Your Name: ");
let gen= prompt("Enter your Gender(Female/Male): ");
if(gen =="Male") {
    window.alert("Welcome Mr "+ username);
}else if(gen == "Female") {
    window.alert("Welcome Ms "+ username);
}else {
    window.alert("Welcome "+ username);
}

let order= prompt("Enter Your Order : shawarma, zinger, or burger");
let ordernmae= prompt("Enter Your Order Name: "); 
window.alert("Your order is being prepared!");

console.log("the order for " + username + " is " + order);

//Q2----------------------------
let num=7;
let result;

switch(num){
    case 1: 
    result="ONE";
    break;
    case 2: 
    result="TWO";
    break;
    case 3: 
    result="THREE";
    break;
    case 4: 
    result="FOUR";
    break;
    case 5: 
    result="FIVE";
    break;
    case 6: 
    result="SIX";
    break;
    case 7: 
    result="SEVEN";
    break;
    case 8: 
    result="EIGHT";
    break;
    case 9: 
    result="NINE";
    break;
    default:
    result="PLEASE TRY AGAIN"
}

console.log("the result: " +result);




