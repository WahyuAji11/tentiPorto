$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,

        },
            500,
            'linear'
        );
    });

});

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let email = "alhafidzw1@gmail.com";
    let mailtoLink = "mailto:" + email;

    window.location.href = mailtoLink;
});



// contact
function sendEmail(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const senderEmail = document.getElementById('sender-email').value;
    const project = document.getElementById('project').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:tentiresida@gmail.com?subject=New Project Inquiry: ${project}&body=Name: ${name}%0D%0A%0D%0AEmail: ${senderEmail}%0D%0A%0D%0AProject: ${project}%0D%0A%0D%0AMessage:%0D%0A${message}`;

    window.location.href = mailtoLink;
}