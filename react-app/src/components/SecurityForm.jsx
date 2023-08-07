import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/esm/Row'

import { saveSecurity } from '../services/SecurityServices'
import { useNavigate } from 'react-router-dom'



const SecurityForm = () => {
  const [isin, setIsin] = useState('');
  const [bond_holder, setBond_holder] = useState('');
  const [cusip, setCusip] = useState('');
  const [issuer_name, setIssuer_name] = useState('');
  const [maturity_date, setMaturity_date] = useState('');
  const [coupon, setCoupon] = useState('');
  const [type, setType] = useState('');
  const [face_value, setFace_value] = useState('');
  const [currency, setCurrency] = useState('');
  const [status, setStatus] = useState('');

  const navigate = useNavigate();

  const handleIsinChange = (event) => {
    setIsin(event.target.value);
  }

  const handleBond_holderChange = (event) => {
    setBond_holder(event.target.value);
  }

  const handleCusipChange = (event) => {
    setCusip(event.target.value)
  }

  const handleIssuer_nameChange = (event) => {
    setIssuer_name(event.target.value)
  }

  const handleMaturity_dateChange = (event) => {
    setMaturity_date(event.target.value);
  }

  const handleCouponChange = (event) => {
    setCoupon(event.target.value);
  }

  const handleTypeChange = (event) => {
    setType(event.target.value)
  }

  const handleFace_valueChange = (event) => {
    setFace_value(event.target.value)
  }

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  }

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    let Security = {};
    Security.isin = isin;
    Security.bond_holder = bond_holder;
    Security.cusip = cusip;
    Security.issuer_name = issuer_name;
    Security.maturity_date = maturity_date;
    Security.coupon = coupon;
    Security.type = type;
    Security.face_value = face_value;
    Security.currency = currency;
    Security.status = status;
    console.log(Security);

    saveSecurity(Security)
   .then(res => {
      setIsin('');
      setBond_holder('');
      setCusip('');
      setIssuer_name(0);
      setMaturity_date('');
      setCoupon('');
      setType('');
      setFace_value(0);
      setCurrency('');
      setStatus('');
      navigate("/");
      })
    .catch(err=>{
       console.log(err);
      })
  }

  return (
    <Row className='SecurityForm'>
      <Form>
        <Form.Group className="mb-3" controlId="isin">
          <Form.Label>Isin: </Form.Label>
          <Form.Control type="text" placeholder="Isin" value={isin} onChange={handleIsinChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="bond_holder">
          <Form.Label>Bond holder: </Form.Label>
          <Form.Control type="text" placeholder="Bond holder" value={bond_holder} onChange={handleBond_holderChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="cusip">
          <Form.Label>Cusip: </Form.Label>
          <Form.Control type="text" placeholder="Cusip" value={cusip} onChange={handleCusipChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="issuer_name">
          <Form.Label>Issuer Name: </Form.Label>
          <Form.Control type="text" placeholder="Issuer Name" value={issuer_name} onChange={handleIssuer_nameChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="maturity_date">
          <Form.Label>Maturity Date: </Form.Label>
          <Form.Control type="text" placeholder="Maturity Date" value={maturity_date} onChange={handleMaturity_dateChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="coupon">
          <Form.Label>Coupon Percent: </Form.Label>
          <Form.Control type="text" placeholder="Coupon Percent" value={coupon} onChange={handleCouponChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="type">
          <Form.Label>Type of bond: </Form.Label>
          <Form.Control type="text" placeholder="Type of bond" value={type} onChange={handleTypeChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="face_value">
          <Form.Label>Face Value of Bond: </Form.Label>
          <Form.Control type="text" placeholder="Face value of Bond" value={face_value} onChange={handleFace_valueChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="currency">
          <Form.Label>Bond Currency: </Form.Label>
          <Form.Control type="text" placeholder="Bond Currency" value={currency} onChange={handleCurrencyChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="status">
          <Form.Label>Bond Status: </Form.Label>
          <Form.Control type="text" placeholder="Bond Status" value={status} onChange={handleStatusChange} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Row>
  )
}

export default SecurityForm