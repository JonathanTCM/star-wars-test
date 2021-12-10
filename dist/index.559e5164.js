/**
 * pageOffset est préférable par rappport à scrollY (https://developer.mozilla.org/fr/docs/Web/API/Window/scrollY)
 * Ceci est un polyfill pour gérer sur tous les navigateurs le pageOffset
 */ const scrollY = ()=>{
    const supportPageOffset = window.pageXOffset !== undefined;
    const isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
};
const initializeParallaxToElement = (element)=>{
    const ratio = parseFloat(element.dataset.speedParallax);
    const screenMiddleY = scrollY() + window.innerHeight / 2;
    const elementMiddleY = element.offsetTop + element.offsetHeight / 2;
    const differenceY = elementMiddleY - screenMiddleY;
    element.style.setProperty('transform', `translateY(${differenceY * -0.5 * ratio}px)`);
};
const applyParallaxToElements = ()=>{
    const parallaxElements = document.querySelectorAll('[data-speed-parallax]');
    Array.from(parallaxElements).map((element)=>document.addEventListener('scroll', ()=>initializeParallaxToElement(element)
        )
    );
};
applyParallaxToElements();

//# sourceMappingURL=index.559e5164.js.map
