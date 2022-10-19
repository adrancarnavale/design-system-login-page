import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { EmailInput } from './EmailInput';
import userEvent from '@testing-library/user-event';

describe('EmailInput.jsx', () => {
  it('The EmailInput renders  correctly', async () => {
    // ARRANGE
    render(
      <EmailInput.Container>
        <EmailInput.Input />
      </EmailInput.Container>
    );

    // ACT
    const emailInput = await screen.findByRole('textbox');

    // ASSERT
    expect(emailInput).toBeInTheDocument();

    // ACT
    await userEvent.type(emailInput, 'teste@email.com');

    //ASSERT
    expect(emailInput).toHaveValue('teste@email.com');
  });
});
