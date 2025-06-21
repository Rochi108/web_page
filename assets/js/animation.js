document.addEventListener("DOMContentLoaded", function() {

    const img = document.querySelector('.me .me_photo img');
    if (img) {
        setTimeout(() => {
            img.classList.add('animated');
        }, 100);
    }

    const h1 = document.querySelector('.me .me_info h1');
    if (h1) {
        setTimeout(() => {
            h1.classList.add('animated');
        }, 300);
    }

    const p = document.querySelector('.me .me_info p');
    if (p) {
        setTimeout(() => {
            p.classList.add('animated');
        }, 600);
    }

    const philosophy = document.querySelector('.me .me_info .philosophy');
    if (philosophy) {
        setTimeout(() => {
            philosophy.classList.add('animated');
        }, 900);
    }
});