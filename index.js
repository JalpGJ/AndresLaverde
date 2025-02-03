document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var header = document.getElementById("header");
        var headerLogo = document.getElementById("header__logo");
        var header__boton__burger = document.getElementById(
            "header__boton__burger"
        );
        var menu__desktop__a1 = document.getElementById("menu__desktop__a1");
        var menu__desktop__a2 = document.getElementById("menu__desktop__a2");
        var menu__desktop__a3 = document.getElementById("menu__desktop__a3");
        var menu__desktop__a4 = document.getElementById("menu__desktop__a4");

        var scrollY = window.scrollY;
        if (Xactive == true) {
            if (scrollY > 0) {
                header.style.backgroundColor = "white";
                headerLogo.style.color = "black";
                header__boton__burger.setAttribute(
                    "src",
                    "./img/burgerblack.png"
                );
                menu__desktop__a1.style.color = "black";
                menu__desktop__a2.style.color = "black";
                menu__desktop__a3.style.color = "black";
                menu__desktop__a4.style.color = "black";
            } else {
                header.style.backgroundColor = "transparent";
                headerLogo.style.color = "white";
                header__boton__burger.setAttribute(
                    "src",
                    "./img/burgerwhite.png"
                );
                menu__desktop__a1.style.color = "white";
                menu__desktop__a2.style.color = "white";
                menu__desktop__a3.style.color = "white";
                menu__desktop__a4.style.color = "white";
            }
        } else {
            header.style.backgroundColor = "white";
            headerLogo.style.color = "black";
        }
    });

    var header__boton = document.getElementById("header__boton");
    var headerLogo = document.getElementById("header__logo");
    var Xactive = true;

    header__boton.addEventListener("click", function () {
        var header__menu = document.getElementById("header__menu");
        if (Xactive == true) {
            Xactive = false;
            header__menu.classList.add("header__menu");
            header__menu.classList.remove("inactive");
            header__boton__burger.setAttribute("src", "./img/x.png");
        } else {
            header__menu.classList.remove("header__menu");
            header__menu.classList.add("inactive");
            if (scrollY > 0) {
                header.style.backgroundColor = "white";
                headerLogo.style.color = "black";
                header__boton__burger.setAttribute(
                    "src",
                    "./img/burgerblack.png"
                );
            } else {
                header.style.backgroundColor = "transparent";
                headerLogo.style.color = "white";
                header__boton__burger.setAttribute(
                    "src",
                    "./img/burgerwhite.png"
                );
            }

            Xactive = true;
        }
    });
    var portfolio__filter__web = document.getElementById(
        "portfolio__filter__web"
    );
    var portfolio__filter__ui = document.getElementById(
        "portfolio__filter__ui"
    );
    var portfolio__section__web = document.getElementById(
        "portfolio__section__web"
    );
    var portfolio__section__ui = document.getElementById(
        "portfolio__section__ui"
    );
    portfolio__filter__web.addEventListener("click", function () {
        portfolio__section__web.style.display = "flex";
        portfolio__section__ui.style.display = "none";
        portfolio__filter__web.style.color = "#292929";
        portfolio__filter__ui.style.color = "#999999";
    });
    portfolio__filter__ui.addEventListener("click", function () {
        portfolio__section__web.style.display = "none";
        portfolio__section__ui.style.display = "flex";
        portfolio__filter__web.style.color = "#999999";
        portfolio__filter__ui.style.color = "#292929";
    });
    var idioma = "ingles";
    const textElement = document.getElementById("text");
    const cursorElement = document.getElementById("cursor");

    // const texts = ["DESARROLLADOR WEB", "DISEÑADOR WEB", "ANDRES LAVERDE"];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const texts = ["FULL-STACK DEVELOPER", "DATA ANALYST", "ANDRES LAVERDE"];
    const textsES = ["DESARROLLADOR WEB", "DISEÑADOR WEB", "ANDRES LAVERDE"];
    if (idioma == "ingles") {
        type();
    }
    function type() {
        if (idioma == "ingles") {
            const currentText = texts[textIndex];
            if (isDeleting) {
                textElement.textContent = currentText.substring(
                    0,
                    charIndex - 1
                );
                charIndex--;
            } else {
                textElement.textContent = currentText.substring(
                    0,
                    charIndex + 1
                );
                charIndex++;
            }

            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(type, 1000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, 200);
            } else {
                setTimeout(type, isDeleting ? 50 : 150);
            }
        }
    }

    function typeES() {
        if (idioma == "español") {
            const currentText = textsES[textIndex];
            if (isDeleting) {
                textElement.textContent = currentText.substring(
                    0,
                    charIndex - 1
                );
                charIndex--;
            } else {
                textElement.textContent = currentText.substring(
                    0,
                    charIndex + 1
                );
                charIndex++;
            }

            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(typeES, 1000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % textsES.length;
                setTimeout(typeES, 200);
            } else {
                setTimeout(typeES, isDeleting ? 50 : 150);
            }
        }
    }

    var english = document.getElementById("english");
    var spanish = document.getElementById("spanish");
    var counter = 0;

    spanish.addEventListener("click", function () {
        counter++;
        idioma = "español";
        const textsES = [
            "DESARROLLADOR WEB",
            "DISEÑADOR WEB",
            "ANDRES LAVERDE",
        ];
        typeES();
    });
    english.addEventListener("click", function () {
        counter++;
        idioma = "ingles";
        const texts = ["WEB DEVELOPER", "WEB DESIGNER", "ANDRES LAVERDE"];

        type();
    });
});
