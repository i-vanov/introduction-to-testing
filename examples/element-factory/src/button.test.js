import { screen } from '@testing-library/dom';
import { createButton } from './button.js';

describe('createButton', () => {
  let button;
  beforeEach(() => {
    button = createButton();
  })
  it('should create a button element', () => {
    expect(button).toBeInstanceOf(HTMLButtonElement);
    document.body.appendChild(button);
    // Find the button with the matching name from the perspective of a screen reader
    button = screen.getByRole('button', { name: 'Click Me'});
    
    expect(button).toBeInTheDocument();
  });

  it('should have the text "Click Me"', () => {
    expect(button.innerText).toBe("Click Me");
  });

  it('should change the text to "Clicked!" when clicked', async () => {
    button.click();
    expect(button.textContent).toBe("Clicked!");
  });
});
