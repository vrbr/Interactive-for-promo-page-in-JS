const links = document.querySelectorAll('.header-menu__item a');

seamless.polyfill();

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
    
        const id = link.getAttribute('href').substring(1);
        const section = document.getElementById(id);
        
        if (section) {
            seamless.elementScrollIntoView(section, {
                behavior: 'smooth',
                block: 'start'
            })
        }
    })
})
