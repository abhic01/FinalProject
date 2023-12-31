DROP TABLE IF EXISTS Security;
CREATE TABLE Security (
  id INT AUTO_INCREMENT,
  isin VARCHAR(50),
  bond_holder varchar(255) NOT NULL,  
  cusip VARCHAR(50),
  issuer_name VARCHAR(255) NOT NULL,
  maturity_date DATE NOT NULL,
  coupon FLOAT NOT NULL,
  type VARCHAR(255) NOT NULL,
  face_value float NOT NULL,
  currency varchar(10) NOT NULL,
  status varchar(32),
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS Users;
CREATE TABLE Users (
  id INT AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS Book;
CREATE TABLE Book (
  id INT AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS Book_User;
CREATE TABLE  Book_User(
  book_id INT NOT NULL,
  user_id INT NOT NULL,
  FOREIGN KEY (book_id) REFERENCES Book(id),
  FOREIGN KEY (user_id) REFERENCES Users(id)
);

DROP TABLE IF EXISTS Trades;
CREATE TABLE Trades(
  id INT AUTO_INCREMENT,
  book_id INT NOT NULL,
  security_id INT NOT NULL,
  counterparty_id INT NOT NULL,
  currency VARCHAR(10) NOT NULL,
  t_status VARCHAR(32) NOT NULL,
  quantity int NOT NULL,
  unit_price FLOAT NOT NULL,
  buy_sell VARCHAR(32) NOT NULL,
  trade_date DATE NOT NULL,
  settlement_date DATE NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (security_id) REFERENCES Security(id),
  FOREIGN KEY (book_id) REFERENCES Book(id)
  -- FOREIGN KEY (counterparty_id) REFERENCES Counter_Party(id)
);

ALTER TABLE Book_User ADD PRIMARY KEY(book_id, user_id);

-- Story 2 Table (Bonds in books I am responsible for)
DROP TABLE IF EXISTS Security_Book_Trades;
CREATE VIEW Security_Book_Trades AS
SELECT ROW_NUMBER() OVER(ORDER BY (SELECT 1)) id, Security.isin AS isin, Security.cusip AS cusip, Security.issuer_name AS issuer_name, Security.maturity_date AS maturity_date, Security.coupon AS coupon, Security.type AS type, Security.face_value AS face_value, Security.currency AS currency, Security.status AS status, Users.name AS name
FROM Users
JOIN Book_User ON Users.id = Book_User.user_id
JOIN Book ON Book_User.Book_id = Book.id
JOIN Trades ON Book.id = Trades.Book_id
JOIN Security ON Trades.Security_id = Security.id;