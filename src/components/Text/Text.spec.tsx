import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Text } from './Text';

describe('Text.jsx', () => {
  it('The text has the correct content', async () => {
    // ARRANGE
    render(<Text>Lorem Ipsum</Text>);

    // ACT
    const text = await screen.findByText(/lorem/i);

    // ASSERT
    expect(text).toHaveTextContent('Lorem Ipsum');
  });

  it('The Slot component operates correctly', async () => {
    // ARRANGE
    render(
      <Text>
        <h1>Lorem Ipsum</h1>
      </Text>
    );

    // ACT
    const text = await screen.findByRole('heading');

    // ASSERT
    expect(text).toHaveTextContent('Lorem Ipsum');
  });
});
