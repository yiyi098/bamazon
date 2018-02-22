DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT(10) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100), 
  department_name VARCHAR(100), 
  price DECIMAL(50,2), 
  stock_quantity INT(100),
  PRIMARY KEY (item_id)
);