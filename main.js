
const buttons = document.querySelectorAll('button');
const themeToggle = document.getElementById('theme-toggle');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.value === '=') {
            try {
                result.value = eval(result.value);
            } catch (error) {
                result.value = 'Error';
            }
        } else if (button.value === 'AC') {
            result.value = '';
        } else if (button.value === 'DEL') {
            result.value = result.value.slice(0, -1);
        } else {
            result.value += button.value;
        }
    });
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});