-- Created the DB "BAmazon"
CREATE DATABASE Bamazon;
USE Bamazon;

-- Created the table "products" 
CREATE TABLE products (
  id int NOT NULL AUTO_INCREMENT,
  product_name varchar(150) NOT NULL,
  department_name varchar(150) NOT NULL,
  price INTEGER(10,2) NOT NULL,
  stock_quantity INTEGER(10) NOT NULL,
  PRIMARY KEY(id)
);

-- Inserted a set of records into the table
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Lenovo Laptop", "electronics", 500, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("IBM Laptop", "electronics", 350, 12);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Apple Laptop", "electronics", 1199, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("XBox", "gaming", 350, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Play Station", "gaming", 400, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Netendo WII", "gaming", 250, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Apple Iphone 7", "phone", 800, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Samsung Galaxy s8", "phone", 800, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Lenovo Laptop", "electronics", 750, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Apple Macbook Air", "electronics", 1500, 10);

