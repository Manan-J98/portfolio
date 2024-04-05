// import { gsap } from "gsap";

const pointer = document.getElementById('pointer');
function updatePointer(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    // Update pointer size based on mouse speed
    const speed = Math.sqrt(event.movementX ** 2 + event.movementY ** 2);
    const maxSize = 50; // Maximum size
    const minSize = 10; // Minimum size
    const size = Math.min(maxSize, Math.max(minSize, speed)); // Clamp size between minSize and maxSize
    pointer.style.width = `${size}px`;
    pointer.style.height = `${size}px`;

    setTimeout(() => {
        pointer.style.left = `${mouseX - 5}px`; // Subtract half of the circle's width
        pointer.style.top = `${mouseY - 5}px`; // Subtract half of the circle's height
    }, 100);    
}
// Function to hide the cursor when pointer exits the webpage
function hideCursor() {
    pointer.style.display = 'none';
}

// Function to show the cursor when pointer enters the webpage
function showCursor() {
    pointer.style.display = 'block';
}

// Attach event listeners to hide and show cursor
document.addEventListener('mouseleave', hideCursor);
document.addEventListener('mouseenter', showCursor);

document.addEventListener('mousemove', updatePointer);

const draggableDivs = document.querySelectorAll(".dragable-div");

// Iterate over each draggable div
draggableDivs.forEach(draggable_div => {
    const header = draggable_div.querySelector("header");

    // Function to handle the drag
    function onDrag({ movementX, movementY }) {
        let getStyle = window.getComputedStyle(draggable_div);
        let left = parseInt(getStyle.left);
        let top = parseInt(getStyle.top);
        draggable_div.style.left = `${left + movementX}px`;
        draggable_div.style.top = `${top + movementY}px`;
    }

    // Add mousedown event listener to header
    header.addEventListener("mousedown", () => {
        header.classList.add("active");
        header.addEventListener("mousemove", onDrag);
    });

    // Add mouseup event listener to document
    document.addEventListener("mouseup", () => {
        header.classList.remove("active");
        header.removeEventListener("mousemove", onDrag);
    });
});

const elements = document.getElementsByClassName("dragable-div");
const toggleDiv = elements[0];
console.log(toggleDiv);
function toggleAboutMeInfo() {
    if (toggleDiv.style.display == "none") {
        toggleDiv.style.display = "block";
    } else {
        toggleDiv.style.display = "none";
    }
}

const contactDiv = document.getElementById("contact-me");
function toggleContactInfo() {
    if (contactDiv.style.display == "none") {
        contactDiv.style.display = "block";
    } else {
        contactDiv.style.display = "none";
    }
}

// next button action
let carouselDom = document.querySelector('.carousel');
let carouselItems = document.querySelectorAll(".item");
let SliderDom = carouselDom.querySelector('.carousel .list');

function nextButtonAction() {
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    SliderDom.appendChild(SliderItemsDom[0]);
        carouselDom.classList.add('active');

        runTimeOut = setTimeout(() => {
            carouselDom.classList.remove('active');
        }, 2000);
}

function prevButtonAction() {
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1])
        runTimeOut = setTimeout(() => {
        }, 2000);
}

// REDIRECTION
function goToStore(url) {
    console.log(url)
    window.open(url, '_blank');
}

//Loading 
function startLoader() {
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;

    function updateCounter() {
        if (currentValue == 100) {
            return;
        }

        currentValue += Math.floor(Math.random() * 10) + 1;

        if (currentValue > 100) {
            currentValue = 100;
        }

        counterElement.textContent = currentValue;
        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
    }

    updateCounter();
}

startLoader();


gsap.to(".counter", 0.25, {
    delay: 3.5,
    opacity: 0,
    display: "none",
});

gsap.to(".bar", 1.5, {
    delay: 3.5,
    height: 0,
    stagger: {
        amount: 0.5,
    },
    display: "none",
    ease: "power4.inOut"
});

const heading = new SplitType('#heading');
gsap.to('.char', {
    y:0,
    stagger: 0.05, 
    delay: 4.5,
    duration: .1
})

const subheading = document.getElementById('subheading');
const letters = "abcdefghijklmnopqrstuvwxyz";
let iterations = 0;
function scrambleText() {
    // console.log(subheading.dataset.value.length);
    console.log(subheading.dataset.value.split(""));
    const interval = setInterval(() => {
        subheading.textContent = subheading.dataset.value.split("").map((letter, index) => {
            if (index < iterations) {
                return subheading.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)]}).join("");

        if (iterations >= subheading.dataset.value.length) {
            clearInterval(interval);
        }
        iterations += 1/2;
    }, 40);
    console.log(subheading.textContent.length);
    
}

setTimeout(() => {
    scrambleText();
}, 5000);

