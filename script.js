const display = document.getElementById('display');

function append(value) {
  if (display.innerText === '0') {
    display.innerText = value === '()' ? '()' : value;
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
const result = eval(display.innerText.replace('÷', '/').replace('×', '*'));
    display.innerText = result;
} catch {
    display.innerText = 'Error';
  }
}
