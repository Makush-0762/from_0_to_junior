$('.menu__list li a').on('click', function () {
    $('.menu li').find('.active').removeClass('active');
    $(this).addClass('active');
});

$('#burger').click(function () {
    $('.menu').toggleClass('menu_active');
});




$('#toCall').click(function () {
    $('#to-Call').removeClass('activePopup').fadeIn(600);
});
$('.popup-close').click(function () {
    $('#to-Call').addClass('activePopup').fadeOut(400);
});
$('.popup-wrapper').click(function () {
    $('#to-Call').addClass('activePopup').fadeOut(400);
});
$('#closePopup').click(function () {
    $('#to-Call').addClass('activePopup').fadeOut(400);
});


$('#showMap').click(function () {
    $('#show-Map').removeClass('activePopup').fadeIn(600);
});
$('.popup-close').click(function () {
    $('#show-Map').addClass('activePopup').fadeOut(400);
});
$('.popup-wrapper').click(function () {
    $('#show-Map').addClass('activePopup').fadeOut(400);
});
$('#closePopup').click(function () {
    $('#show-Map').addClass('activePopup').fadeOut(400);
});


$('#writeToUs').click(function () {
    $('#write-ToUs').removeClass('activePopup').fadeIn(600);
});
$('.popup-close').click(function () {
    $('#write-ToUs').addClass('activePopup').fadeOut(400);
});
$('.popup-wrapper').click(function () {
    $('#write-ToUs').addClass('activePopup').fadeOut(400);
});
$('#closePopup').click(function () {
    $('#write-ToUs').addClass('activePopup').fadeOut(400);
});



$('#ContactUs').click(function () {
    $('#Contact-Us').removeClass('activePopup').fadeIn(600);
});
$('.popup-close').click(function () {
    $('#Contact-Us').addClass('activePopup').fadeOut(400);
});
$('#closePopup').click(function () {
    $('#Contact-Us').addClass('activePopup').fadeOut(400);
});
$('#closePopupBut').click(function () {
    location.reload();
});