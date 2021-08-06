-- UPDATE film 
-- SET language_id = (SELECT language_id FROM language WHERE name = 'Mandarin')
-- WHERE film_id = 5

-- SELECT * FROM film 
-- JOIN language
-- ON film.language_id=language.language_id
-- WHERE film_id = 5

-- DROP TABLE customer_review

SELECT COUNT(*) AS not_RETURNED_YET FROM rental WHERE return_date IS NULL

SELECT title,replacement_cost FROM film
JOIN inventory
ON film.film_id = inventory.film_id
JOIN rental
ON inventory.inventory_id=rental.inventory_id
WHERE return_date IS NULL
ORDER BY film.replacement_cost DESC
LIMIT 30

SELECT film.title, film.description, actor.first_name, actor.last_name
FROM film
JOIN film_actor
ON film.film_id=film_actor.film_id
JOIN actor
ON film_actor.actor_id = actor.actor_id
WHERE film.description ILIKE '%sumo wrestler%' AND 
actor.first_name = 'Penelope'
AND actor.last_name = 'Monroe'

SELECT film.title, film.description FROM film
WHERE rating = 'R' 
AND length < 60 
AND film.description ILIKE '%documentary%'

A film that his friend Matthew Mahan rented.
He paid over $4.00 for the rental,
and he returned it between the 28th of July and 
the 1st of August, 2005.

SELECT customer_id WHERE 
first_name = 'Matthew' AND
last_name = 'Mahan'

A film that his friend Matthew Mahan rented. 
He paid over $4.00 for the rental, and he returned 
it between the 28th of July and the 1st of August, 
2005.

SELECT film.title, payment.amount,customer.first_name,customer.last_name,rental.return_date FROM film
JOIN inventory
ON film.film_id = inventory.film_id
JOIN rental
ON inventory.inventory_id = rental.inventory_id
JOIN payment
ON rental.customer_id = payment.customer_id
JOIN customer
ON rental.customer_id = customer.customer_id
WHERE 
payment.amount > 4
AND customer.first_name = 'Matthew'
AND customer.last_name = 'Mahan'
AND rental.return_date BETWEEN '28/07/2005' AND '01/08/2005';

SELECT *
FROM inventory
JOIN rental
ON inventory.inventory_id = rental.inventory_id
JOIN film
ON inventory.film_id = film.film_id
WHERE rental.customer_id = (SELECT customer.customer_id FROM customer WHERE first_name = 'Matthew' AND last_name = 'Mahan')
AND (film.description ILIKE '%boat%' OR film.title ILIKE '%boat%')
ORDER BY film.replacement_cost DESC LIMIT 1








