let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android()
                || isMobile.BlackBerry()
                || isMobile.iOS()
                || isMobile.Opera()
                || isMobile.Windows()
                );
    }
};

let body = document.querySelector('body');
if(isMobile.any()){         //to comment for arrow on pc
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.arrow');
    for(i=0;i<arrow.length;i++){
        let thisLink = arrow[i].previousElementSibling;
        let subMenu = arrow[i].nextElementSibling;
        let thisArrow = arrow[i];
        thisLink.classList.add('parent');
        arrow[i].addEventListener('click', function () {
            subMenu.classList.toggle('open');
            thisArrow.classList.toggle('active');
        });
    }
}else{//to comment for arrow on pc
    body.classList.add('mouse');//to comment for arrow on pc
}//to comment for arrow on pc


let burger = document.getElementById('burger');
let menu = document.getElementById('menu');
let navbar = document.getElementById('navbar');
burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    navbar.classList.toggle('active');
    body.classList.toggle('lock');
});