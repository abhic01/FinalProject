import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Route, Routes } from 'react-router-dom';

// The code below is used to make a basic view for Story 1
// import { Security } from "./components/Security";
// const App = () => {
//   return <Security />;
// };

// export default App;

// Comment out the code below to run basic view for Story 1
function App() {
  return (
    <>
    {/* Navbar is React's component for navigation bars at the top of a website */}
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand hred="/">Deutsche Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav classname="me-auto">
            {/* Add additional navigation buttons here */}
            <Nav.Link href="/bonds">All Securities</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Routes>
      {/* Add links to React components here */}
      <Route path="bonds" element={<AllSecurities/>} />
      <Route path="/" element={<AllSecurities/>} />
    </Routes>
    </>
  );
}

export default App;