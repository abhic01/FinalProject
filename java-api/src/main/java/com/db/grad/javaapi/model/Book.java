//  makes book sql table columns into objects 
//  id and name

package com.db.grad.javaapi.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Book")
public class Book {
    @Id
    private int id;
    private String name;

    @Id
    @Column(name = "id", nullable = true)
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    @Column(name = "name", nullable = false)
    public String getIssuer_name() {
        return name;
    }
    public void setIssuer_name(String name) {
        this.name = name;
    }
}