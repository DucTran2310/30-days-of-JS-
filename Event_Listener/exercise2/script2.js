let body = document.querySelector('body');
let section = document.querySelector('section');
let keyName = document.querySelector('.key');
let keyCode = document.querySelector('.key-code');

keyName.innerHTML = '<h1>Press any keyboard key<h1>';
keyCode.innerHTML = '<h1>...<h1>';

// Event on keydown
body.addEventListener('keydown',(e) => {
    let keyMessage = `<h1>You pressed <span >${e.key.toUpperCase()}</span></h1>`;
    keyName.innerHTML = keyMessage;

    // e.keyCode is deprecated, so now I use e.code instead
    let keyCodeMessage = `<h1><span>${e.code}</span></h1>`;
    keyCode.innerHTML = keyCodeMessage;

    // span style
    let span1 = keyName.querySelector('span');
    let span2 = keyCode.querySelector('span');
    span1.style.color = '#1ac01a';
    span2.style.color = '#1ac01a';
});

