var countDownDate = new Date("Oct 14, 2022 08:00:00").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = '<div id=day>' + days + "<br>days " + '</div>' + '<div id=hr>' + hours + "<br>hrs " + '</div>' + '<div id=min>' + minutes + "<br>mins " + '</div>' + '<div id=sec>' + seconds + "<br>secs " + '</div>';

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer-top").innerHTML = "EVENT STARTED";
        document.getElementById("timer-top").classList.add("btn", "btn-light")
        document.getElementById("timer-top").style.fontSize = "40px"
        document.getElementById("timer").innerHTML = "";
    }
}, 1000);




const copyBtn = document.getElementById("copy-btn");

copyBtn.addEventListener("click", () => {
  const number = "123";
  navigator.clipboard.writeText(number);
});

