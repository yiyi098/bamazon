# bamazon

### Overview

This is a CLI mock demonstration of a customer ordering and checking out products from a store called Bamazon, which contains 10 products in stock.

The video below demonstrates what happens when the purchase is successful: 
[Demo of Customer Purchase](https://youtu.be/OYjUW4uJ5sE)

The customer is asked to specify the Item ID and number of units to buy the desired amount of product of interest. 
The purchase quantity will be subtracted from the Bamazon database, and the price of the purchase will be calculated.

The video below demonstrates what happens when the purhase is unsuccessful:
[Demo of Customer Error/Insufficient Stock](https://youtu.be/eHCEzvBLWC0)

If the customer enters an invalid Item ID, then the customer will be notified and asked to order again with a valid Item ID. 
If the customer's order is greater than the available stock quantity, then the customer will be notified and asked to place another order. 

### How to Run

Run bamazonCustomer.js through Node.JS in bash/terminal.

### Technologies

MySQL, Node.JS, JS, SQL

### Dependencies

mysql, inquirer

### Credits

Denis Wu, Trilogy




