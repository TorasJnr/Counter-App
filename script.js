document.addEventListener('DOMContentLoaded', ()=> {
    const counterValueE1 = document.querySelector("counter-value");
    const addBtn = document.querySelector("add-btn");
    const subBtn = document.querySelector('[data-sub]');
    const resetBtn = document.querySelector('[data-reset]');
    function handleAdd() {
        let currentvalue = Number(counterValueE1.textContent);
        currentvalue += 1;
        counterValueE1.textContent = currentvalue;
    }
    function handleSubtract() {
        let currentvalue = Number(counterValueEl.textContent);
        if (currentvalue > 0) {
            currentvalue -= 1;
            counterValueEl.textContent = currentValue;
        }
    }

    function handleReset() {
      counterValueEl.textContent = 0;
    }

addBtn.addEventListener('click', handleAdd);
subBtn.addEventListener('click', handleSubtract);
resetBtn.addEventListener('click', handleReset);

});

// git add .
// git commit -m "Initial commit"
// git push