import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllSecurities from "./components/AllSecurities";
import ExpiringBonds from "./components/ExpiringSecurities"
import ExpiredBonds from './components/ExpiredSecurities';
import RedeemedBonds from './components/RedeemedSecurities';
import RecentBonds from './components/RecentDue';
import DueTodayBonds from './components/DueTodaySecurities';
import ProtectedRoute from "./components/ProtectedRoute";
import UserBonds from "./components/UserBonds"
import ClientPosition from './components/ClientPosition';
import Home from './components/Home';
import FirebaseLogin from './components/FirebaseLogin';
import './navbar.css'; // Import the CSS file
import './App.css'
import SecurityForm from './components/SecurityForm';

function App() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary navbar-container">
        <Container>
          <Navbar.Brand href="/" className="navbar-brand">
            Deutsche Bank
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home" className="navbar-link">
                Home
              </Nav.Link>              
              <Nav.Link href="/bonds" className="navbar-link">
                All Securities
              </Nav.Link>
              <Nav.Link href="/expiring" className="navbar-link">
                Expiring Bonds
              </Nav.Link>    
              <Nav.Link href="/expired" className="navbar-link">
                Expired Bonds
              </Nav.Link>    
              <Nav.Link href="/redeemed" className="navbar-link">
                Redeemed Bonds
              </Nav.Link>  
              <Nav.Link href="/due_today" className="navbar-link">
                Due Today Bonds
              </Nav.Link>     
              <Nav.Link href="/recent" className="navbar-link">
                Recent due Bonds
              </Nav.Link>    
              <Nav.Link href="/trades" className="navbar-link">
                All Trades
              </Nav.Link>
              {/* <Nav.Link href="/bonds/:user" className="navbar-link">
                My Bonds
              </Nav.Link> */}
              <Nav.Link href="/login" className="navbar-link">
                Log In Page
              </Nav.Link>
              <Nav.Link href="/add/bond" className="navbar-link">
                Add Bonds
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Router>
        <Routes>
          <Route path="/" element={<AllSecurities />} />
          <Route path="/bonds" element={<AllSecurities />} />
          <Route path="/expiring" element={<ExpiringBonds />} />
          <Route path="/expired" element={<ExpiredBonds />} />
          <Route path="/redeemed" element={<RedeemedBonds />} />
          <Route path="/due_today" element={<DueTodayBonds />} />
          <Route path="/recent" element={<RecentBonds />} />
          <Route path="/bonds/:user" element={<UserBonds /> } />
          <Route path="/trades" element={<ClientPosition />} />
          <Route path="/login/*" element={<FirebaseLogin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add/bond" element={<SecurityForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;