function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    var d = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    if(h == 0){
        h = 12;
    }

    if(h>12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session ;
    var time1 = d + "/" +month + "/" + year;

    document.getElementById("MyClockDisplay").innerHTML = time;
    document.getElementById("MyDayDisplay").innerHTML = time1;
    // document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();