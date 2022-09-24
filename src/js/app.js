// Responsive Navbar
function Menu(e) {

    var menu = document.getElementById("navbar-items");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }

    e.classList.contains("bx-menu") ?
        (menu.classList.add = "flex", e.classList.toggle("bx-x")) :
        (menu.classList.add = "hidden", e.classList.toggle("bx-menu"));
}

// Subscrtiption Card Button for switching images

function btnSubDark(e) {
    const BtnDark = document.getElementById("subBtnDark");
    const BtnLight = document.getElementById("subBtnLight");
    
    var subImg = document.querySelector(".sub-img");
    
    e.src="./src/assets/cards/card-light.png" ?
    (subImg.src="./src/assets/cards/card-dark.png", BtnDark.classList.add("sub-active"), BtnLight.classList.remove("sub-active")) :
    (subImg.src="./src/assets/cards/card-light.png");
}
function btnSubLight(e) {
    const BtnLight = document.getElementById("subBtnLight");
    const BtnDark = document.getElementById("subBtnDark");
    
    var subImg = document.querySelector(".sub-img");

    e.src="./src/assets/cards/card-dark.png" ?
    (subImg.src="./src/assets/cards/card-light.png", BtnLight.classList.add("sub-active"), BtnDark.classList.remove("sub-active")) :
    (subImg.src="./src/assets/cards/card-dark.png");
}

// Btn 2
function btnSubDark2(e) {
    const BtnDark = document.getElementById("subBtnDark2");
    const BtnLight = document.getElementById("subBtnLight2");
    
    var subImg = document.querySelector(".sub-img-2");
    
    e.src="./src/assets/cards/card-light.png" ?
    (subImg.src="./src/assets/cards/card-dark.png", BtnDark.classList.add("sub-active"), BtnLight.classList.remove("sub-active")) :
    (subImg.src="./src/assets/cards/card-light.png");
}
function btnSubLight2(e) {
    const BtnLight = document.getElementById("subBtnLight2");
    const BtnDark = document.getElementById("subBtnDark2");
    
    var subImg = document.querySelector(".sub-img-2");

    e.src="./src/assets/cards/card-dark.png" ?
    (subImg.src="./src/assets/cards/card-light.png", BtnLight.classList.add("sub-active"), BtnDark.classList.remove("sub-active")) :
    (subImg.src="./src/assets/cards/card-dark.png");
}

window.onload = function () {
    document.getElementById("subBtnDark").classList.add("sub-active");
    document.getElementById("subBtnDark2").classList.add("sub-active");

    // On clicking an anchor element, the page will navigate to relevent id
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
            });
        });
    });

    // Change Header Properties on Scroll
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 100) {
            $(".header").addClass("bg-gradient");
            $(".menu-link").removeClass("md:text-white");
            $(".menu-link").addClass("text-secondary-dark");
            $(".bx").addClass("text-secondary-dark");
        } else {
            $(".header").removeClass("bg-gradient");
            $(".menu-link").addClass("md:text-white");
            $(".menu-link").removeClass("text-secondary-dark");
            $(".bx").removeClass("text-secondary-dark");
        }
    });

    // Header Indicator Line
    window.onscroll = function () {
        headerIndicator()
    };

    function headerIndicator() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("indicator").style.width = scrolled + "%";
    }

    // FAQ Links
    const faqLink = document.getElementById('faqLink1')
    const faqAnswer = document.getElementById('faqAnswer1')
    const plusIcon = document.getElementById('plus1')

    faqLink.onclick = function () {

        faqAnswer.classList.toggle('expanded');


        if (plusIcon.classList.contains("bx-plus")) {
            plusIcon.classList.remove("bx-plus");
            plusIcon.classList.add("bx-minus");
        } else {
            plusIcon.classList.remove("bx-minus");
            plusIcon.classList.add("bx-plus");
        }
    }


    const faqLink2 = document.getElementById('faqLink2')
    const faqAnswer2 = document.getElementById('faqAnswer2')
    const plusIcon2 = document.getElementById('plus2')

    faqLink2.onclick = function () {

        faqAnswer2.classList.toggle('expanded');


        if (plusIcon2.classList.contains("bx-plus")) {
            plusIcon2.classList.remove("bx-plus");
            plusIcon2.classList.add("bx-minus");
        } else {
            plusIcon2.classList.remove("bx-minus");
            plusIcon2.classList.add("bx-plus");
        }
    }

    const faqLink3 = document.getElementById('faqLink3')
    const faqAnswer3 = document.getElementById('faqAnswer3')
    const plusIcon3 = document.getElementById('plus3')

    faqLink3.onclick = function () {

        faqAnswer3.classList.toggle('expanded');


        if (plusIcon3.classList.contains("bx-plus")) {
            plusIcon3.classList.remove("bx-plus");
            plusIcon3.classList.add("bx-minus");
        } else {
            plusIcon3.classList.remove("bx-minus");
            plusIcon3.classList.add("bx-plus");
        }
    }

    const faqLink4 = document.getElementById('faqLink4')
    const faqAnswer4 = document.getElementById('faqAnswer4')
    const plusIcon4 = document.getElementById('plus4')

    faqLink4.onclick = function () {

        faqAnswer4.classList.toggle('expanded');


        if (plusIcon4.classList.contains("bx-plus")) {
            plusIcon4.classList.remove("bx-plus");
            plusIcon4.classList.add("bx-minus");
        } else {
            plusIcon4.classList.remove("bx-minus");
            plusIcon4.classList.add("bx-plus");
        }
    }

    const faqLink5 = document.getElementById('faqLink5')
    const faqAnswer5 = document.getElementById('faqAnswer5')
    const plusIcon5 = document.getElementById('plus5')

    faqLink5.onclick = function () {

        faqAnswer5.classList.toggle('expanded');


        if (plusIcon5.classList.contains("bx-plus")) {
            plusIcon5.classList.remove("bx-plus");
            plusIcon5.classList.add("bx-minus");
        } else {
            plusIcon5.classList.remove("bx-minus");
            plusIcon5.classList.add("bx-plus");
        }
    }
};