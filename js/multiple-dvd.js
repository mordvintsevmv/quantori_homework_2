let laser = new Audio('../sound/laser.mp3');

// Function for creating random color of img with CSS filter
const createRandomFilter = () => {
    return `
        invert(${Math.floor(Math.random() * 100)}%) 
        sepia(${Math.floor(Math.random() * 100)}%) 
        saturate(${Math.floor(Math.random() * 10000)}%) 
        hue-rotate(${Math.floor(Math.random() * 360)}deg) 
        brightness(${Math.floor(Math.random() * 100)}%) 
        contrast(${Math.floor(Math.random() * 100)}%)`
}

// Function for creating random animation speed and delay with CSS animations
createRandomAnimation = () => {
    let delay = 30*Math.floor(Math.random() * 10);

    let speedX = Math.floor(Math.random() * 10)
    let speedY = Math.floor(Math.random() * 10)

    return `dvd-bounce-horizontal ${speedX}s linear -${delay}s infinite alternate,
         dvd-bounce-vertical ${speedY}s linear -${delay}s infinite alternate`
}

// Function for adding filters, animations and listeners to new element
const addAnimation = (element) => {

    element.style.animation = createRandomAnimation();

    element.addEventListener("animationiteration", ()=>{
        element.style.filter = createRandomFilter()

        laser.cloneNode(true).play().then(() => {
            document.getElementById('warning-text').style.display = "none"
        });
    })
    return element
}

// Adding animations for 1st logo (already in DOM)
addAnimation(document.getElementById(`dvd-logo`))

// Creating listener for adding new logos
document.getElementById("dvd-add").addEventListener('click', ()=>{

    document.getElementById("dvd-remove").style.display = "block"

    const dvd_logos = document.getElementsByClassName('dvd-logo')
    if (dvd_logos.length === 6){
        document.getElementById("dvd-add").style.display = "none"
    }

    let dvd_logo = document.createElement("img");

    dvd_logo.src = "../img/dvd-logo.png"
    dvd_logo.className = "dvd-logo";
    dvd_logo.style.filter = createRandomFilter();
    dvd_logo.alt = "dvd logo"

    dvd_logo = addAnimation(dvd_logo)

    document.getElementById("screen-wrapper").appendChild(dvd_logo)
})

// Creating listener for removing last logo
document.getElementById("dvd-remove").addEventListener('click', ()=>{
    const dvd_logos = document.getElementsByClassName('dvd-logo')

    document.getElementById("dvd-add").style.display = "block"
    if (dvd_logos.length === 2){
        document.getElementById("dvd-remove").style.display = "none"
    }
    dvd_logos.item(document.getElementsByClassName('dvd-logo').length-1).remove()
})

// Remove warning message by click
document.addEventListener('click', () => {
    document.getElementById('warning-text').style.display = "none"
})
