$(document).ready(function () {

    var data = {
    
        labels: ['DS', 'SNS', 'SPS', 'SRS', 'DSS', 'LSV'],
        series: [9911, 3625, 3241, 2259, 1828, 1361]

    };

    var count = 0;
    glasovi = data.series;

    $saberiglasove = function (glasovi) {

        for (var i = glasovi.length; i--;) {
            count += glasovi[i];
        }
        ukupno = count * 2;

    }

    $saberiglasove(glasovi);
    
    $ispis = function(data)
    {
    $(".ct-legend").html("");
    var c = {};
    $.each(data.labels, function (i, v) {
        c[v] = data.series[i];
    });



    for (var key in c) {
        if (c.hasOwnProperty(key)) {
            $(".ct-legend").append("<li><strong> " + key + "</strong>: " + c[key] + "(" + Math.floor((c[key] / count) * 100) + "%) </li>");
        }
    }
        
        
    new Chartist.Pie('.ct-chart', data, {
        donut: true,
        donutWidth: 100,
        startAngle: 270,
        total: ukupno,
        showLabel: true
    });
    }
    
    $ispis(data);


    $(".mesto").html("Укупан резултат")
    
    
    
   


    console.log(count);

    $("#jarkovci").click(function () {

        var data = {
            labels: ['DS', 'SNS', 'SPS', 'SRS', 'DSS', 'LSV'],
            series: [111, 49, 51, 48, 25, 10]

        };

        count = 0;
        glasovi = data.series;
        $saberiglasove(glasovi);


        $(".mesto").html("Јарковци");
        
    
        $ispis(data);



    });


    $("#beska").click(function () {

        var data = {
            labels: ['DS', 'SNS', 'SPS', 'SRS', 'DSS', 'LSV'],
            series: [1148, 556, 355, 246, 194, 385]

        };

        count = 0;
        glasovi = data.series;
        $saberiglasove(glasovi);


        $(".mesto").html("Бешка")
        $ispis(data);

    });

    $("#cortanovci").click(function () {

        var data = {
            labels: ['DS', 'SNS', 'SPS', 'SRS', 'DSS', 'LSV'],
            series: [295, 166, 67, 129, 51, 27]

        };

        count = 0;
        glasovi = data.series;
        $saberiglasove(glasovi);


        $(".mesto").html("Чортановци");
        $(".ct-legend").html("");
        var c = {};
        $.each(data.labels, function (i, v) {
            c[v] = data.series[i];
        });

        for (var key in c) {
            if (c.hasOwnProperty(key)) {
                $(".ct-legend").append("<li><strong> " + key + "</strong>: " + c[key] + "(" + Math.floor((c[key] / count) * 100) + "%) </li>");
            }
        }


    });

    $("#ljukovo").click(function () {

        var data = {
            labels: ['DS', 'SNS', 'SPS', 'SRS', 'DSS', 'LSV'],
            series: [366, 181, 103, 89, 76, 9]

        };

        count = 0;
        glasovi = data.series;
        $saberiglasove(glasovi);


        $(".mesto").html("Љуково");
        $ispis(data);


    });

    $("#maradik").click(function () {

        var data = {
            labels: ['DS', 'SNS', 'SPS', 'SRS', 'DSS', 'LSV'],
            series: [370, 181, 66, 85, 77, 162]

        };

        count = 0;
        glasovi = data.series;
        $saberiglasove(glasovi);


        $(".mesto").html("Mарадик");
        $ispis(data);

    });

    $("#novislankamen").click(function () {

        var data = {
            labels: ['DS', 'SNS', 'SPS', 'SRS', 'DSS', 'LSV'],
            series: [531, 218, 243, 197, 174, 103]

        };

        count = 0;
        glasovi = data.series;
        $saberiglasove(glasovi);


        $(".mesto").html("Нови Сланкамен");
        $ispis(data);

    });

    $("#novikarlovci").click(function () {

        var data = {
            labels: ['DS', 'SNS', 'SPS', 'SRS', 'DSS', 'LSV'],
            series: [708, 187, 218, 108, 64, 38]

        };

        count = 0;
        glasovi = data.series;
        $saberiglasove(glasovi);


        $(".mesto").html("Нови Карловци");
        $ispis(data);

    });

    $("#starislankamen").click(function () {

        var data = {
            labels: ['DS', 'SNS', 'SPS', 'SRS', 'DSS', 'LSV'],
            series: [132, 41, 62, 12, 29, 25]

        };

        count = 0;
        glasovi = data.series;
        $saberiglasove(glasovi);


        $(".mesto").html("Стари Сланкамен");
        $ispis(data);

    });

    $("#krcedin").click(function () {

        var data = {
            labels: ['DS', 'SNS', 'SPS', 'SRS', 'DSS', 'LSV'],
            series: [404, 163, 190, 146, 82, 39]

        };

        count = 0;
        glasovi = data.series;
        $saberiglasove(glasovi);


        $(".mesto").html("Крчедин");
        $ispis(data);

    });

    $("#slvinogradi").click(function () {

        var data = {
            labels: ['DS', 'SNS', 'SPS', 'SRS', 'DSS', 'LSV'],
            series: [94, 8, 31, 1, 11, 16]

        };

        count = 0;
        glasovi = data.series;
        $saberiglasove(glasovi);


        $(".mesto").html("Сланкаменачки Виногради");
        $ispis(data);

    });


    $("#indjija-grad").click(function () {

        var data = {
            labels: ['DS', 'SNS', 'SPS', 'SRS', 'DSS', 'LSV'],
            series: [5751, 1875, 1855, 1198, 1045, 556]

        };

        count = 0;
        glasovi = data.series;
        $saberiglasove(glasovi);


        $(".mesto").html("Инђија")
        $ispis(data);   

    });
});