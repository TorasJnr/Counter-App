document.addEventListener('DOMContentLoaded', ()=> {
    const counter = document.querySelector("counter-value");
    const addBtn = document.querySelector("add-btn");
    const subBtn = document.querySelector("sub-btn");
    const resetBtn = document.querySelector("reset-btn");
    function handleAdd() {
        let currentvalue = Number(counter.textContent);
        currentvalue += 1;
        counter.textContent = currentvalue;
    }
    function handleSubtract() {
        let currentvalue = Number(counter.textContent);
        if (currentvalue > 0) {
            currentvalue -= 1;
            counter.textContent = currentvalue;
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