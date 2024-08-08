document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('botao').addEventListener('click', function() {
        console.log('Button clicked');
        var hiddenDiv = document.getElementById('informations');
        hiddenDiv.style.display = 'block';
    });
});