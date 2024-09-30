    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navigation');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
