// create variable for the welcome message
var greeting = 'Hello ';
var name = 'ricky';
var message = ' please check your order.';
//Concatenate the three variable above to create the wellcome message
var welcome = greeting + name + message;
//Create variable to hold details about the sign
var sign ='Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;
console.log(sign);
console.log(tiles);
console.log(subTotal);
console.log(shipping);
console.log(grandTotal);

//Get the element that has an id of greeting 
var el = document.getElementById('greeting');
//replace the contente of that element with the personalized welcome message
el.textContent = welcome;


//get the element that has an id of userSign then update its contents
var elSign = document.getElementById('userSign');
elSign.textContent = sign;


//get the element that has an id of tiles then update its contents
var elTiles = document.getElementById('tiles');
elTiles.textContent = 'Qty = ' + tiles;


//get the element that has an id of subtotal then update its contents
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;


//get the element that has an id of shipping then update its contents
var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;


//get the element that has an id of grandtotal then update its contents
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;