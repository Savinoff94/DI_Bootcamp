CREATE TABLE orders(
order_id SERIAL PRIMARY KEY,
order_date TIMESTAMP
)

CREATE TABLE items(
item_id SERIAL PRIMARY KEY,
order_id INTEGER REFERENCES orders(order_id) ON DELETE CASCADE,
name VARCHAR(50),
price REAL
)

Create a function that returns the total price for a 
given order.

CREATE FUNCTION take_price(num INTEGER)
	RETURNS REAL AS $$
BEGIN
	RETURN (SELECT SUM(price) FROM items GROUP BY order_id HAVING order_id=NUM);
END;
$$ LANGUAGE plpgsql;

