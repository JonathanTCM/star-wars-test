  /**
   * pageOffset est préférable par rappport à scrollY (https://developer.mozilla.org/fr/docs/Web/API/Window/scrollY) 
   * Ceci est un polyfill pour le gérer sur tous les navigateurs le pageOffset 
   */
   const scrollY=()=>{
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
}

function Parallax(){
const parallaxElements= document.querySelectorAll('[data-speed-parallax]')

const onScroll=(element)=>{
    const ratio= parseFloat(element.dataset.speedParallax);
    const screenMiddleY= scrollY()+ window.innerHeight/2;
    const elementMiddleY= element.offsetTop + element.offsetHeight /2;
    const differenceY= elementMiddleY- screenMiddleY
    
    element.style.setProperty('transform', `translateY(${differenceY * -0.5 * ratio}px)`)
}

Array.from(parallaxElements).map((element)=>(
    document.addEventListener('scroll', ()=> onScroll(element))
));
}

(function main(){
Parallax()
})()
