# Calculator

## Project Overview

This project aims to recreate the functionality and aesthetics of the macOS calculator using HTML, CSS, and JavaScript. While this might seem ambitious, breaking down the project into smaller, manageable steps can make it achievable.

## Project Structure

```
calculator/
├── index.html
├── style.css
└── script.js
```

## HTML Structure

- **Display**: A large, clear display to show the current input and result.
- **Number Buttons**: 0-9, decimal point (.).
- **Operator Buttons**: +, -, *, ÷, =, C (clear), ← (Backspace), ± (Toggle sign).

## CSS Styling

- **Overall Layout**: A grid-based layout to organize the calculator's elements.
- **Button Styles**: Consistent button sizes, colors, and fonts.
- **Display Styles**: Font size, color, and alignment.
- **Hover and Active States**: Visual feedback for user interactions.

## JavaScript Functionality

1. **Event Listeners**: Attach event listeners to all buttons.
2. **Input Handling**:
- Update the display with each button press.
- Handle decimal point input to avoid multiple decimal points.
- Implement backspace functionality (e.g., using the Delete key).
- Toggle sign of the number (between positive and negative numbers).
3. **Operator Logic**:
- Store the first operand, operator, and current input.
- When the "=" button is pressed, perform the calculation and update the display.
- Handle operator precedence (e.g., multiplication and division before addition and subtraction).
4. **Clear Button**: Reset the calculator to its initial state.

## Additional Considerations

- **Responsive Design**: Ensure the calculator looks good and functions correctly on different screen sizes.
- **Accessibility**: Use appropriate ARIA attributes to make the calculator accessible to users with disabilities.
- **Error Handling**: Handle potential errors, such as division by zero.
- **Keyboard Support**: Allow users to interact with the calculator using keyboard shortcuts.
- **Performance Optimization**: Optimize JavaScript code for efficient calculations and smooth user experience.
