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
    private int id;
    private String isin;
    private String cusip;
    private String issuer_name;
    private Date maturity_date;
    private float coupon;
    private String type;
    private float face_value;
    private String currency;
    private String status;
    private String user;

    @Id
    @Column(name="ID", insertable=false, updatable=false)
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    @Column(name="ISIN", nullable=true)
    public String getIsin() {
        return isin;
    }
    public void setIsin(String isin) {
        this.isin = isin;
    }

    @Column(name="CUSIP", nullable=false)
    public String getCusip() {
        return cusip;
    }
    public void setCusip(String cusip) {
        this.cusip = cusip;
    }

    @Column(name="Issuer Name", nullable=true)
    public String getIssuer_name() {
        return issuer_name;
    }
    public void setIssuer_name(String issuer_name) {
        this.issuer_name = issuer_name;
    }

    @Column(name="Maturity Date", nullable=true)
    public Date getMaturity_date() {
        return maturity_date;
    }
    public void setMaturity_date(Date maturity_date) {
        this.maturity_date = maturity_date;
    }

    @Column(name="Coupon %", nullable=true)
    public float getCoupon() {
        return coupon;
    }
    public void setCoupon(float coupon) {
        this.coupon = coupon;
    }

    @Column(name="Type", nullable=true)
    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }

    @Column(name="Face Value", nullable=true)
    public float getFace_value() {
        return face_value;
    }
    public void setFace_value(float face_value) {
        this.face_value = face_value;
    }

    @Column(name="Currency", nullable=true)
    public String getCurrency() {
        return currency;
    }
    public void setCurrency(String currency) {
        this.currency = currency;
    }

    @Column(name="Status", nullable=true)
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }

    @Column(name="User", nullable=true)
    public String getUser() {
        return user;
    }
    public void setUser(String user) {
        this.user = user;
    }
}
