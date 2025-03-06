import { createButton } from './button.js';

describe('createButton', () => {
  let button;
  beforeEach(() => {
    button = createButton();
  })
  it('should create a button element', () => {

    expect(button).toBeInstanceOf(HTMLButtonElement);
  });

  it('should have the text "Click Me"', () => {
    expect(button.innerText).toBe("Click Me");
  });

  it('should change the text to "Clicked!" when clicked', async () => {
    button.click();
    expect(button.textContent).toBe("Clicked!");
  });
});
