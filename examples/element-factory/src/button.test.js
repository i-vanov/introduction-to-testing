import { screen, fireEvent } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { createButton } from './button.js';

describe('createButton', () => {
  let button;
  beforeEach(() => {
    button = createButton();
  });

  afterEach(() => {
    document.body.innerHTML = '';
  })
  it('should create a button element', () => {
    expect(button).toBeInstanceOf(HTMLButtonElement);
    document.body.appendChild(button);
    // Find the button with the matching name from the perspective of a screen reader
    button = screen.getByRole('button', { name: 'Click Me'});

    expect(button).toBeInTheDocument();
  });

  it('should have the text "Click Me"', () => {
    document.body.appendChild(button);
    expect(button.innerText).toBe("Click Me");
  });

  it('should change the text to "Clicked!" when clicked', async () => {
    document.body.appendChild(createButton());
    const localButton = screen.getByRole("button", { name: "Click Me" });

    // Fire an abstract click event
    fireEvent(localButton, new MouseEvent('click'));
    // Simulate click from the user
    await userEvent.click(localButton);
    expect(localButton.textContent).toBe("Clicked!");
  });
});
