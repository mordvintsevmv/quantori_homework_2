const dvd_logo_1 = document.getElementById('dvd-logo-1')
let laser = new Audio('../sound/laser.mp3');

// Play sound every iteration (every bounce from edge)
dvd_logo_1.addEventListener("animationiteration", () => {
    console.log("YO")
    laser.cloneNode(true).play().then(() => {
        document.getElementById('warning-text').style.display = "none"
    });
});

// Remove warning message by click
document.addEventListener('click', () => {
    document.getElementById('warning-text').style.display = "none"
})


