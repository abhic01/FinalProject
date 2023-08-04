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