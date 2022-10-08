const navOpener = () => {
    const btnNavOpener = document.querySelector(selectors: '.js-nav-opener');
    const navHolder = document.querySelector(selectors: '.js-nav-holder');

    btnNavOpener.addEventListener(type 'click', listener(e : Event) => {
        navHolder.classList.toogle( loker: 'active' );
    });
}

navOpener()