// set to grayscale
document.body.style.filter = 'grayscale(100%)';

// Safari 6.0 - 9.0
document.body.style.WebkitFilter = 'grayscale(100%)';

// slower method because it requires iteration
//Array.from(document.getElementsByTagName('*')).forEach(element => element.style.filter = 'grayscale(100%)');
