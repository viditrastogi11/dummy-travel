import throttle from 'lodash/throttle'


class RevealOnScroll{
    constructor(){
        this.itemToReveal=document.querySelectorAll('.feature-item');
        this.hideInit();
        this.scrollThrottle=throttle(this.calcCaller,200).bind(this);
        this.events()
    }
    hideInit(){
        this.itemToReveal.forEach((el)=>{
            el.classList.add('reveal-item')
            el.isRevealed=false;
        })
        
        this.itemToReveal[this.itemToReveal.length - 3].isLastItem=true;
    }
    events(){
        window.addEventListener("scroll",this.scrollThrottle)

    }
    calcCaller(){
        this.itemToReveal.forEach(el=>{
            if(el.isRevealed==false){
            this.calcIfScrollTo(el)
            }
        })
    }
    calcIfScrollTo(el){
       let scrollPercent =(el.getBoundingClientRect().y/window.innerHeight)*100;
       if(scrollPercent<75){
           el.classList.add('reveal-item--is-visible');
           el.isRevealed=true;
           if(el.isLastItem){
               window.removeEventListener("scroll",this.scrollThrottle)
           }
       }
    }
}
export default RevealOnScroll;