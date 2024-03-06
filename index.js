const navKebab = document.querySelector('.kebab')
const sidemenu = document.querySelector('.sidemenu')
const overlay = document.querySelector('.overlay-sidemenu')
// const carouselRightBtn = document.querySelector('.carousel-btn-right')
// const carouselLeftBtn = document.querySelector('.carousel-btn-left')
const carouselCards = document.querySelector('.category-cards')
const slide = carouselCards.querySelectorAll('.category-card')
const slideWidth = carouselCards.querySelector('.category-card').offsetWidth;
let currentSlideIndex = 0;

// carouselRightBtn.addEventListener('click', () => {
//   if(currentSlideIndex < slide.length  ){
//     currentSlideIndex++;
//     console.log(currentSlideIndex, slideWidth)
//   slide.forEach(oneSlide => {
//     oneSlide.style.transform = `translateX(-${slideWidth}px)`;
//     // oneSlide.scrollLeft -= oneSlide.offsetWidth;
//   })
  
//   }
//   else{
//     carouselRightBtn.setAttribute('disabled', true)
//   }
// });
// carouselLeftBtn.addEventListener('click', () => {
//     if(currentSlideIndex > 0){
//         console.log(slideWidth, currentSlideIndex)
//         // carouselRightBtn.setAttribute('disabled', false)
//         currentSlideIndex--; 
//     slide.forEach(oneSlide => {
//       oneSlide.style.transform = `translateX(${ slideWidth}px)`;
//     // oneSlide.scrollLeft += oneSlide.offsetWidth;

//     })
//     }
//   });
navKebab.addEventListener('click', ()=>{
    sidemenu.classList.toggle('show-sidemenu')
    overlay.classList.toggle('show-overlay')
    navKebab.classList.toggle('clicked-kebab')
})
overlay.addEventListener('click', ()=>{
    sidemenu.classList.remove('show-sidemenu')
    overlay.classList.remove('show-overlay')
    navKebab.classList.remove('clicked-kebab')
})
// carouselRightBtn.addEventListener('click', ()=>{
//     console.log(carouselCards.clientWidth)
//     carouselCards.style.transform = 'translate(carouselCards.clientWidth)';
// })