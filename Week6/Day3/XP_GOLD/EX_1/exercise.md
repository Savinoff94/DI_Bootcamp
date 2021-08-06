-- Get a list of all rentals which are out 
-- (have not been returned). 
-- How do we identify these films in the database?
-- SELECT film.title FROM film
-- JOIN inventory
-- ON film.film_id=inventory.inventory_id
-- JOIN rental
-- ON inventory.inventory_id=rental.inventory_id
-- WHERE rental.return_date IS NULL

-- Get a list of all customers who 
-- have not returned their rentals. 
-- Make sure to group your results.
-- SELECT CONCAT(customer.first_name,' ',customer.last_name) AS customer_name
-- FROM customer
-- JOIN rental
-- ON customer.customer_id = rental.customer_id
-- WHERE rental.return_date IS NULL
-- GROUP BY customer.first_name,customer.last_name

-- Get a list of all the Action films with Joe Swank.

-- SELECT film.title FROM film
-- JOIN film_category
-- ON film_category.film_id=film.film_id
-- JOIN category
-- ON category.category_id=film_category.category_id
-- JOIN film_actor
-- ON film.film_id=film_actor.film_id
-- JOIN actor
-- ON film_actor.actor_id=actor.actor_id
-- WHERE category.name='Action' AND 
-- actor.first_name = 'Joe'
-- AND actor.last_name = 'Swank'

