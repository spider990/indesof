const button = document.querySelector('.mini-box');
const mouseHoverAnimation = function() {
    anime({
        targets: '.mini-box',
        borderRadius: ['50%'],
        easing: 'easeInOutSine',
        duration: 500,
        scale: 1.2,
    })
}
const mouseOutAnimation = function() {
    anime({
        targets: '.mini-box',
        borderRadius: ['0%'],
        easing: 'easeInOutSine',
        duration: 500,
        scale: 1,
    })
}

button.addEventListener('mouseover', mouseHoverAnimation);
button.addEventListener('mouseout', mouseOutAnimation);

const button1 = document.querySelector('.mini-box1');
const mouseHoverAnimation1 = function() {
    anime({
        targets: '.mini-box1',
        borderRadius: ['50%'],
        easing: 'easeInOutSine',
        duration: 500,
        scale: 1.2,
    })
}
const mouseOutAnimation1 = function() {
    anime({
        targets: '.mini-box1',
        borderRadius: ['0%'],
        easing: 'easeInOutSine',
        duration: 500,
        scale: 1,
    })
}

button1.addEventListener('mouseover', mouseHoverAnimation1);
button1.addEventListener('mouseout', mouseOutAnimation1);

const button2 = document.querySelector('.mini-box2');
const mouseHoverAnimation2 = function() {
    anime({
        targets: '.mini-box2',
        borderRadius: ['50%'],
        easing: 'easeInOutSine',
        duration: 500,
        scale: 1.2,
    })
}
const mouseOutAnimation2 = function() {
    anime({
        targets: '.mini-box2',
        borderRadius: ['0%'],
        easing: 'easeInOutSine',
        duration: 500,
        scale: 1,
    })
}

button2.addEventListener('mouseover', mouseHoverAnimation2);
button2.addEventListener('mouseout', mouseOutAnimation2);


const button3 = document.querySelector('.mini-box3');
const mouseHoverAnimation3 = function() {
    anime({
        targets: '.mini-box3',
        borderRadius: ['50%'],
        easing: 'easeInOutSine',
        duration: 500,
        scale: 1.2,
    })
}
const mouseOutAnimation3 = function() {
    anime({
        targets: '.mini-box3',
        borderRadius: ['0%'],
        easing: 'easeInOutSine',
        duration: 500,
        scale: 1,
    })
}

button3.addEventListener('mouseover', mouseHoverAnimation3);
button3.addEventListener('mouseout', mouseOutAnimation3);

const button4 = document.querySelector('.mini-box4');
const mouseHoverAnimation4 = function() {
    anime({
        targets: '.mini-box4',
        borderRadius: ['50%'],
        easing: 'easeInOutSine',
        duration: 500,
        scale: 1.2,
    })
}
const mouseOutAnimation4 = function() {
    anime({
        targets: '.mini-box4',
        borderRadius: ['0%'],
        easing: 'easeInOutSine',
        duration: 500,
        scale: 1,
    })
}

button4.addEventListener('mouseover', mouseHoverAnimation4);
button4.addEventListener('mouseout', mouseOutAnimation4);





