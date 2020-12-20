$(function () {
    $(".nav-menu-item").click(function () {
        let target = $(this).attr('href'), top = $(target).offset().top;
        $('html, body').animate({scrollTop: top}, 3000);
        return false;
    });
});
const buttonUp = document.createElement("button");
$(document.body.prepend(buttonUp));
buttonUp.textContent = "Наверх";
buttonUp.style.display = "none";

$(function () {
    $(window).scroll(function () {
        var top = $(document).scrollTop();
        if (top > document.documentElement.clientHeight) {
            $(buttonUp).addClass('show-button');
        } else $(buttonUp).removeClass('show-button');
    });
});

$(buttonUp).click(function () {
    $('html, body').animate({scrollTop: 0}, 3000)
    $(buttonUp).removeClass('show-button');
});

$("#popularClients").after('<button style="background-color: orangered" id="hide">Свернуть/развернуть</button>');
$("#hide").click(function () {
    $("#popularClients").slideToggle("slow");
});