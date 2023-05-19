/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


/*=============== MENU Show ===============*/
/*= Validate if constant exixts */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*=============== MENU Hidden ===============*/
/*= Validate if constant exixts */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When c;ick on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SWIPER PROJECTS ===============*/
let swiper = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoint: {
        1150: {
            slidesPerView: 2,
            spaceBetween: -56,
        },
    },
    mousewheel: true
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form"')
const contactName = document.getElementById('contact-name"')
const contactEmail = document.getElementById('contact-gmail"')
const contactPesan = document.getElementById('contact-pesan"')
const contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // Check of the field has a value
    if (contactName.value === '' || contactEmail.value === '' || contactPesan === '') {

        // Add and remove color
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        // Showw Message
        contactMessage.textContent = 'Tulis semua kolom 📥'

    } else {
        // serviceID - templateID - #form - publickey
        emailjs.sendForm('service_rnn79vj', 'template_e7d730t', '#contact-form', 'XLVMqZbTDlQIQEnRB')
            .then(() => {
                // Show message and color
                contactMessage.classList.add('color-blue')
                contactMessage.textContent = 'Pesan terkirim 👍'

                // Remove message after five seconds
                setTimeout(() => {

                    contactMessage.textContent = ''
                }, 5000)

            })
    }
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/


/*=============== DARK LIGHT THEME ===============*/


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

