$('document').ready(function name(params) {
    var baseUrl = "https://api.github.com/users/";
    var myValue = null;
    
    $('#search').on('click', function (event) {

        event.preventDefault();
        myValue = $('#search-login').val();
        // console.log(myValue);

        $.ajax({
            url: baseUrl + myValue,
            dataType: "json",
        }).done(function (data) {
            // console.log(data);

            $('#img-ava').attr('src', `${data.avatar_url}`);
            $('#name').html(`${data.name}`);
            $('#Login').html(`${data.login}`);
            $('#urlToGithub').attr({href: data.html_url, target: '_blank'}).html(`${data.html_url}`);
            $('#blog').attr({href: data.blog, target: '_blank'}).html(`${data.blog}`);
            $('#city').html(`${data.location}`);
            $('#email').html(`${data.email}`);
            $('#folovvers').html(`${data.followers}`);
            $('#following').html(`${data.following}`);

        }).fail(function () {
            $('.error').addClass('active');

            $('#img-ava').attr('src', ``);

            $('#name').html(``);
            $('#Login').html(``);
            $('#urlToGithub').html(``);
            $('#blog').html(``);
            $('#city').html(``);
            $('#email').html(``);
            $('#folovvers').html(``);
            $('#following').html(``);

        });

        $('.error').removeClass('active');
    });
});