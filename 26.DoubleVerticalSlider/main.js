const sliderContainer = document.querySelector('.slider-container')
const leftSlide = document.querySelector('.left-slide')
const rightSlide = document.querySelector('.right-slide')
const upBtn = document.querySelector('.up-btn')
const downBtn = document.querySelector('.down-btn')
const slidesLength = rightSlide.querySelectorAll('div').length

let activeSlideIndex = 0

leftSlide.style.top =  `-${(slidesLength - 1) * 100}vh`

upBtn.addEventListener('click', () => changesSlide('up'))
downBtn.addEventListener('click', () => changesSlide('down'))

const changesSlide = (direction) => {

    if (direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else {
        activeSlideIndex--
        if (activeSlideIndex <  0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    rightSlide.style.transform = `translateY(-${activeSlideIndex * 100}vh)`
    leftSlide.style.transform = `translateY(${activeSlideIndex * 100}vh)`
}