import React, { useState, useEffect } from "react";
import { findBonds } from "../services/SecurityServices";
import styles from "./Security.module.css";

export const Security = () => {
    const [bonds, setBonds] = useState([]);

    useEffect(() => {
      findBonds()
            .then(({data}) => {
            setBonds(data);
            });
    }, []);
  return (
    <>
        { bonds.map(bond => 
        <div className={styles.bonds}>
            <div>ID: {bond.id}</div>
            <div>ISIN: {bond.isin} </div>
            <div>CUSIP: {bond.cusip}</div>
            <div>ISSUER: {bond.issuer_name}</div>
            <div>MATURITY DATE: {bond.maturity_date}</div>
            <div>COUPON: {bond.coupon}</div>
            <div>TYPE: {bond.type}</div>
            <div>VALUE: {bond.face_value}</div>
            <div>CURRENCY: {bond.currency}</div>            
            <div>STATUS: {bond.status}</div>            
        </div>) 
        }
    </>
  )
};