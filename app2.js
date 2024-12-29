//EX2----------------------------
let gender =prompt("Enter your gender(Female/Male): ");

while(gender!=="Male" && gender!=="Female"){
    gender =prompt("Invalid Input ,Please Enter the correct Gender again(Female/Male): ");
}
window.alert("Thank you ❤️🎉🎉");


//Q1----------------------------
let i;
for(i=0; i<=5; i++){
    window.alert(i);
}

//Q4
let num =parseInt(prompt("Enter a number in the range (0-100): "));

while(num<0 || num>100){
    num =prompt("Invalid Input ,Please Enter a number in the range (0-100): ");
}
window.alert("Thank you ❤️🎉🎉" + "your number is :"+ num);


//Q5
let x=prompt("Enter Your Number: ");
let sum=0;

for(i=0; i<=x; i++){
    sum+=i;
}

window.alert("the sum: "+ sum);
