const display = document.getElementById('display');

function append(value) {
  const operators = ['+', '-', '*', '/', '×', '÷'];
  let current = display.innerText;

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
