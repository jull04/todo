import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('adds a new task', () => {
  const { getByPlaceholderText, getByText } = render(<App />);
  const inputElement = getByPlaceholderText('Enter a task...');
  const addButton = getByText('Add');

  fireEvent.change(inputElement, { target: { value: 'New Task' } });
  fireEvent.click(addButton);

  expect(getByText('New Task')).toBeInTheDocument();
});

test('renders App component', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Todo List/i);
  expect(titleElement).toBeInTheDocument();
});

