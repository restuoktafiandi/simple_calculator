'use strict';

const btn_number = document.querySelectorAll('.btn');
const result = document.querySelector('.input_user');

let display = (number) => {
    result.value += number;
}

btn_number.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        display(event.target.innerText);
    })
});

const btn_clr = document.querySelector('.clr_btn');
const btn_del = document.querySelector('.del_btn');
const btn_result = document.querySelector('.result_btn');

btn_clr.addEventListener('click', () => {
    result.value = "";
})

btn_del.addEventListener('click', () => {
    result.value = result.value.slice(0, -1);
})

btn_result.addEventListener('click', () => {
    try {
        result.value = eval(result.value);
    } catch(err) {
        const modal = document.querySelector('.modal');
        const overlay = document.querySelector('.overlay');
        const btn_close = document.querySelector('.btn_close');

        modal.style.display = "block";
        overlay.style.display = "flex";

        btn_close.addEventListener('click', () => {
            modal.style.display = "none";
            overlay.style.display = "none";          
        })
    }
})



