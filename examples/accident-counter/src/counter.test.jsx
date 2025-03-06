import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from './counter';

import '@testing-library/jest-dom/vitest';
import { resetClipboardStubOnView } from '@testing-library/user-event/dist/cjs/utils/index.js';

describe('Counter ', () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it('renders with an initial count of 0', () => {
    const counter = screen.getByTestId('counter-count');
    expect(counter).toHaveTextContent("0");
  });

  it('disables the "Decrement" and "Reset" buttons when the count is 0', () => {
    // Fetch the decrement button by using screen.getByRole and case-insensitive matching
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    const resetButton = screen.getByRole('button', { name: /reset/i });

    expect(decrementButton).toBeDisabled();
    expect(resetButton).toBeDisabled();

  });

  it('displays "days" when the count is 0', () => {
    const counterUnit = screen.getByTestId('counter-unit');
    expect(counterUnit).toHaveTextContent("days");
  });

  it(
    'increments the count when the "Increment" button is clicked',
    async () => {
      const counter = screen.getByTestId('counter-count');
      const initialCounterValue = Number(counter.textContent);
      const incrementButton = screen.getByRole('button', { name: /increment/i });
      await act(async () => {
        await userEvent.click(incrementButton);
      });
      expect(Number(counter.textContent)).toBeGreaterThan(initialCounterValue);
    },
  );

  it('displays "day" when the count is 1', async () => {
    const counterUnit = screen.getByTestId('counter-unit');
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    await userEvent.click(incrementButton);
    expect(counterUnit).toHaveTextContent("day");

  });

  it(
    'decrements the count when the "Decrement" button is clicked',
    async () => {
      const counter = screen.getByTestId('counter-count');
      const incrementButton = screen.getByRole('button', { name: /increment/i });
      await userEvent.click(incrementButton);
      const initialCounterValue = Number(counter.textContent);
      const decrementButton = screen.getByRole('button', { name: /decrement/i });
      await userEvent.click(decrementButton);
      expect(Number(counter.textContent)).toBeLessThan(initialCounterValue);
    },
  );

  it('does not allow decrementing below 0', async () => {
    const counter = screen.getByTestId('counter-count');
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    await userEvent.click(decrementButton);
    expect(counter).toHaveTextContent("0");
  });

  it(
    'resets the count when the "Reset" button is clicked',
    async () => {
      const counter = screen.getByTestId('counter-count');
      const resetButton = screen.getByRole('button', { name: /reset/i });
      const incrementButton = screen.getByRole('button', { name: /increment/i });
      await userEvent.click(incrementButton);
      await userEvent.click(resetButton);
      expect(counter).toHaveTextContent("0");
    },
  );

  it.todo(
    'disables the "Decrement" and "Reset" buttons when the count is 0',
    () => {},
  );

  it('updates the document title based on the count', async () => {
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    await act(async () => {
      await userEvent.click(incrementButton);
    })
      
    expect(document.title).toEqual(expect.stringContaining('1 day'));
  });
});
