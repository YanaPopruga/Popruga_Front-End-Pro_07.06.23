const container = document.querySelector(".container");
const div = document.createElement("div");
const img = document.createElement("img");

div.style.position = "absolute";
div.style.top = "0";
div.style.right = "0";
div.style.display = "none";

img.src = "/img/images.jpg";

div.appendChild(img);
container.appendChild(div);

const myInput = document.getElementById('myInput');
myInput.addEventListener('focus', function () {
    div.style.display = 'block';
});

myInput.addEventListener('blur', function () {
    div.style.display = 'none';
});