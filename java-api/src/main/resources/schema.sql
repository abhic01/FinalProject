DROP TABLE IF EXISTS Security;
CREATE TABLE Security (
  id INT AUTO_INCREMENT,
  isin VARCHAR(50),  
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
  issuer_name VARCHAR(255) NOT NULL,
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
  status VARCHAR(32) NOT NULL,
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