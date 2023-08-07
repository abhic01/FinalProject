package com.db.grad.javaapi.model;

import java.io.Serializable;
import java.sql.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import org.hibernate.annotations.Immutable;

@Entity
@Immutable
@Table(name = "Security_Book_Trades")
public class SecurityBookTrades implements Serializable {
    @Id
    @Column(name = "id", insertable = false, updatable = false)
    private int id;

    private String isin;
    private String cusip;
    private String issuer_name;
    private Date maturity_date;
    private double coupon;
    private String type;
    private double face_value;
    private String currency;
    private String status;
    private String name;

    public int getId() {
        return id;
    }

    @Column(name = "isin", nullable = false)
    public String getIsin() {
        return isin;
    }

    @Column(name = "cusip", nullable = true)
    public String getCusip() {
        return cusip;
    }

    @Column(name = "issuer_name", nullable = false)
    public String getIssuer_name() {
        return issuer_name;
    }

    @Column(name = "maturity_date", nullable = false)
    public Date getMaturity_date() {
        return maturity_date;
    }

    @Column(name = "coupon", nullable = false)
    public double getCoupon() {
        return coupon;
    }

    @Column(name = "type", nullable = false)
    public String getType() {
        return type;
    }

    @Column(name = "face_value", nullable = false)
    public double getFace_value() {
        return face_value;
    }

    @Column(name = "currency", nullable = false)
    public String getCurrency() {
        return currency;
    }

    @Column(name = "status", nullable = false)
    public String getStatus() {
        return status;
    }

    @Column(name = "name", nullable = false)
    public String getName() {
        return name;
    }

    public void setOwnerName(String name) {
        this.name = name;
    }
}
