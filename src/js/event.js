document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('button_arrow').addEventListener('click', function() {
        console.log('Button clicked');
        var hiddenDiv = document.getElementById('informations');
        hiddenDiv.style.display = 'block';
    });
});






// document.getElementById('button_arrow').addEventListener('click', function() {
//     document.getElementById('informations').scrollIntoView({ behavior: 'smooth' });
// }); 