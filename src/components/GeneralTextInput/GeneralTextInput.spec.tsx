import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { GeneralTextInput } from './GeneralTextInput';
import userEvent from '@testing-library/user-event';

describe('GeneralTextInput.jsx', () => {
  it('The GeneralTextInput renders  correctly', async () => {
    // ARRANGE
    render(
      <GeneralTextInput.Container>
        <GeneralTextInput.Input />
      </GeneralTextInput.Container>
    );

    // ACT
    const generalTextInput = await screen.findByRole('textbox');

    // ASSERT
    expect(generalTextInput).toBeInTheDocument();

    // ACT
    await userEvent.type(generalTextInput, 'teste@email.com');

    //ASSERT
    expect(generalTextInput).toHaveValue('teste@email.com');
  });
});
