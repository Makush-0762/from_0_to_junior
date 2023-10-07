function onClick(){
    var colorDiv = document.getElementById('colorDiv');
    var color = colorDiv.querySelector('.color');
    var clone = color.cloneNode(true);
    colorDiv.appendChild(clone);
    clone.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();

    clone.addEventListener('click', function(){
        clone.classList.add('none');
    });
}
