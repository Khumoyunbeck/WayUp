
// var tabs = document.getElementById('tabs');
// var content = document.querySelectorAll('.content');

// function changeClass(el){
//     for(var i = 0; i < tabs.children.length; i++){
//         tabs.children[i].classList.remove('active');
//     }
//     el.classList.add('active');
// }

// tabs.addEventListener('click',function(e){
//     var currTab = event.target.dataset.btn;
//     changeClass(event.target);
//     for(var i = 0; i < content.length; i++){
//         content[i].classList.remove('active');
//         if(content[i].dataset.content === currTab){
//             content[i].classList.add('active');
//         }
//     }
// })

// // modal
// const btnOpen = document.getElementById('btn-open');
//     const btnClose = document.getElementById('close-btn');
//     const modalWrap = document.getElementById('modal-wrapper');

//     btnOpen.addEventListener('click',() => {
//             modalWrap.classList.add('active');
//     })

//     const closeModal = () =>{
//             modalWrap.classList.remove('active');
//     }

//     modalWrap.addEventListener('click',closeModal);

//     for(let modalWindow of modalWrap.children)
//         modalWindow.addEventListener('click', event=> {
//             event.stopPropagation()
//         })

//     btnClose.addEventListener('click',closeModal);

// // Slider
// const prev = document.getElementById('btn-prev'),
// const next = document.getElementById('btn-next'),
// const slides = document.querySelectorAll('.slide'),
// const dots = document.querySelectorAll('.dot'),
// const slidesWrap = document.querySelectorAll('.slider-wrapper');

// let index = 0;

// const activeSlide = n => {
//     for(slide of slides){
//         slide.classList.remove('active');
//     }
//     slides[n].classList.add('active');
// }

// const activeDot = n => {
//     for(dot of dots) {
//         dot.classList.remove('active');
//     }
//     dots[n].classList.add('active');
// }

// const prepareCurrentSlide = ind => {
//     activeSlide(ind);
//     activeDot(ind);
// }

// const nextSlide = () => {
//     if(index == slides.length - 1){
//         index = 0;
//         prepareCurrentSlide(index);
//     }else{
//         index++;
//         prepareCurrentSlide(index);
//     }
// };
// const prevSlide = () => {
//     if(index == 0){
//         index = slides.length - 1;
//         prepareCurrentSlide(index);
//     }else{
//         index--;
//         prepareCurrentSlide(index);
//     }
// };

// dots.forEach((item,indexDot) => {
//     item.addEventListener('click', () => {
//         index = indexDot;
//         prepareCurrentSlide(index);
//         clearInterval(interval);
//     })
// });

// next.addEventListener('click', nextSlide);
// prev.addEventListener('click', prevSlide);

// const interval = setInterval(nextSlide, 2500);

const prev = document.getElementsByClassName('btn__prev'),
      next = document.getElementsByClassName('btn__next'),
      slides = document.querySelectorAll('slide'),
      bullets = document.querySelectorAll('bullet'),
      sliderWrap = document.querySelectorAll('.slider-wrapper');

let index = 0;

const activeSlide = n => {
    for(slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const avtiveBullet = n => {
    for(bullet of bullets) {
        bullet.classList.remove('active');
    }
    bullet[n].classList.add('active');
}

const prepareCurrentSlide = ind=> {
    activeSlide(ind);
    activeBullet(ind);
}

const nextSlide = () => {
    if(index == slides.length - 1){
        index = 0;
        prepareCurrentSlide(index);
    }else{
        index++;
        prepareCurrentSlide(index);
    }
};
const prevSlide = () => {
    if(index == 0){
        index = slides.length - 1;
        prepareCurrentSlide(index);
    }else{
        index--;
        prepareCurrentSlide(index);
    }
};

bullets.forEach((item,indexBullet) => {
    item.addEventListener('click', () => {
        index = indexBullet;
        prepareCurrentSlide(index);
        clearInterval(interval);
    })
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

const interval = setInterval(nextSlide, 3500);
