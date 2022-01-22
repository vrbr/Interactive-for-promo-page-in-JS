const scrollFunc = () => {
    const links = document.querySelectorAll('.header-menu__item a');
    const linkCharacteristics = document.querySelector('.card-details__link-characteristics');

    const newArray = [...links, linkCharacteristics];

    seamless.polyfill();

    newArray.forEach((link) => {
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
}

scrollFunc();