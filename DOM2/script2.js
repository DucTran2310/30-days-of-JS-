let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let author=document.getElementById('authorName');
let doc=document.getElementById('docName');

h1.style.textAlign = 'center';
h2.style.textAlign = 'center';
h2.textContent = 'Total Countries: ' + countries.length;
author.style.textAlign='center';
doc.style.textAlign='center';

let table=document.createElement('table');
document.body.appendChild(table);
let idx=0;
for(let i=0;idx<countries.length;i++)
{
    let tr=document.createElement('tr');
    tr.style.alignSelf='center';
    for (let j=0;j<6 && idx<countries.length;j++)
    {
        let td=document.createElement('td');
        td.textContent=countries[idx]['name'].toUpperCase();
        td.style.textAlign='center';
        td.width='150px';
        td.height='150px';
        td.style.border='2px solid #E8E5E4';
        tr.appendChild(td);
        idx++;
    }
    table.appendChild(tr);
}
table.style.margin='5px auto';