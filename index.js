const submitBtn = document.getElementById('submit-btn');
const sizeInput = document.getElementById('size');
const cmBoxes = document.querySelectorAll('.box');

submitBtn.addEventListener('click', function(event) {
    
    const screenSizeInches = sizeInput.value;
    const screenSizeCm = (screenSizeInches * 1) / 0.3937901
    const screenSizePixels = window.innerHeight;

    const pixelPerCm = screenSizePixels / screenSizeCm;
    cmBoxes.forEach((box) => {
        box.style.height = `${ pixelPerCm }px`;
        box.style.width = `${ pixelPerCm }px`;
    })
    
})
