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




SELECT* from Security
WHERE maturity_date < CURRENT_DATE() 
AND status = 'active'


SELECT * 
FROM Security
WHERE DATEDIFF('DAY', CURRENT_DATE(), maturity_date) > 0
AND DATEDIFF('DAY', CURRENT_DATE(), maturity_date) < 6


SELECT* from Security
WHERE status='redeeming'


SELECT* from Security
WHERE maturity_date = CURRENT_DATE()


SELECT* from Security
WHERE DATEDIFF('DAY', CURRENT_DATE(), maturity_date) < 0
AND DATEDIFF('DAY', CURRENT_DATE(), maturity_date) < 6


SELECT bond_holder, COUNT(*) 
FROM Security
GROUP BY bond_holder