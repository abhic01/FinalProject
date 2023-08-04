package com.db.grad.javaapi.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table (name="Trades")
public class Trades {
    @Id
    private int id;
    private int book_id;
    private int security_id;
    private int counter_party;
    private String currency;
    private String status;
    private int quantity;
    private float unit_price;
    private String buy_sell;
    private Date trade_date;
    private Date settlement_date;

    @Id
    @Column(name="id", nullable=true)
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    @Column(name="book_id", nullable=false)
    public int getBook_id() {
        return book_id;
    }
    public void setBook_id(int book_id) {
        this.book_id = book_id;
    }

    @Column(name="security_id", nullable=false)
    public int getSecurity_id() {
        return security_id;
    }
    public void setSecurity_id(int security_id) {
        this.security_id = security_id;
    }

    @Column(name="counter_party", nullable=false)
    public int getCounter_party() {
        return counter_party;
    }
    public void setCounter_party(int counter_party) {
        this.counter_party = counter_party;
    }

    @Column(name="currency", nullable=false)
    public String getCurrency() {
        return currency;
    }
    public void setCurrency(String currency) {
        this.currency = currency;
    }

    @Column(name="status", nullable=false)
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }

    @Column(name="quantity", nullable=false)
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Column(name="unit_price", nullable=false)
    public float getUnit_price() {
        return unit_price;
    }
    public void setUnit_price(float unit_price) {
        this.unit_price = unit_price;
    }

    @Column(name="buy_sell", nullable=false)
    public String getBuy_sell() {
        return buy_sell;
    }
    public void setBuy_sell(String buy_sell) {
        this.buy_sell = buy_sell;
    }

    @Column(name="trade_date", nullable=false)
    public Date getTrade_date() {
        return trade_date;
    }
    public void setTrade_date(Date trade_date) {
        this.trade_date = trade_date;
    }

    @Column(name="settlement_date", nullable=false)
    public Date getSettlement_date() {
        return settlement_date;
    }
    public void setSettlement_date(Date settlement_date) {
        this.settlement_date = settlement_date;
    }
}