const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const image = document.querySelector("#banner .banner-img");
const tagLine = document.querySelector("#banner p");
const dots = document.querySelectorAll("#banner .dots .dot");
let i = 0;

function moveLeft() {
	dots[i].classList.remove("dot_selected");
	if (i === 0) {
		i = 3;

	}
	else {
		i--;
	}

	dots[i].classList.add("dot_selected");
	image.src = "./assets/images/slideshow/" + slides[i].image;
	tagLine.innerHTML = slides[i].tagLine;

}

const flecheGauche = document.getElementById("button_left");
flecheGauche.addEventListener("click", moveLeft);

function moveRight() {
	dots[i].classList.remove("dot_selected");
	if (i === 3) {
		i = 0;

	}
	else {
		i++;
	}

	dots[i].classList.add("dot_selected");
	image.src = "./assets/images/slideshow/" + slides[i].image;
	tagLine.innerHTML = slides[i].tagLine;
}

const flecheDroite = document.getElementById("button_right");
flecheDroite.addEventListener("click", moveRight);