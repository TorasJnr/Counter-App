document.addEventListener('DOMContentLoaded', ()=> {
    const counterValueE1 = document.querySelector('[data-counter-value]');
    const addBtn = document.querySelector('[data-add]');
    const subBtn = document.querySelector('data-sub');
    const subBtn = document.querySelector('data-reset');
    function handleAdd() {
        let currentvalue = Number(counterValueE1.textContent);
        currentValue += 1;
        counterValueE1.textContent = currentValue;
    }

})

// git add .
// git commit -m "Initial commit"
// git push