-- SELECT * FROM customer
-- SELECT CONCAT(first_name,' ', last_name) AS full_name from customer
-- SELECT DISTINCT create_date FROM customer
-- SELECT first_name, last_name, email FROM customer ORDER BY first_name DESC 
-- SELECT film_id, title, description, rental_rate FROM film ORDER BY rental_rate ASC
-- SELECT address, district, phone FROM address WHERE district = 'Texas'
-- SELECT film_id, title, description, rental_rate FROM film WHERE film_id = 15 OR film_id = 150
-- SELECT film_id, title, description, rental_rate FROM film WHERE title = 'Forest Gump'
-- SELECT film_id, title, description, rental_rate FROM film WHERE title LIKE 'Fo%'
-- SELECT title,replacement_cost,film_id FROM film ORDER BY replacement_cost ASC LIMIT 10
-- SELECT title,replacement_cost,film_id FROM film ORDER BY replacement_cost ASC OFFSET 11 LIMIT 10
-- SELECT payment.amount,customer.customer_id, payment.payment_date, customer.first_name, customer.last_name 
-- FROM customer 
-- JOIN payment
-- ON payment.customer_id=customer.customer_id
-- ORDER BY customer.customer_id ASC

-- SELECT film.title FROM film
-- WHERE film.film_id NOT IN
-- (SELECT film_id FROM inventory)

-- SELECT city.city, country.country FROM city
-- JOIN country
-- ON city.country_id = country.country_id


