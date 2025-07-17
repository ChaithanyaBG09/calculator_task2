function append(value) {
  const operators = ['+', '-', '*', '/', '×', '÷'];
  const current = display.innerText;
  if (current === '0' && !operators.includes(value)) {
    display.innerText = value;
    return;
  }

  const lastChar = current.slice(-1);
  if (operators.includes(lastChar) && operators.includes(value)) {
    display.innerText = current.slice(0, -1) + value;
  } else {
    display.innerText += value;
  }
}