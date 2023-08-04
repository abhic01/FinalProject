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