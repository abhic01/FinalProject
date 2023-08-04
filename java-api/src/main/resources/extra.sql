--see bonds in books I am responsible for
SELECT
security.isin,
security.cusip,
security.issuer_name,
security.maturity_date,
security.coupon,
security.type,
security.face_value,
security.currency,
security.status

FROM

users

JOIN book_user ON users.id = book_user.user_id
JOIN book ON book_user.book_id = book.id
JOIN trades ON book.id = trades.book_id
JOIN security ON trades.security_id = security.id

WHERE

users.name = 'Mark Cuban';



--Pass maturity but not redeemed
SELECT* from Security
WHERE maturity_date < CURRENT_DATE() 
AND status = 'active'

--upcomming maturity
SELECT * 
FROM Security
WHERE DATEDIFF('DAY', CURRENT_DATE(), maturity_date) > 0
AND DATEDIFF('DAY', CURRENT_DATE(), maturity_date) < 6

--already trigerred for redeemtion
SELECT* from Security
WHERE status='redeeming'

--due today
SELECT* from Security
WHERE maturity_date = CURRENT_DATE()

--maturity in the past 5 days
SELECT* from Security
WHERE DATEDIFF('DAY', CURRENT_DATE(), maturity_date) < 0
AND DATEDIFF('DAY', CURRENT_DATE(), maturity_date) < 6

--number of bonds a client hold in my book
SELECT bond_holder, COUNT(*) 
FROM Security
GROUP BY bond_holder

--current position client hold