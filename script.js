//Start of slider
let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

setInterval(nextSlide, 3000);
//end of slider

//start of model structure
// Modal
/*
const modal = document.getElementById('online-banking-modal');
const trigger = document.getElementById('online-banking');
const closeBtn = document.querySelector('.close');

// Show the modal when hovering over "Online Banking"
trigger.addEventListener('mouseenter', () => {
    modal.style.display = 'block';
});

// Hide the modal when the mouse leaves the "Online Banking" div or modal content
trigger.addEventListener('mouseleave', () => {
    modal.style.display = 'none';
});
modal.addEventListener('mouseleave', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking the "x" button
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

*/

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const modal = document.getElementById('successModal');
    const closeBtn = document.querySelector('.modal .close');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
        setTimeout(() => {
            modal.style.display = 'block'; 
        }, 500); 
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'; 
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none'; 
        }
    });
});