// let arr=[];

// let username= prompt("Enter Your Name: ");
// let gen= prompt("Enter your Gender(Female/Male): ");
// askG(gen);
// let order= prompt("Enter Your Order : shawarma, zinger, or burger");
// let ordernmae= prompt("Enter Your Order Name: "); 
// window.alert("Your order is being prepared!");

// let age= prompt("Enter Your Age: "); 

// arr.push(username);
// arr.push(gen);
// arr.push(order);


// for(let i=0; i<=2; i++) {
//     console.log(arr[i]);
// }



// function askG(gen) {
// if(gen =="Male") {
//     window.alert("Welcome Mr "+ username);
// }else if(gen == "Female") {
//     window.alert("Welcome Ms "+ username);
// }else {
//     window.alert("Welcome "+ username);
// }
// }


// //call div
// let div=document.getElementById('container');


// //create elements
// let nameHtml= document.createElement('p');
// let list= document.createElement('ol');
// let genHtml= document.createElement('li');
// let ageHtml= document.createElement('li');
// let orderHtml= document.createElement('li');
// let hero= document.createElement('h3');

// //add content
// nameHtml.textContent = username;
// genHtml.textContent = "Gender: "+gen;
// ageHtml.textContent = "Age: "+age;
// orderHtml.textContent = "Order: "+order;
// hero.textContent = "hello this is the hero";


// //append to html
// div.appendChild(nameHtml);
// nameHtml.append(list);
// list.appendChild(genHtml);
// list.appendChild(ageHtml);
// list.appendChild(orderHtml);
// div.prepend(hero);



document.getElementById('submitBtn').addEventListener('click', () => {
    // Get inputs values-------
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const orderName = document.getElementById('ordername').value;

    //radio button-----------
    const orderType = document.querySelector('input[name="orderType"]:checked');
    const selectedOrderType = orderType ? orderType.value : "No order type selected";

    // checkboxes---------
    const orderOptions = [];
    document.querySelectorAll('input[name="orderOption"]:checked').forEach(option => {
        orderOptions.push(option.value);
    });

    // Display outpur----------
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <p>Name: ${name}</p>
        <p>Age: ${age}</p>
        <p>Gender: ${gender}</p>
        <p>Order Name: ${orderName}</p>
        <p>Order Type: ${selectedOrderType}</p>
        <p>Order Options: ${ orderOptions.join(', ')}</p>
    `;

});





