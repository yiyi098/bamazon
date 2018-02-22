//////////Initialize NPM///////////////////////
var mysql = require("mysql");
var inquirer = require("inquirer");
///////////////////////////////////////////////

///////////Variables///////////////////////////
var id;
var quantityBuy;
var stockQuantity = 0;
var price = 0;
///////////////////////////////////////////////


////////Initialize Connection to Database//////
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon_db"
});
//////////////////////////////////////////////

/////////////////Functions////////////////////
function showProducts() {
  var query = "SELECT item_id,product_name,price FROM products";
  connection.query(query, function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log('<Item ID: ' + res[i].item_id + '>  <' + 'Product: ' + res[i].product_name + ' ## ' + 'Price: ' + res[i].price + '>');
    }
    runCustomerPurchase();
  });
}

function runCustomerPurchase() {
  inquirer
    .prompt([{
      name: "id",
      type: "input",
      message: "Please enter the Item ID you would like to buy:"
    }, {
      name: "quantity",
      type: "input",
      message: "Please enter the number of units you would like to buy:"
    }]).then(function(answer) {
      id = answer.id;
      quantityBuy = answer.quantity;
      console.log('You have selected Item ID: ' + id);
      console.log('You are trying to buy this many: ' + quantityBuy);
      orderCheck();
    });
}

function orderCheck() {
  var query = "SELECT item_id,stock_quantity,price FROM products WHERE item_id = ?";
  connection.query(query, [id], function(err, res) {
    if (err) throw err;
    if (res.length == 0) {
      console.log('Invalid Product ID! Please purchase something else.');
      showProducts();
    } else if (res.length != 0) {
      stockQuantity = res[0].stock_quantity;
      price = res[0].price;
      if (quantityBuy > stockQuantity) {
        console.log('Insufficient quantity! Please purchase something else.');
        showProducts();
      } else {
        checkingOut();
      }
    }
  });
}

function checkingOut() {
  console.log('Checking out your purchase!');
  var query = "UPDATE products SET stock_quantity = ? WHERE item_id = ?";
  connection.query(query, [(stockQuantity - quantityBuy), id], function(err, res) {
    if (err) throw err;
    console.log('Thank you for your purchase of $' + Number(quantityBuy * price).toFixed(2) + "!");
    console.log('Would you like to purchase anything else?')
    showProducts();
  });
}

/////////////////////////////////////////////////////

///////Initialize Product Listings///////////////////
connection.connect(function(err) {
  if (err) throw err;
  console.log('What would you like to buy?');
  showProducts();
});
/////////////////////////////////////////////////////