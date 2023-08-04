import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllSecurities from "./components/AllSecurities";
import ExpiringBonds from "./components/ExpiringSecurities"
import FirebaseLogin from './components/FirebaseLogin';
import './navbar.css'; // Import the CSS file
import './App.css'

function App() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary navbar-container">
        <Container>
          <Navbar.Brand href="/" className="navbar-brand">
            Deutsche Bank
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/bonds" className="navbar-link">
                All Securities
              </Nav.Link>
              <Nav.Link href="/expiring" className="navbar-link">
                Expiring Bonds
              </Nav.Link>
              {/* <Nav.Link href="/login" className="navbar-link">
                Log In Page
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Router>
        <Routes>
          <Route path="/bonds" element={<AllSecurities />} />
          <Route path="/expiring" element={<ExpiringBonds />} />
          {/* <Route path="/login" element={<FirebaseLogin />} /> */}
          <Route path="/" element={<AllSecurities />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;