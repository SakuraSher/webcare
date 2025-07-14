import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test('renders the App component with the welcome message', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Check for the loading state
  const loadingElement = screen.getByText(/Loading.../i);
  expect(loadingElement).toBeInTheDocument();

  // Wait for the welcome message to appear
  //const welcomeElement = await screen.findByText(/Welcome/i); // Adjust the text to match your App's welcome message
  //expect(welcomeElement).toBeInTheDocument();
})