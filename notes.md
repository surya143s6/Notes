# History of Browser

1. mosaic
2. netscape
3. ie
4. opera
5. safari
6. firefox
7. chrome
   
## First Browser war

1. netscape vs Ie 
2. ie vs chrome
3. final chrome
   
## Difference between webapplication and website

1. Websites
   
- Websites are only viewing content
- shows only information
- example: News site,blog,company website

2. web application
   
- you can interact with web application 
- web applications are built for doing tasks and user actions
- example: gmail,facebook
  
## Three architecture

  1. Front end
  2. Back end
  3. Database

## Ip address

- ip address is a unique number given to every device on a network so they can identify and communicate with each other

## Ipv4 and Ipv6 Difference

1. Ipv4
   
- 32 bit address


-
## Dns into Ip Address

1. domain name system is like the phonebook of the internet
2. computer needs ip address to connect the website server

## Tcp vs Udp



## Day-16

## Flex article link
1. https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/
2. https://www.flexboxgame.com/
3. https://bennettfeely.com/clippy/
   
# flex
main for row - Justify content
cross for row  - Align Items, align self also working 

- fr stands for Fractional unit 1:1



  # Excercise 1 - Tasks

  - Find the title of each film
  ```
  SELECT title FROM movies;
  ```
  - Find the director of each film
  ```
  SELECT director FROM movies;
  ```
  - Find the title and director of each film
  ```
  SELECT title, director FROM movies;
  ```
  - Find the title and year of each film
  ```
  SELECT title, year FROM movies;
  ```
  - Find all the information about each film
  ```
  SELECT * FROM movies;
  ```
  
  ## Screenshot

  ![alt text](<Screenshot 2026-02-25 160917.png>)

# Excercise -- 2

- Find the movie with a row id of 6
```
SELECT * 
FROM movies
WHERE id=6;
```
- Find the movies released in the years between 2000 and 2010
```
SELECT * 
FROM movies 
WHERE year BETWEEN 2000 and 2010;
```
- Find the movies not released in the years between 2000 and 2010
```
SELECT * 
FROM movies 
WHERE year not BETWEEN 2000 and 2010;
```
- Find the first 5 Pixar movies and their release year
```
SELECT * 
FROM movies 
WHERE year BETWEEN 1995 and 2003;
```

## screenshot 2

![alt text](<Screenshot 2026-02-25 164135.png>)

# Excercise 3

- Find all the Toy Story movies 
```
SELECT * 
FROM movies
WHERE title like "Toy Story%";
```
- Find all the movies directed by John Lasseter
```
SELECT * 
FROM movies 
WHERE director = "John Lasseter";
```
- Find all the movies (and director) not directed by John Lasseter
```
SELECT * 
FROM movies 
WHERE director != "John Lasseter";
```

- Find all the WALL-* movies
```
SELECT * 
FROM movies 
WHERE title like "WALL-_";
```

# Exercise 4

- List all directors of Pixar movies (alphabetically), without duplicates
  ```
  SELECT  distinct director FROM  movies ORDER by director;
  ```
- List the last four Pixar movies released (ordered from most recent to least)
  ```
  SELECT DISTINCT title FROM movies ORDER BY year DESC LIMIT 4
  ```
- List the first five Pixar movies sorted alphabetically
  ```
  SELECT DISTINCT title FROM movies ORDER BY title asc LIMIT 5;
  ```
- List the next five Pixar movies sorted alphabetically
  ```
  SELECT DISTINCT title FROM movies ORDER BY title ASC LIMIT 5 OFFSET 5;
  ```

  ## screenshot

  ![alt text](<Screenshot 2026-02-25 180434.png>)

# Exercise 5

- List all the Canadian cities and their populations 
```
SELECT *
FROM north_american_cities
WHERE country like 'Canada';
```
- Order all the cities in the United States by their latitude from north to south 
```
SELECT *
FROM north_american_cities
WHERE country like 'United States'
ORDER BY latitude DESC;
```
- List all the cities west of Chicago, ordered from west to east
```
SELECT *
FROM north_american_cities
WHERE longitude < -87.629798
ORDER BY longitude ASC;
```
- List the two largest cities in Mexico (by population)
```
SELECT *
FROM north_american_cities
WHERE country = 'Mexico'
ORDER BY population DESC
LIMIT 2;
```
- List the third and fourth largest cities (by population) in the United States and their population
```
SELECT *
FROM north_american_cities
WHERE country = 'United States'
ORDER BY population DESC
LIMIT 2 OFFSET 2;
```

# Excercise 6

- Find the domestic and international sales for each movie 
```
SELECT * 
FROM movies
Inner Join Boxoffice
on movies.id=boxoffice.movie_id;
```
- Show the sales numbers for each movie that did better internationally rather than domestically
```
SELECT * 
FROM movies
Inner Join Boxoffice
on movies.id=boxoffice.movie_id
WHERE International_sales > Domestic_sales;
```
- List all the movies by their ratings in descending order
```
SELECT * 
FROM movies
Inner Join Boxoffice
on movies.id=boxoffice.movie_id
ORDER BY Rating Desc ;
```

## Screenshot

![alt text](<Screenshot 2026-02-26 162633.png>)

# Excercise 7

- Find the list of all buildings that have employees
```
SELECT DISTINCT building FROM employees;
```
- Find the list of all buildings and their capacity
```
SELECT * FROM buildings;
```
- List all buildings and the distinct employee roles in each building (including empty buildings)
```
SELECT DISTINCT building_name, role
FROM buildings
LEFT JOIN employees
ON building_name = employees.building;
```

## Screenshot

![alt text](<Screenshot 2026-02-26 170048.png>)

# Excercise 8

- Find the name and role of all employees who have not been assigned to a building 
```
SELECT name,role FROM employees where building is null;
```

- Find the names of the buildings that hold no employees
```
SELECT DISTINCT building_name
FROM buildings
LEFT JOIN employees
    ON building_name = employees.building
WHERE employees.building IS NULL;
```

## Screenshot

![alt text](<Screenshot 2026-02-26 175410.png>)

