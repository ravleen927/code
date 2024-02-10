// Button.tests.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders button with correct text', () => {
    const { getByText } = render(<Button onClick={() => {}}>Click me</Button>);
    expect(getByText('Click me')).toBeInTheDocument();
});

test('button click fires onClick function', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Click me</Button>);
    fireEvent.click(getByText('Click me'));
    expect(onClick).toHaveBeenCalled();
});
