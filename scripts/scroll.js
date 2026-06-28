document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const id = this.getAttribute('href');
        const alvo = document.querySelector(id);

        if (!alvo) return;

        e.preventDefault();

        const alturaHeader = document.querySelector('header').offsetHeight;
        const posicao = alvo.getBoundingClientRect().top + window.scrollY - alturaHeader - 10;

        window.scrollTo({ top: posicao, behavior: 'smooth' });
    });
});