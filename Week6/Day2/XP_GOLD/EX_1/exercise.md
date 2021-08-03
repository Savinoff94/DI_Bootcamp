SELECT rating,COUNT(*) AS number 
FROM film
GROUP BY rating

SELECT title FROM film WHERE rating = 'PG-13' 
AND length < 120 AND rental_rate < 3
ORDER BY title ASC

Now find the customer’s address, and use UPDATE to
change the address to your address (or make one up).

UPDATE customer
SET first_name = 'Andrei',
last_name = 'Savinov'
WHERE customer_id = 23

UPDATE address
SET address = 'Gyvataim'
WHERE address_id = (SELECT address_id FROM customer WHERE customer_id = 23)
