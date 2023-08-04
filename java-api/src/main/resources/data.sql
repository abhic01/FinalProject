

--  ***  EXAMPLE DATA  ***


-- example data for into 'book' table

INSERT INTO Book (id, name) VALUES
  (1, 'To the Moon'),
  (2, 'Boundless Bonds'),
  (3, 'Bonds Unleashed');

-- example data for into 'Users' table

INSERT INTO Users (id, name, email, role) VALUES
  (1, 'John Cena', 'john@example.com', 'investor'),
  (2, 'Mark Cuban', 'mark@example.com', 'analyst'),
  (3, 'Michael Jordan', 'michael@example.com', 'associate');

-- example data for 'counterparty' table

-- INSERT INTO counterparty ('name') VALUES
--   (1, 'James Bond'),
--   (2, 'Bill Nye'),
--   (3, 'Jake from State Farm');

-- example data for 'book_user' table

INSERT INTO Book_User (book_id, user_id) VALUES
  (1, 1),
  (2, 2),
  (3, 3);




--  ***  GIVEN DATA  ***

--   Given data for Securities table inserts 

INSERT INTO Security
(isin,cusip,issuer_name,maturity_date,coupon,type,face_value,currency,status) 
VALUES ('XS1988387210',NULL,'BNPParibasIssu 4,37% Microsoft Corp (USD)','2021-08-05',4.37,'CORP',1000,'USD','active');

INSERT INTO Security
(id,isin,cusip,issuer_name,maturity_date,coupon,type,face_value,currency,status) 
VALUES (2,'A12356111','123456bh0','UBS Facebook (USD)','2021-09-30',2,'CORP',900,'USD','active');

INSERT INTO Security
(id,isin,cusip,issuer_name,maturity_date,coupon,type,face_value,currency,status) 
VALUES (3,'USN0280EAR64','123456780','Airbus 3.15%  USD','2021-07-30',3.15,'CORP',900,'USD','active');

INSERT INTO Security
(id,isin,cusip,issuer_name,maturity_date,coupon,type,face_value,currency,status) 
VALUES (4,'USU02320AG12','AMZN 3.15 08-22-27 REGS','Amazon','2021-08-03',3.15,'CORP',900,'USD','active');

INSERT INTO Security
(id,isin,cusip,issuer_name,maturity_date,coupon,type,face_value,currency,status) 
VALUES (5,'GB00B6460505','BDCHBW8','HM Treasury United Kingdon','2021-08-09',0.75,'GOVN',900,'GBP','active');

INSERT INTO Security
(id,isin,cusip,issuer_name,maturity_date,coupon,type,face_value,currency,status) 
VALUES (6,'GB00B6460506','BDCHBW8','HM Treasury United Kingdon','2021-08-09',0.75,'GOVN',900,'GBP','active');

INSERT INTO Security
(id,isin,cusip,issuer_name,maturity_date,coupon,type,face_value,currency,status) 
VALUES (7,'GB00B6460507','BDCHBW8','HM Treasury United Kingdon','2021-08-09',0.75,'GOVN',900,'GBP','active');

INSERT INTO Security
(id,isin,cusip,issuer_name,maturity_date,coupon,type,face_value,currency,status) 
VALUES (8,'GB00B6460508','BDCHBW8','HM Treasury United Kingdon','2021-08-09',0.75,'GOVN',900,'GBP','active');

INSERT INTO Security
(id,isin,cusip,issuer_name,maturity_date,coupon,type,face_value,currency,status) 
VALUES (9,'GB00B6460509','BDCHBW8','HM Treasury United Kingdon','2021-08-09',0.75,'GOVN',900,'GBP','active');

INSERT INTO Security
(id,isin,cusip,issuer_name,maturity_date,coupon,type,face_value,currency,status) 
VALUES (10,'GB00B6460510','BDCHBW8','HM Treasury United Kingdon','2021-08-09',0.75,'GOVN',900,'GBP','active');

INSERT INTO Security
(id,isin,cusip,issuer_name,maturity_date,coupon,type,face_value,currency,status) 
VALUES (11,'GB00B6460511','BDCHBW8','HM Treasury United Kingdon','2021-08-09',0.75,'GOVN',900,'GBP','active');

INSERT INTO Security
(id,isin,cusip,issuer_name,maturity_date,coupon,type,face_value,currency,status) 
VALUES (12,'GB00B6460512','BDCHBW8','HM Treasury United Kingdon','2021-08-09',0.75,'GOVN',900,'GBP','active');

INSERT INTO Security
(id,isin,cusip,issuer_name,maturity_date,coupon,type,face_value,currency,status) 
VALUES (13,'GB00B6460513','BDCHBW8','HM Treasury United Kingdon','2021-08-09',0.75,'GOVN',900,'GBP','active');

INSERT INTO Security
(id,isin,cusip,issuer_name,maturity_date,coupon,type,face_value,currency,status) 
VALUES (14,'GB00B6460514','BDCHBW8','HM Treasury United Kingdon','2021-08-09',0.75,'GOVN',900,'GBP','active');

INSERT INTO Security
(id,isin,cusip,issuer_name,maturity_date,coupon,type,face_value,currency,status) 
VALUES (15,'GB00B6460515','BDCHBW8','HM Treasury United Kingdon','2021-08-09',0.75,'GOVN',900,'GBP','active');

INSERT INTO Security
(id,isin,cusip,issuer_name,maturity_date,coupon,type,face_value,currency,status) 
VALUES (16,'US87973RAA86','87973RAA8','TEMASEK FINL I LTD GLOBAL MEDIUM TERM NTS BOOK ENTRY REG S','2021-08-09',2.02,'SOVN',690,'USD','active');

INSERT INTO Security
(id,isin,cusip,issuer_name,maturity_date,coupon,type,face_value,currency,status) 
VALUES (17,'IE00B29LNP31','87973RAA8','First Norway Alpha Kl.IV','2021-08-06',1.123,'SOVN',340,'USD','active');



-- Given data for Trades table inserts

INSERT INTO Trades
(id,book_id,security_id,counterparty_id,currency,t_status,quantity,unit_price,buy_sell,trade_date,settlement_date) 
VALUES (1,1,1,1,'USD','open',50,90,'buy','2021-05-13','2021-08-04');

INSERT INTO Trades
(id,book_id,security_id,counterparty_id,currency,t_status,quantity,unit_price,buy_sell,trade_date,settlement_date) 
VALUES (2,2,1,2,'GBP','open',40,89.56,'sell','2021-02-04','2021-08-04');

INSERT INTO Trades
(id,book_id,security_id,counterparty_id,currency,t_status,quantity,unit_price,buy_sell,trade_date,settlement_date) 
VALUES (3,3,3,3,'USD','open',1000,105.775,'buy','2021-05-13','2021-08-23');

INSERT INTO Trades
(id,book_id,security_id,counterparty_id,currency,t_status,quantity,unit_price,buy_sell,trade_date,settlement_date) 
VALUES (4,1,3,1,'GBP','open',900,105.775,'sell','2021-02-04','2021-09-10');

INSERT INTO Trades
(id,book_id,security_id,counterparty_id,currency,t_status,quantity,unit_price,buy_sell,trade_date,settlement_date) 
VALUES (5,2,2,2,'USD','open',50,90,'buy','2021-05-13','2021-08-23');

INSERT INTO Trades
(id,book_id,security_id,counterparty_id,currency,t_status,quantity,unit_price,buy_sell,trade_date,settlement_date) 
VALUES (6,3,3,3,'USD','open',1000,105.775,'buy','2021-05-13','2021-08-23');

INSERT INTO Trades
(id,book_id,security_id,counterparty_id,currency,t_status,quantity,unit_price,buy_sell,trade_date,settlement_date) 
VALUES (7,1,2,1,'USD','open',50,90,'sell','2021-05-13','2021-08-23');

INSERT INTO Trades
(id,book_id,security_id,counterparty_id,currency,t_status,quantity,unit_price,buy_sell,trade_date,settlement_date) 
VALUES (8,2,4,2,'GBP','open',60,98.56,'buy','2021-02-04','2021-09-27');

INSERT INTO Trades
(id,book_id,security_id,counterparty_id,currency,t_status,quantity,unit_price,buy_sell,trade_date,settlement_date) 
VALUES (9,3,4,3,'USD','open',50,98.56,'buy','2021-08-23','2021-08-23');

INSERT INTO Trades
(id,book_id,security_id,counterparty_id,currency,t_status,quantity,unit_price,buy_sell,trade_date,settlement_date) 
VALUES (10,3,5,3,'GBP','open',1100,110.35,'buy','2021-09-27','2021-09-27');

INSERT INTO Trades
(id,book_id,security_id,counterparty_id,currency,t_status,quantity,unit_price,buy_sell,trade_date,settlement_date) 
VALUES (11,2,6,2,'GBP','open',900,110.35,'sell','2021-09-28','2021-09-28');

INSERT INTO Trades
(id,book_id,security_id,counterparty_id,currency,t_status,quantity,unit_price,buy_sell,trade_date,settlement_date) 
VALUES (12,1,7,1,'GBP','open',2000,110.35,'buy','2021-09-29','2021-09-29');

INSERT INTO Trades
(id,book_id,security_id,counterparty_id,currency,t_status,quantity,unit_price,buy_sell,trade_date,settlement_date) 
VALUES (13,1,8,1,'GBP','open',2000,110.35,'sell','2021-09-30','2021-09-30');

INSERT INTO Trades
(id,book_id,security_id,counterparty_id,currency,t_status,quantity,unit_price,buy_sell,trade_date,settlement_date) 
VALUES (14,2,9,2,'GBP','open',1000,110.35,'buy','2021-10-01','2021-10-01');

INSERT INTO Trades
(id,book_id,security_id,counterparty_id,currency,t_status,quantity,unit_price,buy_sell,trade_date,settlement_date) 
VALUES (15,3,10,3,'GBP','open',900,110.35,'buy','2019-10-02','2019-10-02');

INSERT INTO Trades
(id,book_id,security_id,counterparty_id,currency,t_status,quantity,unit_price,buy_sell,trade_date,settlement_date) 
VALUES (16,2,11,2,'GBP','open',1900,110.35,'sell','2019-10-03','2019-10-03');

INSERT INTO Trades
(id,book_id,security_id,counterparty_id,currency,t_status,quantity,unit_price,buy_sell,trade_date,settlement_date) 
VALUES (17,1,12,1,'GBP','open',600,110.35,'buy','2018-10-04','2018-10-04');

INSERT INTO Trades
(id,book_id,security_id,counterparty_id,currency,t_status,quantity,unit_price,buy_sell,trade_date,settlement_date) 
VALUES (18,1,13,1,'GBP','open',600,110.35,'buy','2019-10-05','2019-10-05');

INSERT INTO Trades
(id,book_id,security_id,counterparty_id,currency,t_status,quantity,unit_price,buy_sell,trade_date,settlement_date) 
VALUES (19,2,14,2,'GBP','open',700,110.35,'buy','2021-06-06','2021-06-06');

INSERT INTO Trades
(id,book_id,security_id,counterparty_id,currency,t_status,quantity,unit_price,buy_sell,trade_date,settlement_date) 
VALUES (20,3,15,3,'GBP','open',1300,110.35,'sell','2011-10-07','2021-10-07');

INSERT INTO Trades
(id,book_id,security_id,counterparty_id,currency,t_status,quantity,unit_price,buy_sell,trade_date,settlement_date) 
VALUES (21,3,16,3,'USD','open',60,100.13,'buy','2012-02-04','2021-09-27');

INSERT INTO Trades
(id,book_id,security_id,counterparty_id,currency,t_status,quantity,unit_price,buy_sell,trade_date,settlement_date) 
VALUES (22,2,16,2,'USD','open',50,100.13,'buy','2012-08-23','2021-08-23');

INSERT INTO Trades
(id,book_id,security_id,counterparty_id,currency,t_status,quantity,unit_price,buy_sell,trade_date,settlement_date) 
VALUES (23,1,16,1,'USD','open',75,100.13,'buy','2013-02-04','2021-09-27');

INSERT INTO Trades
(id,book_id,security_id,counterparty_id,currency,t_status,quantity,unit_price,buy_sell,trade_date,settlement_date) 
VALUES (24,2,16,2,'USD','open',50,100.13,'buy','2014-08-23','2021-08-23');

INSERT INTO Trades
(id,book_id,security_id,counterparty_id,currency,t_status,quantity,unit_price,buy_sell,trade_date,settlement_date) 
VALUES (25,3,17,3,'USD','open',300,98.76,'buy','2016-02-04','2021-09-27');

INSERT INTO Trades
(id,book_id,security_id,counterparty_id,currency,t_status,quantity,unit_price,buy_sell,trade_date,settlement_date) 
VALUES (26,2,17,2,'USD','open',300,98.76,'buy','2012-08-23','2021-08-23');

INSERT INTO Trades
(id,book_id,security_id,counterparty_id,currency,t_status,quantity,unit_price,buy_sell,trade_date,settlement_date) 
VALUES (27,1,17,1,'USD','open',300,98.76,'buy','2013-02-04','2021-09-27');

INSERT INTO Trades
(id,book_id,security_id,counterparty_id,currency,t_status,quantity,unit_price,buy_sell,trade_date,settlement_date) 
VALUES (28,2,17,2,'USD','open',300,98.76,'sell','2015-08-23','2021-08-23');
