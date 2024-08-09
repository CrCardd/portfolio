document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('button_arrow').addEventListener('click', function() {
        console.log('Button clicked');
        var hiddenDiv = document.getElementById('informations');
        hiddenDiv.style.display = 'flex';

        window.scrollBy({
            top: 700, // Scroll down by the height of the viewport
            left: 0,
            behavior: 'smooth'
        });
    });
});

// let informations = document.getElementById('informations');
// let button = document.getElementById('button_arrow');


// button.addEventListener('click', (e) => {
//     informations.style.display = block
// });
