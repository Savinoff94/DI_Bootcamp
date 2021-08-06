SELECT first_name AS "First Name", last_name AS "Last Name" FROM employees

SELECT DISTINCT department_id FROM employees

SELECT * FROM employees ORDER BY first_name DESC

SELECT first_name, last_name, salary, (salary*0.15) AS PF
FROM employees

SELECT first_name, last_name, salary
FROM employees ORDER BY salary ASC

SELECT SUM(salary) FROM employees

SELECT MAX(salary) AS max_salary, MIN(salary) AS min_salary FROM employees

SELECT ROUND(AVG(salary),2) AS avg_salary FROM employees

SELECT COUNT(*) FROM employees


SELECT CONCAT(first_name,' ',last_name) FROM employees

SELECT UPPER(first_name) FROM employees

SELECT SUBSTRING(first_name,1,3) FROM employees

SELECT CONCAT(first_name,' ',last_name) AS "full name", LENGTH(CONCAT(first_name,' ',last_name)) AS "length" FROM employees

SELECT first_name FROM employees WHERE first_name LIKE '%[0-9]%'

SELECT * FROM employees LIMIT 10

SELECT first_name, last_name, salary FROM employees WHERE salary BETWEEN 10000 AND 15000

SELECT first_name, last_name,hire_date FROM employees 
WHERE EXTRACT(YEAR FROM hire_date) = 1987

SELECT first_name FROM employees WHERE first_name ILIKE '%c%' AND first_name ILIKE '%e%'

SELECT * FROM employees
JOIN jobs
ON employees.job_id=jobs.job_id
WHERE 
employees.salary != 4500 AND
employees.salary != 10000 AND 
employees.salary != 15000 AND
jobs.job_title != 'Programmer' AND
jobs.job_title != 'Shipping Clerk'

SELECT last_name FROM employees
WHERE LENGTH(last_name)=6

SELECT last_name,first_name FROM employees
WHERE first_name ILIKE '__e%'

SELECT first_name,last_name, job_title FROM employees
JOIN jobs
ON employees.job_id=jobs.job_id

SELECT * FROM employees 
WHERE last_name = 'Jones' OR
last_name = 'Blake' OR
last_name = 'SCOTT' OR
last_name = 'FORD'









