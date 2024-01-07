'use strict';

let checkBox = document.querySelector('#toggle');
let monthly = document.querySelectorAll('.price-monthly');
let annually = document.querySelectorAll('.price-annually');

checkBox.addEventListener('change', function() {

    if(checkBox.checked) {
        annually.forEach(price => price.style.display = "none");
        monthly.forEach(price => price.style.display = "flex");
    } else {
        annually.forEach(price => price.style.display = "flex");
        monthly.forEach(price => price.style.display = "none");
    }
})
