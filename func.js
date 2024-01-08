const wrapper = document.querySelector(".sliderwrapper")
const menuitems = document.querySelectorAll(".menuitem")

wrapper.style.transform = "translateX(00vw)"
// // Get all slider items
// const sliderItems = document.querySelectorAll('.slideritem');

// let index = 0;
// const timeInterval = 3000; // Interval between slides in milliseconds

// function showSlide() {
//     // Hide all slider items
//     sliderItems.forEach(item => {
//         item.style.display = 'none';
//     });

//     // Show current slide
//     sliderItems[index].style.display = 'block';

//     // Move to the next slide
//     index++;
//     if (index >= sliderItems.length) {
//         index = 0;
//     }

//     // Repeat after interval
//     setTimeout(showSlide, timeInterval);
// }

// // Start the slideshow
// showSlide();
function openPopup() {

    couponPopup.style.display = 'block';

}



// Function to close the popup

function closePopupFunc() {

    couponPopup.style.display = 'none';

}



// Function to copy the code

function copyDiscountCode() {
    const discountCode = document.getElementById('discountCode').innerText;
    // Create a temporary input element
    const tempInput = document.createElement('input');

    tempInput.value = discountCode;

    document.body.appendChild(tempInput);



    // Select the text in the input element

    tempInput.select();

    tempInput.setSelectionRange(0, 99999); /* For mobile devices */



    // Copy the text to the clipboard

    document.execCommand('copy');



    // Remove the temporary input

    document.body.removeChild(tempInput);



    alert(`Code "${discountCode}" copied to clipboard!`);

}



// Event listeners for opening, closing, and copying the code

couponButton.addEventListener('click', openPopup);

closePopup.addEventListener('click', closePopupFunc);

document.getElementById('copyCode').addEventListener('click', copyDiscountCode);






    
    

