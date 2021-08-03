SELECT * FROM customers
SELECT * FROM items

SELECT * FROM items ORDER BY price ASC
SELECT * FROM items WHERE price >= 80 ORDER BY price DESC

SELECT * FROM customers ORDER BY firstname ASC LIMIT 3

SELECT secondname FROM customers ORDER BY secondname DESC

ALTER TABLE customers ADD customer_id SERIAL PRIMARY KEY 

ALTER TABLE items ADD customer_id SERIAL PRIMARY KEY 

SELECT * FROM items
CREATE TABLE purchases (
customer_id int NOT NULL,
item_id int NOT NULL,
FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
FOREIGN KEY (item_id) REFERENCES items(item_id)
)

INSERT INTO purchases (customer_id, item_id)
VALUES (1,3),(2,1),(2,2),(5,1),(1,3)
INSERT INTO purchases (customer_id, item_id)
VALUES (4,1)

SELECT * FROM purchases

SELECT items.item, customers.firstname,customers.secondname
FROM items
JOIN purchases ON
items.item_id = purchases.item_id
JOIN customers ON
customers.customer_id = purchases.customer_id

SELECT items.item, customers.firstname,customers.customer_id, customers.secondname
FROM items
JOIN purchases
ON items.item_id = purchases.item_id
JOIN customers
ON customers.customer_id = purchases.customer_id
WHERE customers.customer_id = 4

SELECT items.item, customers.firstname,customers.customer_id, customers.secondname
FROM items
JOIN purchases
ON items.item_id = purchases.item_id
JOIN customers
ON customers.customer_id = purchases.customer_id
WHERE items.item = 'Large desk' OR items.item = 'Small Desk'

INSERT INTO items (item,price) VALUES('Hard drive', 150)

INSERT INTO purchases (item_id, customer_id)VALUES(
(SELECT item_id FROM items WHERE item = 'Hard drive'),
(SELECT customer_id FROM customers WHERE firstname = 'Scott' AND secondname = 'Scott')
)

SELECT items.item, customers.firstname, customers.secondname
FROM items
JOIN purchases
ON items.item_id = purchases.item_id
JOIN customers
ON customers.customer_id = purchases.customer_id


