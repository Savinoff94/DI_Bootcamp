SELECT name FROM language

SELECT film.title, film.description, language.name
FROM film
LEFT JOIN language
ON film.language_id = language.language_id

SELECT film.title, film.description, language.name
FROM film
RIGHT JOIN language
ON film.language_id = language.language_id

CREATE TABLE new_film(
id SERIAL PRIMARY KEY,
name VARCHAR(50))

INSERT INTO new_film(name)
VALUES('Lord of the Rings'),
      ('Harry Potter'),
	  ('Durak')
SELECT * FROM new_film

CREATE TABLE customer_review(
review_id SERIAL PRIMARY KEY,
fk_filml_id INTEGER,
fk_language_id INTEGER,
FOREIGN KEY (fk_filml_id) REFERENCES new_film(id) ON DELETE CASCADE,
FOREIGN KEY (fk_language_id) REFERENCES language(language_id),
title VARCHAR(50),
score INTEGER CHECK (score <= 10),
review_text TEXT,
last_update timestamp
)

SELECT * FROM customer_review

INSERT INTO customer_review(
fk_filml_id,fk_language_id,title,score,review_text
)VALUES(
	(SELECT id FROM new_film WHERE name='Lord of the Rings'),
	(SELECT language_id FROM language WHERE name='English'),
	'Lord of the Rings',
	10,
	'Best of the Best'
)
INSERT INTO customer_review(
fk_filml_id,fk_language_id,title,score,review_text
)VALUES(
	(SELECT id FROM new_film WHERE name='Harry Potter'),
	(SELECT language_id FROM language WHERE name='English'),
	'Harry Potter',
	10,
	'vdsfdbfgnhgmjh,jgfds'
)

SELECT * FROM customer_review

DELETE FROM new_film WHERE name = 'Harry Potter'



