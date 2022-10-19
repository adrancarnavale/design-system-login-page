import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from './Button';

describe('Button.jsx', () => {
  it('The Button has the correct content', async () => {
    // ARRANGE
    render(<Button>Lorem Ipsum</Button>);

    // ACT
    const button = await screen.findByRole(`button`);

    // ASSERT
    expect(button).toHaveTextContent('Lorem Ipsum');
  });
});
