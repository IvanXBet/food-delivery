function slider() {
    const slides = document.querySelectorAll('.offer__slide'),
    prev = document.querySelector('.offer__slider-prev'),
    next = document.querySelector('.offer__slider-next'),
    total = document.querySelector('#total'),
    current = document.querySelector('#current'),
    slidesWrapper = document.querySelector(".offer__slider-wrapper"),
    width = window.getComputedStyle(slidesWrapper).width,
    slidesField = document.querySelector(".offer__slider-inner");
    let slideIndex = 1;
    let offset = 0;


    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '1s all'
    slidesWrapper.style.overflow = 'hidden';

    slides < 10 ? total.textContent = `0${slides.length}` : `${slides.length}`;

    function showSlide() {
        slideIndex < 10 ? current.textContent = `0${slideIndex}` : `${slideIndex}`
        dots.forEach(elm => {
            elm.style.opacity = '0.5'
        })
        dots[slideIndex - 1].style.opacity = '1'
        slidesField.style.transform = `translateX(-${offset}px)`
    }

    next.addEventListener('click', ()=>{
        if(offset == +width.match(/\d+/) * (slides.length - 1)) {
            offset = 0;
            slideIndex = 1;
        } else {
            offset += +width.match(/\d+/)
            slideIndex += 1
        }
        showSlide()

    })

    prev.addEventListener('click', ()=> {
        if(offset == 0) {
            offset = +width.match(/\d+/) * (slides.length - 1)
            slideIndex = slides.length;
        } else {
            offset -= +width.match(/\d+/)
            slideIndex -= 1
        }
        showSlide()
    })

    //точки для слайдера
    const indicator = document.createElement('ol'),
          dots = [];

    indicator.classList.add('carusel-indicator');
    indicator.style.cssText =`
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slidesWrapper.append(indicator);

    for(let i = 0; i < slides.length; i++){
        let dot = document.createElement('li')
        dot.setAttribute('data-slide-to', i+1)
        dot.style.cssText =` 
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;`;
        if (i == 0) dot.style.opacity = 1;
        indicator.append(dot);
        dots.push(dot)
    }

    dots.forEach(dot => {
        dot.addEventListener('click', e => {
            let slideTo = e.target.getAttribute('data-slide-to')
            slideIndex = slideTo;
            offset = +width.match(/\d+/) * (slideTo -1)
            showSlide()
        })
    })
}

export default slider;