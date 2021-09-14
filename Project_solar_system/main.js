const space = {
    mercury: {
        gravity: 3.7,
        image: "./images/mercury.png",
    },
    venus: {
        gravity: 8.87,
        image: "./images/venus.png",
    },
    earth: {
        gravity: 9.807,
        image: "./images/earth.png",
    },
    mars: {
        gravity: 3.711,
        image: "./images/mars.png",
    },
    jupiter: {
        gravity: 24.79,
        image: "./images/jupiter.png",
    },
    saturn: {
        gravity: 10.44,
        image: "./images/saturn.png",
    },
    uranus: {
        gravity: 8.87,
        image: "./images/uranus.png",
    },
    neptune: {
        gravity: 11.15,
        image: "./images/neptune.png",
    },
    pluto: {
        gravity: 0.62,
        image: "./images/pluto.png",
    },
};

const input = document.querySelector("input");
const select = document.querySelector("select");
const button = document.querySelector("button");
const container = document.querySelector(".container");

const containerUI = (img,text) => {
    image = document.createElement('img');
    image.src = `${img}`;
    let p = document.createElement('p');
    p.textContent = text;
    p.className = "big";
    container.appendChild(image);
    container.appendChild(p);
};

button.addEventListener("click",function(){
    let imgSrc;
    container.innerHTML = "";
    imgSrc = space[select.value].image;
    weight = Number(input.value) * space[select.value].gravity;
    containerUI(imgSrc, `The weight is ${weight}`);
});