package com.db.grad.javaapi.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EmbeddedId;
import javax.persistence.Table;

@Entity
@Table (name = "Book_User")
public class Book_User {
    @EmbeddedId
    private Book_User_Key key;

    @Column(name="book_id", nullable=false)
    public int getbook_id() {
        return key.getBook_id();
    }
    public void setbook_id(int book_id) {
        key.setBook_id(book_id);
    }

    @Column public int getuser_id() {
        return key.getUser_id();
    }
    public void setuser_id(int user_id) {
        key.setUser_id(user_id);
    }
}