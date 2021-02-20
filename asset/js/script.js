//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
const body = document.querySelector("body");
const title = document.querySelector(".card__info--title");
const desc = document.querySelector(".card__info--desc");
const image = document.querySelector(".card__image img");
const purchase = document.querySelector(".btn-purchase");
const sizes = document.querySelector(".card__btns");
const btnSize = document.querySelectorAll(".btn-size");

const addToggleClass = () => {
    btnSize.classList.toggle("active");
};
//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

//Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
    title.style.transform = "translateZ(150px)";
    desc.style.transform = "translateZ(125px)";
    image.style.transform = "translateZ(200px) rotateZ(-40deg)";
    purchase.style.transform = "translateZ(75px)";
    sizes.style.transform = "translateZ(100px)";
});

//Animate out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = "rotateX(0deg) rotateY(0deg)";

    //Popback
    title.style.transform = "translateZ(0px)";
    desc.style.transform = "translateZ(0px)";
    image.style.transform = "translateZ(0px) rotateZ(0deg)";
    purchase.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
});

for (let i = 0; i < btnSize.length; i++) {
    btnSize[i].addEventListener("click", () => {
        let currentSize = document.getElementsByClassName("active");
        currentSize[0].classList.remove("active");
        btnSize[i].classList.toggle("active");
    });
}
