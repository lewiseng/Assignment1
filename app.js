const typedTextSpan = document.querySelector(".typed-text");


const textArray = ["Stream", "Rate", "Share", "Musing"];
const colorList = ["#b4f06f","#f2ff40","#b5f4ff","#ffccffd7"];

const typingDelay = 150;
const erasingDelay = 150;
const newTextDelay = 500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = textArray[0].length;

function type() {
    if (charIndex < textArray[textArrayIndex].length ) {
        typedTextSpan.style.color = colorList[textArrayIndex];
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex++);
        setTimeout(type, typingDelay);
    } 
    else {
        if (textArrayIndex<textArray.length-1){
            setTimeout(erase, newTextDelay);
        }
        else{
            typedTextSpan.classList.add("sign");
        }
    }
}

function erase() {
	if (charIndex >= 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex--);
        setTimeout(erase, erasingDelay);
    } 
    else {
        textArrayIndex++;
        setTimeout(type, typingDelay + 600);
    }
}

function addBr() {
    if (window.matchMedia("(max-width: 768px)").matches) { // If media query matches
        typedTextSpan.insertAdjacentHTML("afterend", "<br>")
    }
}


document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    addBr();
    if(textArray.length){
        typedTextSpan.style.color = colorList[textArrayIndex];
        typedTextSpan.textContent += textArray[textArrayIndex];
        setTimeout(erase, newTextDelay + 250);
  } 
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});