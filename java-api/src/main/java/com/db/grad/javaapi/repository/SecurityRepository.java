package com.db.grad.javaapi.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.db.grad.javaapi.model.Security;
import java.util.List;

@Repository
public interface SecurityRepository extends JpaRepository<Security, Long>
{
    // Makes a list of all the bonds in the system
    @Query(nativeQuery = true, value = "select * from security")
    List<Security> findAllSecurity();

    // Makes a list of bonds that are about to expire in +/- 5 days
    @Query(nativeQuery = true, value = "select * from security where maturity_date between DATEADD('DAY', -5, CURRENT_DATE) and DATEADD('DAY', 5, CURRENT_DATE)")
    List<Security> getExpiringSecurities();

    // Makes a list of bonds that are past maturity but have not been redeemed
    @Query(nativeQuery = true, value = "SELECT * from Security WHERE maturity_date < CURRENT_DATE() AND status = 'active'")
    List<Security> getExpiredSecurities();

    // Makes a list of all the bonds that are being redeemed
    @Query(nativeQuery = true, value = "SELECT * from Security WHERE status = 'redeeming'")
    List<Security> getRedeemingSecurities();


    // Makes a list of all the bonds that are due to mature today
    @Query(nativeQuery = true, value = "SELECT * from Security WHERE maturity_date = CURRENT_DATE()")
    List<Security> getSecuritiesDueToday();

    // Makes a list of all the bonds that have matured in the past 5 days
    @Query(nativeQuery = true, value = "SELECT * from Security WHERE DATEDIFF('DAY', CURRENT_DATE(), maturity_date) > 0 AND DATEDIFF('DAY', CURRENT_DATE(), maturity_date) < 6")
    List<Security> getRecenSecurities();
}