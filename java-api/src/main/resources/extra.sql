--see bonds in Books I am responsible for
SELECT Security.isin, Security.cusip, Security.bond_holder, Security.issuer_name, Security.maturity_date, Security.coupon, Security.type, Security.face_value, Security.currency, Security.status
FROM Users
JOIN Book_User ON Users.id = Book_User.user_id
JOIN Book ON Book_User.Book_id = Book.id
JOIN Trades ON Book.id = Trades.Book_id
JOIN Security ON Trades.Security_id = Security.id
WHERE Users.name = 'Mark Cuban';

--Pass maturity but not redeemed
SELECT * from Security
WHERE maturity_date < CURRENT_DATE() 
AND status = 'active'

--upcoming maturity
SELECT * 
FROM Security
WHERE DATEDIFF('DAY', CURRENT_DATE(), maturity_date) > -6
AND DATEDIFF('DAY', CURRENT_DATE(), maturity_date) < 6

--already trigerred for redemption
SELECT * from Security
WHERE status = 'redeeming'

--due today
SELECT * from Security
WHERE maturity_date = CURRENT_DATE()

--maturity in the past 5 days
SELECT * from Security
WHERE DATEDIFF('DAY', CURRENT_DATE(), maturity_date) > 0
AND DATEDIFF('DAY', CURRENT_DATE(), maturity_date) < 6

--number of bonds a client hold in my Book
SELECT bond_holder, COUNT(*) 
FROM Security
GROUP BY bond_holder

--current position client hold