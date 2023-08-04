// import React from "react";
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
// import { Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Router } from "react-router-dom";
// import AllSecurities from "./components/AllSecurities";
// import ExpiringBonds from "./components/ExpiringSecurities"
// import './App.css'

// // The code below is used to make a basic view for Story 1
// // const App = () => {
// //   return <ExpiringBonds />;
// // };

// // export default App;

// // Comment out the code below to run basic view for Story 1
// function App() {
//   return (
//     <>
//     {/* Navbar is React's component for navigation bars at the top of a website */}
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand hred="/"><Nav.Link href="/">Deutsche Bank</Nav.Link></Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             {/* Add additional navigation buttons here */}
//             <Nav.Link href="/bonds">All Securities</Nav.Link> 
//             <Nav.Link href="/expiring">Expiring Bonds</Nav.Link> 
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>

//     {/* Add links to React components here */}
//     <Router>
//       <Routes>
//         <Route path="/bonds" element={<AllSecurities />} />
//         <Route path="/expiring" element={<ExpiringBonds />} />
//         <Route path="/" element={<AllSecurities />} />
//       </Routes>
//     </Router>
//     </>
//   );
// }

// export default App;

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllSecurities from "./components/AllSecurities";
import ExpiringBonds from "./components/ExpiringSecurities"
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Router>
        <Routes>
          <Route path="/bonds" element={<AllSecurities />} />
          <Route path="/expiring" element={<ExpiringBonds />} />
          <Route path="/" element={<AllSecurities />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
