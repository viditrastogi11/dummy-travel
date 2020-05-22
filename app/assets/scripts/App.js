import '../styles/styles.css'
import MobileMenu from './module/MobileMenu'
import RevealOnScroll from './module/RevealScroll'

let revealOnScroll= new RevealOnScroll();
let c=new MobileMenu();
if(module.hot){
    module.hot.accept()
}