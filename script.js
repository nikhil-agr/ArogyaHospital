// const slides = document.getElementsByClassName('slide'); // doesn't work because getElementsByClassName return array-like object but not array
const slides = document.querySelectorAll('.slide');
var counter = 0;
console.log(typeof(slides));
slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)
const goNext = () => {
    counter = (counter + 1) % slides.length;
    slideImage();
}
const goPrev = () => {
    if (counter == 0)
        counter = slides.length - 1;
    else
        counter--;
    slideImage();
}
const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}
const automatic = setInterval(() => {
    counter = (counter + 1) % slides.length;
    // slideImage();
},4000);



// Chat-Bot
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}