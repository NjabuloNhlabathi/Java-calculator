const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let current = '';

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.textContent;

    if (value === 'C') {
      current = '';
      display.value = '';
    } else if (value === '=') {
      try {
        current = eval(current).toString();
        display.value = current;
      } catch {
        display.value = 'Error';
        current = '';
      }
    } else {
      current += value;
      display.value = current;
    }
  });
});
