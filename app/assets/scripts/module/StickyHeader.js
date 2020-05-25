import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'


class StickyHeader{
constructor(){
this.siteHeader=document.querySelector('.site-header')
this.pageSections=document.querySelectorAll(".page-section")
this.browserHeight=window.innerHeight
this.prevScrollY=window.scrollY
this.events()
}
events(){
    window.addEventListener('scroll',throttle(()=>this.runOnScroll(),200))
    window.addEventListener('resize',debounce(()=>{
        this.browserHeight=window.innerHeight;
    },333))
}
runOnScroll(){
    this.detScrollDir()
    if(window.scrollY>250){
        this.siteHeader.classList.add("site-header--dark")
    }else{
        this.siteHeader.classList.remove("site-header--dark")
    }

    this.pageSections.forEach(el=> this.calcSection(el))
    


}
detScrollDir(){
    if(window.scrollY>this.prevScrollY){
        this.scrollDirection='down'
   

    }
    else{
        this.scrollDirection='up'
   

    }
    this.prevScrollY=window.scrollY;
}



calcSection(el){
   
    if(window.scrollY+this.browserHeight>el.offsetTop && window.scrollY<el.offsetTop+el.offsetHeight){
        let scrollPerccent=el.getBoundingClientRect().y/this.browserHeight*100;
        if(scrollPerccent<18 && scrollPerccent>-0.1 && this.scrollDirection=='down' || scrollPerccent<33 && this.scrollDirection=='up'){
            let matching=el.getAttribute("data-matching-link")

            document.querySelectorAll(`.primary-nav a:not(${matching})`).forEach(el=> el.classList.remove('is-current-link'))
            document.querySelector(matching).classList.add('is-current-link')
            
        }
       
    }
}
}


export default StickyHeader;