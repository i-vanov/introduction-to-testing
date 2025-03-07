import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, vi } from "vitest"
import { AlertButton } from './alert-button';

describe('AlertButton', () => {
  beforeEach(() => {});

  afterEach(() => {});

  it('should render an alert button', async () => {});

  it.only('should trigger an alert', async () => {
    const handleSubmit = vi.fn();
    render(<AlertButton onSubmit={handleSubmit} message='Default Message' />)
    const input = screen.getByLabelText('Message');
    const button = screen.getByRole('button', { name: /trigger alert/i });

    const alertSpy = vi.spyOn(window, 'alert');

    await act(async() => {
      await userEvent.clear(input);
      await userEvent.type(input, "Hello");
      await userEvent.click(button);
    });

    expect(handleSubmit).toHaveBeenCalled();
    expect(handleSubmit).toHaveBeenCalledWith('Hello')
    // Click on the button
    // Look and see if alert() was called with the message

  });
});
