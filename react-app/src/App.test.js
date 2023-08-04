import { render, screen } from '@testing-library/react';
//import Dropdown from 'react-bootstrap/Dropdown';
import App from './App.test';

test('renders App component', () => {
  render(<App />);
  const { container } = render(<App />);
  expect(container).toBeDefined();
});



// function BasicExample() {
//   return (
//     <Dropdown>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//         Dropdown Button
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// }

// export default BasicExample;
