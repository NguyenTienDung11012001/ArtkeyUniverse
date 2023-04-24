const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// Slider swipe
{
    const sliderImg = $('.slider__img')

    $$('.slider__icon').forEach(sliderButton => {
        sliderButton.onclick = () => {
            sliderImg.classList.toggle('slider__img--activeLeft')
            sliderImg.classList.add('slider__img--activeRight')
        }
    });

    const blogSlider = $('.blog-slider__row')
    const blogSliderItem = $(".blog-slider__item").offsetWidth


    $('.blog-slider .slider__icon-left').onclick = () => {
        blogSlider.scrollBy({
            top: 0,
            left: -blogSliderItem,
            behavior: 'smooth'
        })
    }

    $('.blog-slider .slider__icon-right').onclick = () => {
        blogSlider.scrollBy({
            top: 0,
            left: +blogSliderItem,
            behavior: 'smooth'
        })
    }
}

// Support button click
$('.navbar__item-support').onclick = () => {
    $('.support__list').classList.toggle('support__list--active')
}

// Login click 
{
    function removeForm(){
        $('.modal').classList.remove('open')
        $('.auth-form.login').classList.remove('open')
        $('.auth-form.register').classList.remove('open')
    }
    
    function openForm(){
        $('.modal').classList.add('open')
        $('.auth-form.login').classList.add('open')
    }
    
    $('.navbar__item-login').onclick = () => {
        openForm()
    }
    
    $('.overlay').onclick = () => {
        removeForm()
    }
    
    $$('.auth-form__icon').forEach(icon => {
        icon.onclick = () => {
            removeForm()
        }
    })
    
    $('.login__link-sigup').onclick = () => {
        $$('.auth-form').forEach(form => {
            form.classList.toggle('open')
        });
    }
    
    $('.register__switch-link').onclick = () => {
        $$('.auth-form').forEach(form => {
            form.classList.toggle('open')
        });
    }
}

// Cart click
$('.navbar__item-shopping-cart').onclick = () => {
    $('.shopping-cart').classList.toggle('open')
}
 



