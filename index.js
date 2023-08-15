document.addEventListener("DOMContentLoaded", function() {

    window.addEventListener("scroll",function(){
        var header = document.getElementById("header")
        var headerLogo = document.getElementById("header__logo")
        var header__boton__burger = document.getElementById("header__boton__burger")
        var menu__desktop__a1 = document.getElementById("menu__desktop__a1")
        var menu__desktop__a2 = document.getElementById("menu__desktop__a2")
        var menu__desktop__a3 = document.getElementById("menu__desktop__a3")
        var menu__desktop__a4 = document.getElementById("menu__desktop__a4")
        
        var scrollY = window.scrollY
    if(Xactive==true){
        if(scrollY>0 ){
            header.style.backgroundColor = "white"
            headerLogo.style.color = "black"
            header__boton__burger.setAttribute("src", "./img/burgerblack.png")
            menu__desktop__a1.style.color = "black";
            menu__desktop__a2.style.color = "black";
            menu__desktop__a3.style.color = "black";
            menu__desktop__a4.style.color = "black";
            
        }
        else{
            header.style.backgroundColor = "transparent"
            headerLogo.style.color = "white"
            header__boton__burger.setAttribute("src", "./img/burgerwhite.png")
            menu__desktop__a1.style.color = "white";
            menu__desktop__a2.style.color = "white";
            menu__desktop__a3.style.color = "white";
            menu__desktop__a4.style.color = "white";
            
        }
    }else{
        header.style.backgroundColor = "white"
            headerLogo.style.color = "black"
    }
        
    
    })

    var header__boton = document.getElementById("header__boton")
    var headerLogo = document.getElementById("header__logo")
    var Xactive = true;

    header__boton.addEventListener("click", function(){
        var header__menu = document.getElementById("header__menu")
        if(Xactive==true){
            Xactive = false;
            header__menu.classList.add("header__menu")
            header__menu.classList.remove("inactive")
            header__boton__burger.setAttribute("src", "./img/x.png")
            
        }
        else{
            header__menu.classList.remove("header__menu")
            header__menu.classList.add("inactive")
            if(scrollY>0){
                header.style.backgroundColor = "white"
                headerLogo.style.color = "black"
                header__boton__burger.setAttribute("src", "./img/burgerblack.png")
            }
            else{
                header.style.backgroundColor = "transparent"
                headerLogo.style.color = "white"
                header__boton__burger.setAttribute("src", "./img/burgerwhite.png")
            }
            
            Xactive = true;
        }
        

    })


})
