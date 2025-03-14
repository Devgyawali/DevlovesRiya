let slideIndex = 0;
const slides = document.querySelectorAll(".slides");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 1000); // Change image every 1 second
}

document.addEventListener("DOMContentLoaded", showSlides);

const correctPin = "116";
let storySlideIndex = 0;

function checkPin() {
    const pinInput = document.getElementById('pinInput').value;
    if (pinInput === correctPin) {
        document.querySelector('.pin-container').style.display = 'none';
        document.getElementById('storySection').style.display = 'block'; // Show the story section after entering the PIN
        document.getElementById('content').style.display = 'block';
        document.getElementById('content').classList.remove('blurred');
        document.getElementById('bgMusic').play();
        displayLoveMessages();
        showSlide(storySlideIndex); // Show the first slide
    } else {
        alert('Incorrect PIN. Please try again.');
    }
}

function showNextSlide() {
    storySlideIndex++;
    if (storySlideIndex >= document.querySelectorAll('.story-slide').length) {
        storySlideIndex = 0; // Loop back to the first slide
    }
    showSlide(storySlideIndex);
}

function showPreviousSlide() {
    storySlideIndex--;
    if (storySlideIndex < 0) {
        storySlideIndex = document.querySelectorAll('.story-slide').length - 1; // Loop back to the last slide
    }
    showSlide(storySlideIndex);
}

function showSlide(index) {
    const slides = document.querySelectorAll('.story-slide');
    slides.forEach((slide, idx) => {
        slide.style.display = idx === index ? 'block' : 'none'; // Show the current slide
    });
    document.getElementById('message').innerText = "Curious huh? ╰(*°▽°*)╯";
    document.getElementById('message').style.display = 'block'; // Show the message
}

function toggleMusic() {
    const music = document.getElementById('bgMusic');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}