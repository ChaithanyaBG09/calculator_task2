function append(value) {
  const operators = ['+', '-', '*', '/', '×', '÷', '%'];
  const lastChar = display.innerText.slice(-1);

  if (display.innerText === '0') {
    display.innerText = value;
    return;
  }

  // If last character is operator and new input is also operator
  if (operators.includes(lastChar) && operators.includes(value)) {
    // Replace last operator with new one
    display.innerText = display.innerText.slice(0, -1) + value;
  } else {
    display.innerText += value;
  }
}
function clearDisplay() {
  display.innerText = '0';
}

function deleteChar() {
  const current = display.innerText;
  if (current.length <= 1) {
    display.innerText = '0';
  } else {
    display.innerText = current.slice(0, -1);
  }
}

function calculate() {
  try {
    let expression = display.innerText
      .replace(/÷/g, '/')
      .replace(/×/g, '*');

    const result = eval(expression);

    display.innerText = result;
  } catch {
    display.innerText = 'Error';
  }
}
