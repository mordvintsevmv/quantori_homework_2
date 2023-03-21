let laser = new Audio('../sound/laser.mp3');

const createRandomFilter = () => {
    return `
        invert(${Math.floor(Math.random() * 100)}%) 
        sepia(${Math.floor(Math.random() * 100)}%) 
        saturate(${Math.floor(Math.random() * 10000)}%) 
        hue-rotate(${Math.floor(Math.random() * 360)}deg) 
        brightness(${Math.floor(Math.random() * 10)*10}%) 
        contrast(${Math.floor(Math.random() * 100)}%)`
}

document.getElementById('dvd-logo').addEventListener('animationiteration', ()=>{
    document.getElementById('dvd-logo').style.filter = createRandomFilter();
    laser.cloneNode(true).play();
})