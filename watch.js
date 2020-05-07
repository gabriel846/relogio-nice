function updateTime () {
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;


    var eHour = document.querySelectorAll('.hour')[0];
    var eMin = document.querySelectorAll('.minutes')[0];
    var eSec = document.querySelectorAll('.seconds')[0];

    eHour.innerHTML = hour;
    eMin.innerHTML = minutes;
    eSec.innerHTML = seconds;

    var today = date.getDay();
    var arrDays = ['domingo',
                   'segunda-feira',
                   'terça-feira',
                   'quarta-feira',
                   'quinta-feira',
                   'sexta-feira',
                   'sabado',];
     var eToday = document.querySelectorAll('.today')[0];
     eToday.innerHTML = arrDays[today];
    }

    updateTime();
    window.setInterval(updateTime, 500);
     