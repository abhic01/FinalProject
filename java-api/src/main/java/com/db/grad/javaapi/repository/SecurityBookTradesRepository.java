package com.db.grad.javaapi.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import javax.persistence.Table;
import java.util.List;
import com.db.grad.javaapi.model.SecurityBookTrades;

@Repository
@Table(name = "Security_Book_Trades")
public interface SecurityBookTradesRepository extends ReadOnlyRepository<SecurityBookTrades, Long>{
    // Creates a list of all the trades a specific User is responsible for
    @Query(nativeQuery = true, value = "SELECT ID AS id, ISIN AS isin, CUSIP AS cusip, 'Issuer Name' AS issuer_name, 'Maturity Date' AS maturity_date, 'Coupon %' AS coupon, 'Type' AS type, 'Face Value' AS face_value, 'Currency' AS currency, 'Status' FROM Security_Book_Trades WHERE User = :user")
    List<SecurityBookTrades> findAll(SecurityBookTrades user);
}
