USE `hooks-4313179-ana-cruz`;

SET SQL_SAFE_UPDATES = 0;

CREATE TABLE Employees_companys (
	id INT PRIMARY KEY,
    name VARCHAR(35) NOT NULL,
    email VARCHAR(35) NOT NULL UNIQUE
);

INSERT INTO Employees_companys (id, name, email)
VALUES ("001", "Luana", "lua@lbn.com"),
		("002", "Vinicius", "vini@lbn.com"),
        ("003", "Laura", "lau@lbn.com");
        
        
SELECT * from Employees_companys;

SELECT id AS identifier, name 
FROM Employees_companys;

SELECT id, name, email
FROM Employees_companys
WHERE name="Laura";

SELECT id, name, email
FROM Employees_companys
WHERE name LIKE "%a%";

SELECT id, name, email
FROM Employees_companys
WHERE name NOT LIKE "%a%";

INSERT INTO Employees_companys (id, name, email)
VALUES ("004", "Yuzo", "yuzo@lbn.com");

DELETE FROM Employees_companys
WHERE id="004";