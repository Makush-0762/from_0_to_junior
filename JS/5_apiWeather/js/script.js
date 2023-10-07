$('document').ready(function name(params) {

    var myValue = "";
    var baseUrl = ``;
    
    $('#searchIcon').on('click', function (event) {

        event.preventDefault();
        myValue = $('#search-login').val();
        // console.log(myValue);
        baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${myValue}&appid=f5d0b16b302eccb1e4d44007280bd6b9&units=metric`;
        $.ajax({
            url: baseUrl,
            dataType: "json",
        }).done(function (data) {
            console.log(data);


            $('#weather-Type').html(`${data.weather[0].main}`);
            $('#dataTo').html(`${Date('y-m-d')}`);

            $('#name-city').html(`${data.name}`);
            $('#imgWeather').attr('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            $('#minTemp').html(`${data.main.temp_min}`);
            $('#maxTemp').html(`${data.main.temp_max}`);
            $('#windSpeed').html(`${data.wind.speed}`);
            $('#temperature').html(`${data.main.temp}&#176;С`);

        }).fail(function () {

            $('.weatherToday').addClass('active');
            $('.errorPar').removeClass('dissplayN');
        });
        $('.errorPar').addClass('dissplayN');
        $('.weatherToday').removeClass('active');

    });
});