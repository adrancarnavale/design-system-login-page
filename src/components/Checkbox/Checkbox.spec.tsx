import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Checkbox } from './Checkbox';
import userEvent from '@testing-library/user-event';

describe('Checkbox.jsx', () => {
  it('The Checkbox renders  correctly', async () => {
    // ARRANGE
    render(<Checkbox />);

    // ACT
    const checkbox = await screen.findByRole('checkbox');

    // ASSERT
    expect(checkbox).toBeInTheDocument();
  });

  it('The Checkbox is correctly clicked', async () => {
    // ARRANGE
    render(<Checkbox />);

    // ACT
    const checkbox = await screen.findByRole('checkbox');
    await userEvent.click(checkbox);

    // ASSERT
    expect(checkbox).toBeChecked();

    // ACT
    await userEvent.click(checkbox);

    // ASSERT
    expect(checkbox).not.toBeChecked();
  });
});
