package com.db.grad.javaapi.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.db.grad.javaapi.model.Trades;
import java.util.List;

import javax.persistence.Table;

@Repository
@Table(name = "Trades")
public interface TradeRepository extends JpaRepository<Trades, Long>
{

/* 
// Makes a list of all the bonds in the system
@Query(nativeQuery = true, value = "select * from trades")
List<Trades> findAllTrades();
*/

//current position client hold     
@Query(nativeQuery = true, value =  "SELECT S.bond_holder, BU.User_ID, BU.Book_ID, CAST(SUM(CASE" +  "    WHEN T.Buy_Sell = 'buy' AND T.Currency = 'USD' THEN T.Quantity * -T.Unit_Price" +  "    WHEN T.Buy_Sell = 'sell' AND T.Currency = 'USD' THEN T.Quantity * T.Unit_Price" + "    WHEN T.Buy_Sell = 'buy' AND T.Currency = 'GBP' THEN T.Quantity * -T.Unit_Price * 1.28" +  "    WHEN T.Buy_Sell = 'sell' AND T.Currency = 'GBP' THEN T.Quantity * T.Unit_Price * 1.28" +  "    ELSE 0" +  "    END) AS DECIMAL (10,2)) AS USD_Current_Position " +  "FROM Trades AS T " +  "JOIN Security AS S ON T.security_id = S.id " +  "JOIN Book_User AS BU ON T.book_id = BU.book_id " + "WHERE BU.User_ID = :user_id" + "GROUP BY S.bond_holder, BU.User_ID, BU.Book_ID") 
List<Trades> getClientPosition(String user_id);  
}