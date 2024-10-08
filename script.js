const menuBtn = document.getElementById("menu-btn")
const navLinks = document.getElementById("nav-links")
const menuBtnIcon = menuBtn.querySelector("i")

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open")

    const isOpen = navLinks.classList.contains("open")
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-4-line")
})
navLinks.addEventListener('click', () => {
    navLinks.classList.remove("open")
    menuBtnIcon.setAttribute("class", "ri-menu-4-line")
})


//scroll reveal  
const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
}

ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container form", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header__container img", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".range__card", {
    duration: 1000,
    internval: 500,
});

ScrollReveal().reveal(".location__image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".location__content  .section__header", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".location__content  p", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".location__content  .location__btn", {
    ...scrollRevealOption,
    delay: 1500,
});


ScrollReveal().reveal(".story__card", {
    ...scrollRevealOption,
    internval: 500,
});


ScrollReveal().reveal(".download__image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".download__content  .section__header", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".download__links", {
    ...scrollRevealOption,
    delay: 1000,
});



ScrollReveal().reveal(".news__container   .section__header", {
    ...scrollRevealOption,
    delay: 500,
});


//swiper config
const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        depth: 500,
        modifier: 1,
        scale: 0.75,
        slideShadows: false,
        stretch: -100,
    },
    autoplay: {
        delay: 5000,
    },
    onAny(event, ...args) {
        updateSwiperImage
    },
});




const banner = document.querySelector(".banner__wrapper")
const bannerContent = Array.from(banner.children)

bannerContent.forEach((item) => {
    const duplicateNode = item.cloneNode(true)
    duplicateNode.setAttribute("aria-hidden", true)
    banner.appendChild(duplicateNode)

})


//car images  load

const selectCards = document.querySelectorAll(".select_card")
selectCards[0].classList.add("show__info")

const price = ["255", "455", "275", "625", "395"]

const priceEl = document.getElementById("select-price")

function updateSwiperImage(eventName, args) {
    if (eventName === "slideChangeTrasitionStart") {
        const index = args && args[0].realIndex
        priceEl.innerText = price[index]
        selectCards.forEach((item) => {
            item.classList.remove("show__info")
        })
        selectCards[index].classList.add("show__info")
    }
}

