let arr=[];

let username= prompt("Enter Your Name: ");
askG();
let order= prompt("Enter Your Order : shawarma, zinger, or burger");
let ordernmae= prompt("Enter Your Order Name: "); 
window.alert("Your order is being prepared!");

arr.push(username);
arr.push(gen);
arr.push(order);


for(let i=0; i<=2; i++) {
    console.log(arr[i]);
}



function askG() {
    let gen= prompt("Enter your Gender(Female/Male): ");
if(gen =="Male") {
    window.alert("Welcome Mr "+ username);
}else if(gen == "Female") {
    window.alert("Welcome Ms "+ username);
}else {
    window.alert("Welcome "+ username);
}
}






