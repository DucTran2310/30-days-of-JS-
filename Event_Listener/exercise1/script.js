let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');
let div = document.createElement('div');

// div styles
div.style.display = 'flex';
div.style.flexWrap = 'wrap';
div.style.justifyContent = 'center';
div.style.margin = '0 auto';
div.style.width = '75%';

document.body.appendChild(div);

function checkPrime(num) {
    let isPrime = true;
    if(num === 0 ){
        return false;
    }
    else if(num === 1){
        return false;
    }
    else if(num > 1) {
        for(let i = 2; i < num; i++){
            if(num % i ==0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
};

// Num Gen App Magic
let p = document.querySelector('p');
let number = document.querySelector('#number');
let button = document.querySelector('button');

button.addEventListener('click', () => {
    div.textContent = '';
    num = number.value;
    p.innerHTML = '';

    if (typeof (Number(num)) === "number" && Number(num) > 0) {
        for (let i = 0; i < num; i++) {
            if (checkPrime(i)) {
                let box = document.createElement('div');
                box.textContent = i;
                box.style.color = 'white';
                box.style.fontSize = '40px';
                box.style.width = '100px';
                box.style.height = '50px';
                box.style.backgroundColor = '#FD5E53';
                box.style.margin = '3px';
                box.style.lineHeight = '50px';
                box.style.textAlign = 'center';
                div.appendChild(box);
            } else if (i % 2 === 0) {
                let box = document.createElement('div');
                box.textContent = i;
                box.style.color = 'white';
                box.style.fontSize = '40px';
                box.style.width = '100px';
                box.style.height = '50px';
                box.style.backgroundColor = '#21BF73';
                box.style.margin = '3px';
                box.style.lineHeight = '50px';
                box.style.textAlign = 'center';
                div.appendChild(box);
            } else {
                let box = document.createElement('div');
                box.textContent = i;
                box.style.color = 'white';
                box.style.fontSize = '40px';
                box.style.width = '100px';
                box.style.height = '50px';
                box.style.backgroundColor = '#FDDB3A';
                box.style.margin = '3px';
                box.style.lineHeight = '50px';
                box.style.textAlign = 'center';
                div.appendChild(box);
            }
        }
    } else if (num.length === 0) {
        p.textContent = 'Field is required';
        p.style.color = 'red';
    } else if (typeof (num) === "string") {
        p.textContent = "Please enter number values only";
        p.style.color = "red";
    }
})