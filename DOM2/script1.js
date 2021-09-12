// func check prime num

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

let table = document.createElement('table');
document.body.appendChild(table);

let num=0;
for(let i=0;i<17;i++)
{
    let tr=document.createElement('tr');
    tr.style.alignSelf='center';
    for(let j=0;j<=5;j++)
    {
        let td=document.createElement('td');
        if(checkPrime(num))
        {
            td.style.backgroundColor='RED';
        }
        else if(num%2==0)
        {
            td.style.backgroundColor='GREEN';
        }
        else
        {
            td.style.backgroundColor='YELLOW';
        }
        td.textContent=num;
        td.style.fontSize='40px';
        td.style.textAlign='center';
        td.style.color='WHITE';
        td.style.width='150px';
        td.style.height='80px';
        tr.appendChild(td);
        num++;
    }
    table.appendChild(tr);
};

table.style.margin = '10px auto';
let h1=document.querySelector('h1');
let h2= document.querySelector('h2');
let h3 = document.querySelector('h3');

h1.style.textAlign = 'center';
h2.style.textAlign = 'center';
h3.style.textAlign = 'center';
