$('.slick').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '.prev',
    nextArrow: '.next',
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                autoplay: true,
                speed: 1000,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
let button = document.querySelector(".btnn");
let button2 = document.querySelector(".btnn2");

let p = document.querySelector(".number");

button.addEventListener("click", function () {
    p.innerHTML++;
})
button2.addEventListener("click", function () {
    p.innerHTML -= 1;
})

var countDownDate = new Date("Oct 27, 2023 00:00:00").getTime();
var x = setInterval(() => {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("demo").innerHTML = days + ": " + hours + " :"
        + minutes + ": " + seconds;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }

}, 1000);

let accordian = document.querySelectorAll(".acc");

accordian.forEach((row) => {
    row.addEventListener("click", () => {
        const x = document.querySelector(".active");

        row.classList.toggle("active");
        x && x.classList.remove("active");
    })
})