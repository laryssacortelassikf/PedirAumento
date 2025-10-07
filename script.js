document.getElementById('nao').addEventListener('mouseenter', function() {
    let button = this;

        let maxX = window.innerWidth - button.offsetWidth;
    let maxY = window.innerHeight - button.offsetHeight;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
});
