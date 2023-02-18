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

const arr = [];

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
    }
}


startBtn.addEventListener('click', function (e) {
    e.preventDefault();
    location.href = "#task1";
})

