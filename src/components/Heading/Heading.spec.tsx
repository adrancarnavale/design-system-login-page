import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Heading } from './Heading';

describe('Heading.jsx', () => {
  it('The Heading has the correct content', async () => {
    // ARRANGE
    render(<Heading>Lorem Ipsum</Heading>);

    // ACT
    const heading = await screen.findByRole('heading', { level: 2 });

    // ASSERT
    expect(heading).toHaveTextContent('Lorem Ipsum');
  });
});
