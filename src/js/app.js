const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
});

const images = document.querySelectorAll(".image-block img");
const imageBlock = document.querySelectorAll(".image-block");
const container22 = document.querySelector("#result");
const startBtn = document.querySelector("#start");
const inputs = document.querySelectorAll("input");
const slides = document.querySelectorAll(".swiper-slide");
const tasks = document.querySelectorAll(".tasks");
const main = document.querySelector("main");
const arr = [];

tasks.forEach(task => task.classList.add("hide"));

imageBlock.forEach(block => {
    block.addEventListener("touchstart", () => {
        arr.push(block);
        block.remove();
        renderResult();
    });
});

function renderResult() {
    if (arr.length === 0) {
        return;
    } else {
        arr.forEach(el => container22.append(el));
        showCongrats();
    }
}


startBtn.addEventListener('click', function () {
    location.href = "#task1";
    document.querySelector("#task1").classList.remove("hide");
})

inputs.forEach(input => {
    input.addEventListener("click", showNext);
})

function showNext(event) {
    if (inputs[0].checked) {
        document.querySelector("#task2").classList.remove("hide");
        location.href = "#task2";
    }
    if (event.target === slides[6].firstElementChild) {
        document.querySelector("#task3").classList.remove("hide");
        location.href = "#task3";
    }

}

slides.forEach(slide => slide.addEventListener("click", showNext));

function showCongrats() {
    if (container22.children[2]) {
        document.querySelector("#congrats-container").classList.remove("hide");
        location.href = "#congrats-container";
    }
}